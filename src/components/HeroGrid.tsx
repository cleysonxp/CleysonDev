"use client";

export default function HeroGrid() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* Grid */}
      <div className="w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      {/* Radial lights */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,140,255,0.10),transparent_60%)]" />
      <div className="absolute top-0 left-0 w-52 h-52 bg-[radial-gradient(circle,rgba(0,160,255,0.08),transparent_70%)] blur-xl" />
      <div className="absolute bottom-0 right-0 w-52 h-52 bg-[radial-gradient(circle,rgba(0,160,255,0.08),transparent_70%)] blur-xl" />
    </div>
  );
}
