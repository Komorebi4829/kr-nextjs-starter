"use client";

import { ALL_FEATURES } from "@/config/feature";
import React from "react";
import { RoughNotation } from "react-rough-notation";
import { motion } from "framer-motion";

const Feature = ({
  id,
  locale,
  langName,
}: {
  id: string;
  locale: any;
  langName: string;
}) => {
  const FEATURES = ALL_FEATURES[`FEATURES_${langName.toUpperCase()}`];
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section
      id={id}
      className="flex flex-col justify-center lg:max-w-7xl md:max-w-5xl w-[95%] mx-auto md:gap-14 py-24 sm:py-32"
    >
      <h2 className="text-center text-white mb-16">
        <RoughNotation type="highlight" show={true} color="#2563EB">
          {locale.title}
        </RoughNotation>
      </h2>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {FEATURES?.map((feature, index) => (
          <motion.div
            key={feature.title}
            variants={item}
            className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300
              border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600
              flex flex-col items-center text-center gap-4"
          >
            <div className="p-4 w-16 h-16 rounded-xl bg-blue-50 dark:bg-gray-700 group-hover:bg-blue-100 dark:group-hover:bg-gray-600 
              flex items-center justify-center transition-colors duration-300 relative">
              {feature.icon && typeof feature.icon === "string" ? (
                <span className="text-3xl text-blue-600 dark:text-blue-400">{feature.icon}</span>
              ) : (
                React.createElement(feature.icon, { 
                  className: "text-3xl text-blue-600 dark:text-blue-400"
                })
              )}
              <div className="absolute -inset-1 bg-blue-100 dark:bg-gray-600 rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {feature.content}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Feature;
