"use client";
import { ALL_FAQS } from "@/config/faqs";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { PlusIcon } from "lucide-react";

// update rough notation highlight
function triggerResizeEvent() {
  const event = new Event("resize");
  window.dispatchEvent(event);
}

const FAQ = ({
  id,
  locale,
  langName,
}: {
  id: string;
  locale: any;
  langName: string;
}) => {
  const FAQS = ALL_FAQS[`FAQS_${langName.toUpperCase()}`];

  return (
    <section
      id={id}
      className="flex flex-col justify-center max-w-[88%] items-center gap-12 py-24 sm:py-32"
    >
      <div className="flex flex-col text-center gap-4">
        <div className="relative animate-slide-up">
          <h2 className="text-4xl font-medium tracking-tight relative z-10 inline-block bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 text-transparent bg-clip-text">
            {locale.title}
          </h2>
          <div className="absolute -inset-2 bg-blue-500/10 blur-xl rounded-2xl z-0" />
        </div>
        <p className="text-large animate-fade-in [animation-delay:200ms] max-w-2xl mx-auto">
          {locale.description}
        </p>
      </div>
      <Accordion
        fullWidth
        keepContentMounted
        className="gap-3 mx-auto max-w-6xl"
        itemClasses={{
          base: "px-6 !bg-default-100 !shadow-none hover:!bg-default-200/50",
          title: "text-default-500",
          trigger: "py-5",
          content: "pt-0 pb-5 text-default-500",
        }}
        items={FAQS}
        selectionMode="multiple"
        variant="splitted"
        onSelectionChange={triggerResizeEvent}
      >
        {FAQS?.map((item) => (
          <AccordionItem
            key={item.title}
            title={item.title}
            indicator={({ isOpen }) => (
              <PlusIcon
                className={`w-6 h-6 transition-transform duration-300 ease-in-out ${
                  isOpen ? "rotate-45" : ""
                }`}
              />
            )}
          >
            {item.content}
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;
