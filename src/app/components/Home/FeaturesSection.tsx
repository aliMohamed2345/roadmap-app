import { motion } from "framer-motion";
import { features } from "@/app/data";

const FeaturesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-light/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-xl sm:text-3xl md:text-6xl font-display font-bold bg-linear-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Everything You Need
          </h2>
          <p className="text-muted-foreground text-base sm:text-xl ">
            A complete ecosystem for your learning journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group cursor-pointer"
            >
              <div className="glass-card backdrop-blur-xl h-full p-8 space-y-4 border-transparent hover:border-primary/30 transition-all duration-500 relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <motion.div
                  className="relative w-16 h-16 rounded-2xl bg-linear-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:shadow-primary/50 transition-all duration-500 mx-auto sm:mx-0"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </motion.div>

                <h3 className="relative text-xl text-center sm:text-left sm:text-2xl font-display font-bold group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="relative text-muted-foreground text-center sm:text-left text-sm sm:text-lg">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
