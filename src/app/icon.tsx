import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#B33A63",
          color: "#FAF6F3",
          fontSize: 20,
          borderRadius: "8px",
        }}
      >
        S
      </div>
    ),
    { ...size }
  );
}
