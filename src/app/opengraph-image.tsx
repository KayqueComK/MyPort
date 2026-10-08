import { ImageResponse } from "next/og";

export const alt = "Kayque Alberto - Desenvolvedor Web";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#f5f5f0",
          color: "#1b1b1b",
        }}
      >
        <div style={{ fontSize: 32, color: "#0057FF", fontWeight: 700 }}>
          PORTFÓLIO
        </div>
        <div style={{ fontSize: 120, fontWeight: 900, letterSpacing: -4, marginTop: 16 }}>
          Kayque Alberto
        </div>
        <div style={{ fontSize: 48, marginTop: 16, opacity: 0.8 }}>
          Desenvolvedor Web
        </div>
        <div style={{ fontSize: 30, marginTop: 40, opacity: 0.6 }}>
          JavaScript · TypeScript · Node.js · Next.js
        </div>
        <div
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            width: 360,
            height: 360,
            borderRadius: 360,
            background: "#0057FF",
            opacity: 0.12,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
