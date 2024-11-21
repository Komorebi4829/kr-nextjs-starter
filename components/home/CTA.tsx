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
          <span className="px-2 py-1 bg-red-500/10 text-red-500 rounded-md">
            {locale.description1}
          </span>{" "}
          {locale.description2}{" "}
          <span className="px-2 py-1 bg-red-500/10 text-red-500 rounded-md">
            {locale.description3}
          </span>{" "}
          {locale.description4}{" "}
          <span className="px-2 py-1 bg-red-500/10 text-red-500 rounded-md">
            {locale.description5}
          </span>
          {locale.description6}
        </motion.p>
      </div>
      <CTAButton locale={CTALocale} />
    </section>
  );
};

export default CTA;
