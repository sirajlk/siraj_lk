
export default function AnimatedHeroImage() {
  return (
    <div className="relative w-80 h-80">
      {/* Rotating + Morphing SVG Border */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          className="w-full h-full animate-spin-slow"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="100"
            cy="100"
            r="100"
            fill="none"
            stroke="#00FFCC"
            strokeWidth="4"
            strokeLinecap="round"
            className="animate-dash-morph"
          />
        </svg>
      </div>

      {/* Profile Image */}
      <img
        src="/me.jpg"
        alt="Siraj LK"
        className="w-full h-full object-cover rounded-full border-4 border-black relative z-10"
      />
    </div>
  );
}
