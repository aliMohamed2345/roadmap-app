import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const RoadmapSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-linear-to-b from-background via-muted/20 to-background" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-xl sm:text-5xl md:text-6xl font-display font-bold bg-linear-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Trending Learning Paths
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands mastering these curated tracks
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/roadmap">
            <button className="border  cursor-pointer bg-background hover:text-accent-foreground h-11 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 glass-card backdrop-blur-xl border-primary/30 hover:border-primary hover:bg-primary/10 px-8 group">
              Explore All Tracks
              <BsArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default RoadmapSection;
