
export default function BackgroundCircles() {
  return (
    <div className="absolute inset-0 z-10">
      <div
        className="absolute w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl"
        style={{ top: "10%", left: "5%" }}
      />
      <div
        className="absolute w-80 h-80 bg-primary opacity-10 rounded-full blur-3xl"
        style={{ bottom: "15%", right: "10%" }}
      />
      <div
        className="absolute w-72 h-72 bg-blue-500 opacity-10 rounded-full blur-3xl"
        style={{ top: "50%", left: "60%" }}
      />
    </div>
  );
}
