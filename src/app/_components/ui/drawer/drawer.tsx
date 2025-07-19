"use client";

import { CloseCircle } from "iconsax-react";
import { DrawerProps } from "./drawer.types";
import { useEffect } from "react";

export const Drawer = ({ isOpen, toggle, children }: DrawerProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-90 h-screen w-screen bg-black/70 transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={toggle}
        aria-hidden="true"
      />

      {/* Drawer panel from bottom */}
      <div
        className={`fixed -bottom-3 left-0 p-4 bg-white z-90 space-y-4 h-screen w-screen rounded-t-2xl  shadow-lg transition-transform duration-300 lg:hidden overflow-scroll ${isOpen ? "translate-y-1" : "translate-y-full"} `}
        role="dialog"
        aria-modal="true"
      >
        <div className="rounded-t-2xl bg-white w-full">
          <button onClick={toggle} className="cursor-pointer" ><CloseCircle size={28} color="black" /></button>
        </div>
        <div className="overflow-y-auto relative space-y-4">
          {children}
        </div>
      </div>
    </>
  );
};
