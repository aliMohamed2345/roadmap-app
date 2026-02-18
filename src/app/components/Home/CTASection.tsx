import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-r from-primary/20 via-primary-light/10 to-primary/20" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 relative text-center space-y-8"
      >
        <h2 className="text-lg sm:text-3xl md:text-6xl font-display font-bold bg-linear-to-r from-primary  to-secondary bg-clip-text text-transparent">
          Ready to Level Up?
        </h2>
        <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          Join thousands of developers who are accelerating their careers with
          structured learning paths.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/auth">
            <button className="p-3 rounded-xl cursor-pointer hover:scale-105 bg-linear-to-br from-neon-cyan to-neon-purple shadow-lg shadow-neon-cyan/25 text-white flex items-center gap-2 transition-all mx-auto">
              Get Started Free
              <BsArrowRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
