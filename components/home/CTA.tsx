"use client";

/* eslint-disable react/no-unescaped-entities */
import CTAButton from "@/components/home/CTAButton";

const CTA = ({ locale, CTALocale }: { locale: any; CTALocale: any }) => {
  return (
    <section className="flex flex-col justify-center max-w-[88%] items-center py-16 gap-12">
      <div className="flex flex-col text-center gap-4">
        <h2 className="text-center animate-fade-in">
          {locale.title}
        </h2>
        <p className="text-large text-default-500 animate-fade-in [animation-delay:200ms]">
          <span className="px-2 py-1 bg-red-500/10 text-red-500 rounded-md transition-all hover:bg-red-500/20">
            {locale.description1}
          </span>{" "}
          {locale.description2}{" "}
          <span className="px-2 py-1 bg-red-500/10 text-red-500 rounded-md transition-all hover:bg-red-500/20">
            {locale.description3}
          </span>{" "}
          {locale.description4}{" "}
          <span className="px-2 py-1 bg-red-500/10 text-red-500 rounded-md transition-all hover:bg-red-500/20">
            {locale.description5}
          </span>
          {locale.description6}
        </p>
      </div>
      <CTAButton locale={CTALocale} />
    </section>
  );
};

export default CTA;
