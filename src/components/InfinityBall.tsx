import { motion, useMotionValue, useTransform, useAnimationFrame } from "framer-motion";

const InfinityBall = ({
  size = 10,
  color = "#00ff91",
  duration = 6,
}: {
  size?: number;
  color?: string;
  duration?: number; // in seconds
}) => {
  const progress = useMotionValue(0);

  // This gives us a looping 8-shaped (∞) parametric motion
  const x = useTransform(progress, (t) => Math.sin(t) * 60);
  const y = useTransform(progress, (t) => Math.sin(t * 2) * 30);

  useAnimationFrame((t) => {
    // Convert time in ms to radians over duration
    progress.set((t / 1000 / duration) * Math.PI * 2);
  });

  return (
    <div className="relative w-[200px] h-[160px]">
      <motion.div
        className="rounded-full  absolute shadow-lg"
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          x,
          y,
        }}
      />
    </div>
  );
};

export default InfinityBall;
