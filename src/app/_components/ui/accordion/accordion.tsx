"use client";
import React, { useState } from "react";
import { AccordionProps } from "./accordion.types";
import { ArrowDown2, ArrowUp2 } from "iconsax-react";

export const Accordion: React.FC<AccordionProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="divide-y- w-full overflow-hidden rounded-t-xl">
      {data.map((item, index) => (
        <div className="rounded-2xl bg-[#fff]" key={`accordion-${item.id}`}>
          <h2>
            <button
              onClick={() => toggleAccordion(index)}
              type="button"
              className={`my-2 flex w-full items-center justify-between p-5 text-right text-base font-medium`}
            >
              <span className="my-2 text-lg font-normal">{item.title}</span>
              {activeIndex === index ? (
                <ArrowUp2 size={18} className="stroke-primary" />
              ) : (
                <ArrowDown2 size={18} className="stroke-primary" />
              )}
            </button>
          </h2>
          {activeIndex === index && (
            <div className={`p-5 text-base leading-8`}>{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};
