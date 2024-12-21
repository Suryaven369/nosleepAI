"use client"

export function FloatingOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="orb" style={{ top: "10%", right: "15%" }} />
      <div className="orb" style={{ top: "40%", left: "10%" }} />
      <div className="orb" style={{ bottom: "20%", right: "20%" }} />
    </div>
  )
}