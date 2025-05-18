'use client';

import { CloseCircle } from 'iconsax-react';
import { DrawerProps } from './drawer.types';

export const Drawer = ({ isOpen, toggle, children }: DrawerProps) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 lg:hidden bg-black/70 z-40 transition-opacity duration-300 ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggle}
        aria-hidden="true"
      />

      {/* Drawer panel from bottom */}
      <div
        className={`
          lg:hidden fixed left-0 right-0 bottom-0 z-50
          bg-white rounded-t-2xl shadow-lg
          transition-transform duration-300 min-h-[200px]
          ${isOpen ? 'translate-y-0' : 'translate-y-full'}
        `}
        role="dialog"
        aria-modal="true"
      >
        {/* Close button */}
        <button
          className="text-2xl mr-4 mt-4 cursor-pointer"
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
