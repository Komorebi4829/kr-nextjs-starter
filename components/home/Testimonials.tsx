"use client";

/* eslint-disable react/no-unescaped-entities */
import { TwitterX } from "@/components/social-icons/icons";
import { siteConfig } from "@/config/site";
import { TestimonialsData } from "@/config/testimonials";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Testimonials = ({ id, locale }: { id: string; locale: any }) => {
  return (
    <section
      id={id}
      className="flex flex-col justify-center items-center gap-8 md:gap-12 w-[95%] md:max-w-[88%] lg:max-w-[80%] xl:max-w-[72%] py-16 sm:py-20 md:py-24 sm:py-32"
    >
      <div className="flex flex-col text-center w-full gap-3 md:gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative"
        >
          <h2 className="text-center relative z-10 inline-block font-bold bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 text-transparent bg-clip-text">
            {locale.title}
          </h2>
          <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-blue-500/20 via-blue-400/20 to-blue-300/20 blur-2xl rounded-full z-0 opacity-50" />
        </motion.div>
        <p className="text-large text-default-500 max-w-xl mx-auto">
          {/* Don't take our word for it. Here's what they have to say. */}
          {locale.description1}{" "}
          <Link
            href={siteConfig.authors[0].twitter as string}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-primary underline"
          >
            {locale.description2}
          </Link>
          {locale.description3}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
        {TestimonialsData.map((testimonial, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
            key={index}
          >
            <div className="border border-slate/10 rounded-lg p-3 md:p-4 flex flex-col items-start gap-2 md:gap-3 h-fit hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-start justify-between w-full">
                <div className="flex items-start gap-2">
                  <Image
                    src={testimonial.user.image}
                    alt="maker"
                    height={40}
                    width={40}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover object-top"
                  />
                  <div className="flex flex-col items-start">
                    <p className="font-bold text-sm md:text-base">
                      {testimonial.user.name}
                    </p>
                    <p className="dark:text-zinc-400 text-xs md:text-sm">
                      @{testimonial.user.username}
                    </p>
                  </div>
                </div>
                <Link
                  href={`https://twitter.com/${testimonial.user.username}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="hover:opacity-80 transition-opacity"
                >
                  <TwitterX className="w-6 h-6 md:w-8 md:h-8" />
                </Link>
              </div>
              <p className="dark:text-zinc-200 text-[14px]">
                {testimonial.content}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

