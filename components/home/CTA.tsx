"use client";

/* eslint-disable react/no-unescaped-entities */
import CTAButton from "@/components/home/CTAButton";
import { motion } from "framer-motion";

const CTA = ({ locale, CTALocale }: { locale: any; CTALocale: any }) => {
  return (
    <section className="flex flex-col justify-center max-w-[88%] items-center py-16 gap-12">
      <div className="flex flex-col text-center gap-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {locale.title}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-large text-default-500"
        >
          <span className="relative inline-block px-2 py-1 group">
            <span className="relative z-10 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{locale.description1}</span>
            <span className="absolute bottom-0 left-0 w-full h-[6px] bg-blue-500/20 dark:bg-blue-400/20 group-hover:h-full group-hover:bg-blue-500/10 dark:group-hover:bg-blue-400/10 transition-all duration-200 rounded-md"></span>
          </span>{" "}
          {locale.description2}{" "}
          <span className="relative inline-block px-2 py-1 group">
            <span className="relative z-10 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{locale.description3}</span>
            <span className="absolute bottom-0 left-0 w-full h-[6px] bg-blue-500/20 dark:bg-blue-400/20 group-hover:h-full group-hover:bg-blue-500/10 dark:group-hover:bg-blue-400/10 transition-all duration-200 rounded-md"></span>
          </span>{" "}
          {locale.description4}{" "}
          <span className="relative inline-block px-2 py-1 group">
            <span className="relative z-10 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{locale.description5}</span>
            <span className="absolute bottom-0 left-0 w-full h-[6px] bg-blue-500/20 dark:bg-blue-400/20 group-hover:h-full group-hover:bg-blue-500/10 dark:group-hover:bg-blue-400/10 transition-all duration-200 rounded-md"></span>
          </span>
          {locale.description6}
        </motion.p>
      </div>
      <CTAButton locale={CTALocale} />
    </section>
  );
};

export default CTA;
