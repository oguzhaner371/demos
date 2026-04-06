"use client";

import { motion } from "framer-motion";
import { Code, Palette, Smartphone, Zap, Layout, Database } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Building fast, responsive, and scalable web applications using modern frameworks.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Creating native and cross-platform mobile experiences that users love.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Designing beautiful interfaces with focus on user experience and accessibility.",
  },
  {
    icon: Layout,
    title: "Frontend Engineering",
    description: "Crafting pixel-perfect interfaces with attention to detail and performance.",
  },
  {
    icon: Database,
    title: "Backend Systems",
    description: "Developing robust APIs and database architectures for complex applications.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Making applications lightning fast with code optimization and best practices.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              What I Do
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Services I offer to bring your ideas to life
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="glass rounded-2xl p-8 hover:glass-strong transition-all duration-300 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 glass-strong rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="text-purple-400 group-hover:text-pink-400 transition-colors" size={28} />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Decorative line */}
                <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-500"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
