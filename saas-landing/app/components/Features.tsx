"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "🚀",
    title: "Lightning Fast",
    description: "Experience blazing-fast performance that accelerates your workflow. Optimized infrastructure ensures maximum efficiency and reliability.",
  },
  {
    icon: "🔒",
    title: "Enterprise Security",
    description: "Bank-grade security standards keep your data protected 24/7. SSL encryption, automatic backups, and compliance certifications included.",
  },
  {
    icon: "📊",
    title: "Advanced Analytics",
    description: "Track your business metrics with powerful reporting tools. Real-time insights and customizable dashboards at your fingertips.",
  },
  {
    icon: "🔄",
    title: "Auto Sync",
    description: "Seamless synchronization across all your devices. Access your data anywhere, anytime with our cloud technology.",
  },
  {
    icon: "🎯",
    title: "Easy Integration",
    description: "Connect with your favorite tools effortlessly. Robust API support and ready-made plugins for instant setup.",
  },
  {
    icon: "💡",
    title: "AI-Powered Insights",
    description: "Boost productivity with intelligent recommendations. Machine learning algorithms continuously improve to serve you better.",
  },
];

export default function Features() {
  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Powerful Features
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to grow your business, all in one platform.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <motion.div
                  className="text-5xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p className="text-gray-400 mb-4">
            Want to discover more features?
          </p>
          <motion.button
            className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
