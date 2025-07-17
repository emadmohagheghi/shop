"use client";
import { useEffect, useRef } from "react";
import { Sort } from "iconsax-react";
import { useProductsFilters } from "@/hooks/useProductFilter";

const SORT_OPTIONS = [
  { text: "جدید ترین", value: "1" },
  { text: "پر فروش ترین", value: "2" },
  { text: "گران ترین", value: "3" },
  { text: "ارزان ترین", value: "4" },
];

export default function SortOptions() {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const {
    filters: { sort },
    setters: { setSort },
  } = useProductsFilters();

  const activeIndex = SORT_OPTIONS.findIndex((opt) => opt.value === sort) ?? 0;
  const validatedIndex = activeIndex === -1 ? 0 : activeIndex;

  useEffect(() => {
    if (activeIndex === -1) {
      setSort("1");
    }
  }, [activeIndex]);

  useEffect(() => {
    const btn = buttonsRef.current[validatedIndex];
    const bg = activeRef.current;
    const container = containerRef.current;

    if (btn && bg && container) {
      const btnRect = btn.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const offsetLeft = btnRect.left - containerRect.left;
      const width = btnRect.width;

      bg.style.transform = `translateX(${offsetLeft}px)`;
      bg.style.width = `${width}px`;
    }
  }, [validatedIndex]);

  return (
    <div
      ref={containerRef}
      className="relative inline-flex h-15 w-full gap-2 rounded-lg border border-gray-100 bg-[#fff] p-2 text-sm font-medium shadow"
    >
      <p className="my-auto flex items-center justify-center">
        <Sort color="black" size={24} />
        مرتب سازی بر اساس
      </p>
      <div
        ref={activeRef}
        className="bg-primary-content absolute top-2 bottom-2 left-0 rounded-md transition-all duration-300 ease-in-out"
        style={{ width: 0 }}
      />
      {SORT_OPTIONS.map((option, index) => (
        <button
          key={option.value}
          ref={(el) => {
            if (el) buttonsRef.current[index] = el;
          }}
          aria-pressed={validatedIndex === index}
          className={`relative z-10 cursor-pointer px-4 py-1 transition-colors duration-200 ${
            validatedIndex === index
              ? "text-primary font-semibold"
              : "text-gray-500"
          }`}
          onClick={() => {
            if (index !== validatedIndex) {
              setSort(option.value);
            }
          }}
        >
          {option.text}
        </button>
      ))}
    </div>
  );
}
