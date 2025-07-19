"use client";
import { useEffect, useRef, useState } from "react";
import { Sort } from "iconsax-react";
import { useProductsFilters } from "@/hooks/useProductFilter";
import { Drawer } from "@/app/_components/ui/drawer";
import { Button } from "@/app/_components/ui/button";
import { SORT_OPTIONS } from "@/types/filters.types";

export default function SortOptions() {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
    <>
      {/* dekstop */}
      <div
        ref={containerRef}
        className="relative hidden h-15 w-full gap-2 rounded-lg border border-gray-100 bg-[#fff] p-2 text-sm font-medium shadow lg:inline-flex"
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
      <Button
        variant="primary"
        onClick={() => setIsDrawerOpen(true)}
        className="w-full flex-1 !rounded-full lg:hidden"
      >
        مرتب سازی
      </Button>
      <Drawer isOpen={isDrawerOpen} toggle={() => setIsDrawerOpen(false)}>
        <div className="space-y-4 p-4">
          <h3 className="text-lg font-semibold">مرتب‌سازی بر اساس</h3>
          {SORT_OPTIONS.map((option) => (
            <button
              key={option.value}
              className={`w-full rounded-lg p-3 text-right transition-colors ${
                sort === option.value
                  ? "bg-primary-content text-primary"
                  : "bg-gray-100 text-black"
              }`}
              onClick={() => {
                setSort(option.value);
                setIsDrawerOpen(false);
              }}
            >
              {option.text}
            </button>
          ))}
        </div>
      </Drawer>
    </>
  );
}
