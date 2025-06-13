"use client";

import { CloseCircle } from "iconsax-react";
import { DrawerProps } from "./drawer.types";

export const Drawer = ({ isOpen, toggle, children }: DrawerProps) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/70 transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={toggle}
        aria-hidden="true"
      />

      {/* Drawer panel from bottom */}
      <div
        className={`fixed right-0 bottom-0 left-0 z-50 min-h-[200px] rounded-t-2xl bg-white shadow-lg transition-transform duration-300 lg:hidden ${isOpen ? "translate-y-0" : "translate-y-full"} `}
        role="dialog"
        aria-modal="true"
      >
        {/* Close button */}
        <button
          className="mt-4 mr-4 cursor-pointer text-2xl"
          onClick={toggle}
          aria-label="Close drawer"
        >
          <CloseCircle color="black" size={28} />
        </button>
        <div className="p-6 pt-2">{children}</div>
      </div>
    </>
  );
};
