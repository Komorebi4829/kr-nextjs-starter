"use client";

import { ALL_FEATURES } from "@/config/feature";
import { motion } from "framer-motion";
import React from "react";

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
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id={id}
      className="flex flex-col justify-center max-w-4xl items-center py-24 sm:py-32 "
    >
      {/* <div className="flex flex-col text-center max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 relative"
        >
          <motion.h2
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 
            font-bold relative z-10 inline-block"
          >
            {locale.title}
          </motion.h2>
          <div className="absolute -inset-1 bg-blue-500/20 blur-2xl rounded-full opacity-75 z-0" />
        </motion.div>
      </div> */}
      <div className="text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-16 text-center"
        >
          <h2 className="text-center relative z-10 inline-block font-bold bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 text-transparent bg-clip-text pb-3">
            {locale.title}
          </h2>
          <div className="absolute -inset-x-4 -inset-y-2 bg-blue-500/10 blur-xl rounded-lg z-0" />
        </motion.div>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-3"
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
            <div
              className="p-4 w-16 h-16 rounded-xl bg-blue-50 dark:bg-gray-700 group-hover:bg-blue-100 dark:group-hover:bg-gray-600 
              flex items-center justify-center transition-colors duration-300 relative"
            >
              {feature.icon && typeof feature.icon === "string" ? (
                <span className="text-3xl text-blue-600 dark:text-blue-400">
                  {feature.icon}
                </span>
              ) : (
                React.createElement(feature.icon, {
                  className: "text-3xl text-blue-600 dark:text-blue-400",
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

