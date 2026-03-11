import React from "react";

const SproutIcon = ({
  size = 34,
  color = "#ffffff",
  background = "transparent",
  opacity = 1,
  rotation = 0,
  shadow = 0,
  flipHorizontal = false,
  flipVertical = false,
  padding = 0,
}) => {
  const transforms = [];
  if (rotation !== 0) transforms.push(`rotate(${rotation}deg)`);
  if (flipHorizontal) transforms.push("scaleX(-1)");
  if (flipVertical) transforms.push("scaleY(-1)");

  const viewBox = "0 0 640 512";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={size}
      height={size}
      fill="currentColor"
      style={{
        opacity,
        color,
        transform: transforms.join(" ") || undefined,
        filter:
          shadow > 0
            ? `drop-shadow(0 ${shadow}px ${shadow * 2}px rgba(0,0,0,0.3))`
            : undefined,
        backgroundColor: background !== "transparent" ? background : undefined,
      }}>
      <path
        fill="currentColor"
        d="M576 96c0 108.1-76.6 198.3-178.4 219.4c-7.9-58.1-34-110.4-72.5-150.9C365.2 104 433.9 64 512 64h32c17.7 0 32 14.3 32 32M64 160c0-17.7 14.3-32 32-32h32c123.7 0 224 100.3 224 224v192c0 17.7-14.3 32-32 32s-32-14.3-32-32V384C164.3 384 64 283.7 64 160"
      />
    </svg>
  );
};

export default SproutIcon;
