import {
  motion,
  useSpring,
  useScroll,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { GiSparkles } from "react-icons/gi";

const HeroSection = () => {
  const [currentTime, setCurrentTime] = useState(new Date().getHours());
  const [floatingParticles] = useState(() =>
    Array.from({ length: 20 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    })),
  );
  const { scrollYProgress } = useScroll();
  const isDaytime = currentTime >= 6 && currentTime < 18;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 300 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 300 });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().getHours());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 40;
      const y = (clientY / innerHeight - 0.5) * 40;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const title = "Master Your Skills";
  const subtitle = "Track Your Progress";
  return (
    <section className="relative h-screen overflow-hidden ">
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 -z-20">
        <div
          className={`absolute inset-0 transition-all duration-1000 ${
            isDaytime
              ? "bg-linear-to-br from-primary/10 via-background to-accent/10"
              : "bg-linear-to-br from-primary/20 via-background to-secondary/20"
          }`}
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </motion.div>

      <div className="absolute inset-0 -z-10">
        {floatingParticles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 h-full flex items-center">
        <motion.div
          style={{ x: smoothMouseX, y: smoothMouseY }}
          className="space-y-8 max-w-4xl"
        >
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-4xl md:text-7xl font-display font-bold leading-tight">
              {title.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.05,
                    ease: [0.6, 0.05, 0.01, 0.9],
                  }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
              <br />
              <span className="bg-linear-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                {subtitle.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: (title.length + i) * 0.05,
                      ease: [0.6, 0.05, 0.01, 0.9],
                    }}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl"
            >
              Structured learning roadmaps with comprehensive quizzes
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/roadmap">
              <button className="bg-linear-to-br from-neon-cyan to-neon-purple text-white cursor-pointer border-0 flex items-center gap-2 justify-center rounded-xl text-lg p-3 group shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 w-full sm:w-fit">
                Start Learning
                <BsArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </Link>
            <Link href="/auth">
              <button className="border border-primary cursor-pointer bg-background hover:bg-accent hover:text-accent-foreground rounded-md p-3 glass-card backdrop-blur-xl text-lg hover:border-primary transition-all duration-300 hover:scale-105 w-full sm:w-fit">
                Join Free
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
            className="flex items-center gap-8 pt-8"
          >
            {[
              {
                value: `${12}+`,
                label: "Learning Tracks",
              },
              { value: "10+", label: "Quizzes" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 3 + i * 0.2 }}
                className="group cursor-pointer"
              >
                <p className="text-4xl font-display font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
