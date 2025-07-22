"use client";
import { DialogProps } from "./dialog.types";
import { useRef, useEffect } from "react";
import classNames from "classnames";

const maxWidthClasses = {
  xs: "max-w-xs",
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  full: "max-w-full",
};

export function Dialog({
  children,
  isOpen,
  toggle,
  title,
  showCloseButton = true,
  preventClose = false,
  maxWidth = "md",
  showHeader = true,
  showFooter = false,
  footer,
  onClose,
  ...props
}: DialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  // Handle escape key press
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen && !preventClose) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, preventClose]);

  // Focus management
  useEffect(() => {
    if (isOpen && dialogRef.current) {
      const focusableElements = dialogRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      const firstFocusable = focusableElements[0] as HTMLElement;
      firstFocusable?.focus();
    }
  }, [isOpen]);

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
    toggle();
  };

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === backdropRef.current && !preventClose) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  const dialogClasses = classNames(
    "bg-white rounded-lg shadow-2xl relative max-h-[90vh] overflow-hidden flex flex-col",
    "transform transition-all duration-300 ease-out",
    "animate-in fade-in-0 zoom-in-95 duration-300",
    maxWidthClasses[maxWidth],
    "w-full mx-4 sm:mx-6 md:mx-8",
  );

  const backdropClasses = classNames(
    "fixed inset-0 bg-black/50 z-50 flex items-center justify-center backdrop-blur-xs",
    "animate-in fade-in-0 duration-300",
  );

  return (
    <div
      ref={backdropRef}
      className={backdropClasses}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "dialog-title" : undefined}
      {...props}
    >
      <div ref={dialogRef} className={dialogClasses}>
        {/* Header */}
        {showHeader && (title || showCloseButton) && (
          <div className="flex items-center justify-between border-b border-gray-200 p-4">
            {title && (
              <h2
                id="dialog-title"
                className="truncate text-lg font-semibold text-gray-900"
              >
                {title}
              </h2>
            )}
            {showCloseButton && (
              <button
                onClick={handleClose}
                className="mr-2 flex-shrink-0 rounded-md p-2 transition-colors duration-200 hover:bg-gray-100"
                aria-label="بستن"
                type="button"
              >
                <svg
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col items-center">{children}</div>

        {/* Footer */}
        {showFooter && footer && (
          <div className="border-t border-gray-200 p-4">{footer}</div>
        )}
      </div>
    </div>
  );
}
