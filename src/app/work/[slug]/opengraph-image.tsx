import { ImageResponse } from "next/og";
import { getCaseStudy, CASE_STUDIES } from "@/content/work";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Case study";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#3D1E36",
          color: "#F6ECE9",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 20,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#C79A5B",
            }}
          >
            {study?.category ?? "Case study"}
          </div>
          <div style={{ marginTop: 26, fontSize: 68, lineHeight: 1.06, maxWidth: "900px" }}>
            {study?.title ?? "Case study"}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 22,
            color: "#C9ADBA",
          }}
        >
          <span>{study?.org ?? ""}</span>
          <span style={{ color: "#F6ECE9" }}>Sawera Nadeem</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
