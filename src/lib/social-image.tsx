import { ImageResponse } from "next/og";

export const socialImageAlt = "Birhasani Raka Abiansyah — Product and UI/UX Designer";
export const socialImageSize = { width: 1200, height: 630 };

export function createSocialImage() {
  return new ImageResponse(
    <div style={{ background: "#FFFDF9", color: "#1D2939", display: "flex", height: "100%", width: "100%", padding: "72px", position: "relative", fontFamily: "Georgia, serif" }}>
      <div style={{ background: "#EAF5FB", borderRadius: "999px", height: "240px", position: "absolute", right: "-40px", top: "-55px", width: "240px" }} />
      <div style={{ background: "#FFF0E8", borderRadius: "999px", bottom: "-90px", height: "300px", left: "-70px", position: "absolute", width: "300px" }} />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", width: "100%" }}>
        <div style={{ color: "#245F86", display: "flex", fontFamily: "Arial, sans-serif", fontSize: 24, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>Product &amp; UI/UX Designer</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 76, lineHeight: 1.02, maxWidth: "940px" }}>Designing clear digital experiences for complex systems.</div>
          <div style={{ alignItems: "center", display: "flex", fontFamily: "Arial, sans-serif", fontSize: 28, fontWeight: 700, marginTop: "38px" }}><span style={{ background: "#B94F22", borderRadius: "18px", color: "white", display: "flex", marginRight: "18px", padding: "14px 20px" }}>B</span>Birhasani Raka Abiansyah</div>
        </div>
      </div>
    </div>,
    socialImageSize,
  );
}
