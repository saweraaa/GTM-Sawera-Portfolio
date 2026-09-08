import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Sawera Nadeem, GTM Engineer and AI Systems Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FAF6F3",
          padding: "72px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "10px",
            background: "#B33A63",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "-140px",
            bottom: "-180px",
            width: "560px",
            height: "560px",
            borderRadius: "9999px",
            background: "#E7CBC8",
            opacity: 0.55,
          }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#6E5C63",
            }}
          >
            Sawera Nadeem
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 84,
              lineHeight: 1.02,
              color: "#241A20",
              maxWidth: "820px",
            }}
          >
            I build the systems that fill the pipeline.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            fontSize: 24,
            color: "#6E5C63",
          }}
        >
          <span style={{ color: "#B33A63" }}>GTM Engineer</span>
          <span>·</span>
          <span>Applied AI</span>
          <span>·</span>
          <span>Training</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
