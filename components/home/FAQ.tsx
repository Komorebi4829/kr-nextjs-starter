"use client";
import { ALL_FAQS } from "@/config/faqs";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { PlusIcon } from "lucide-react";
import { motion } from "framer-motion";

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
      className="flex flex-col justify-center max-w-[88%] items-center gap-12 py-24 sm:py-32 "
    >
      <div className="flex flex-col text-center gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <h2 className="text-center relative z-10 inline-block font-bold bg-gradient-to-br from-blue-500 to-blue-600 text-transparent bg-clip-text">
            {locale.title}
          </h2>
          <div className="absolute -inset-2 bg-blue-500/10 blur-xl rounded-2xl z-0" />
        </motion.div>
        <p className="text-large text-default-500">{locale.description}</p>
      </div>
      <Accordion
        fullWidth
        keepContentMounted
        className="gap-3 mx-auto max-w-6xl"
        itemClasses={{
          base: "px-6 !bg-default-100 !shadow-none hover:!bg-default-200/50",
          title: "font-medium",
          trigger: "py-6",
          content: "pt-0 pb-6 text-base text-default-500",
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
