import { ImageResponse } from "next/og";

import { site } from "@/lib/site";
import { thesis } from "@/lib/portfolio";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0b",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#a1a1aa",
            fontSize: 26,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 99,
              background: "#f2c14e",
            }}
          />
          {site.name}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 600,
            color: "#f4f4f5",
            lineHeight: 1.05,
            maxWidth: 900,
          }}
        >
          {thesis.headline}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "#71717a",
            fontSize: 28,
          }}
        >
          <span style={{ color: "#f2c14e" }}>{site.role}</span>
          <span>{site.location}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
