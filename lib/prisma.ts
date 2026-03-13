import { PrismaClient } from "@prisma/client";

// Singleton to prevent multiple instances of Prisma Client in development.
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

// Neon-optimized connection string logic
const connectionString = process.env.DATABASE_URL;

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    datasourceUrl: connectionString,
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
    errorFormat: 'pretty',
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

/**
 * Robust DB Query Wrapper
 * Handles transient "Closed" connection errors (common with Neon cold starts).
 * Returns fallback if DB is completely unreachable after retries.
 */
export async function safeDbQuery<T>(query: () => Promise<T>, fallback: T): Promise<T> {
  // Skip DB queries during build phase to prevent "Failed to collect page data" errors
  if (process.env.NEXT_PHASE === 'phase-production-build') {
    return fallback;
  }

  try {
    return await query();
  } catch (error: any) {
    const isConnErr = error?.message?.includes('Closed') || 
                      error?.message?.includes('connection') ||
                      error?.message?.includes('reach database');

    if (isConnErr) {
      console.warn("DB Connection Issue (Neon Cold Start?). Retrying in 1s...");
      // Optional: short wait before retry
      await new Promise(r => setTimeout(r, 1000));
      try {
        return await query();
      } catch (retryError) {
        console.error("DB Query failed after retry:", retryError);
        return fallback;
      }
    }
    
    console.error("DB Query Error:", error);
    return fallback;
  }
}
