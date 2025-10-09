import { ImageResponse } from "next/og"
import { AgendosIcon } from "@/components/brand/logo/AgendosIcon"

// Route segment config
export const runtime = "edge"

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = "image/png"

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#007AFF",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
        }}
      >
        <div style={{ display: "flex", width: 24, height: 24 }}>
          <AgendosIcon variant="light" />
        </div>
      </div>
    ),
    { ...size }
  )
}