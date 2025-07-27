"use client";

import { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import { TabsProps } from "./tabs.types";

export const Tabs = ({ tabs, onTabChange, className }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(() => {
    return tabs[0]?.id || "";
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);

  useEffect(() => {
    const btn = buttonsRef.current[activeIndex];
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
  }, [activeIndex]);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className={classNames("w-full", className)}>
      {/* Tab Headers */}
      <div
        ref={containerRef}
        className="relative flex rounded-md bg-white gap-4 py-2"
      >
        <div
          ref={activeRef}
          className="bg-primary absolute bottom-0 left-0 h-2 rounded-t-lg transition-all duration-300 ease-in-out"
          style={{ width: 0 }}
        />
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={(el) => {
              if (el) buttonsRef.current[index] = el;
            }}
            onClick={() => handleTabClick(tab.id)}
            className={classNames(
              "relative z-10 px-2 py-2 text-sm font-medium transition-colors duration-200 sm:px-4 md:text-base",
              {
                "text-primary font-semibold": activeTab === tab.id,
                "text-black": activeTab !== tab.id,
              },
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="py-4">{activeTabContent}</div>
    </div>
  );
};
