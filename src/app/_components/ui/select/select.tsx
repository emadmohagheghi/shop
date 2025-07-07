// craeted by AI
"use client";

import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import { SelectProps, SelectOption } from "./select.types";
import { ArrowDown2, ArrowUp2 } from "iconsax-react";

const sizeClasses: Record<string, string> = {
  tiny: "h-8 text-xs px-2",
  small: "h-10 text-sm px-3",
  normal: "h-12 text-base px-4",
  large: "h-14 text-lg px-5",
};

export const Select = ({
  options,
  value,
  defaultValue,
  onChange,
  placeholder = "انتخاب کنید...",
  label,
  size = "normal",
  isDisabled = false,
  className,
  dropdownIcon,
  defaultOpen = false,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [internalValue, setInternalValue] = useState<string | undefined>(
    value || defaultValue,
  );
  const [activeIndex, setActiveIndex] = useState(-1);

  const selectRef = useRef<HTMLDivElement>(null);
  const optionsListRef = useRef<HTMLUListElement>(null);

  const currentSelectedOption = options.find(
    (opt) => opt.value === (value ?? internalValue),
  );

  useEffect(() => {
    if (value !== undefined && value !== internalValue) {
      setInternalValue(value);
    }
  }, [value, internalValue]);

  const handleSelectOption = (option: SelectOption) => {
    if (isDisabled) return;
    setInternalValue(option.value);
    setIsOpen(false);
    onChange?.(option.value);
    setActiveIndex(-1);
  };

  const toggleDropdown = () => {
    if (isDisabled) return;
    setIsOpen((prev) => !prev);
    setActiveIndex(
      currentSelectedOption
        ? options.findIndex((opt) => opt.value === currentSelectedOption.value)
        : -1,
    );
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen && optionsListRef.current && activeIndex !== -1) {
      const activeOptionElement = optionsListRef.current.children[
        activeIndex
      ] as HTMLElement;
      if (activeOptionElement) {
        activeOptionElement.scrollIntoView({ block: "nearest" });
      }
    }
  }, [activeIndex, isOpen]);

  const selectClasses = classNames(
    className,
    "relative inline-block w-full text-left",
    { "opacity-50 cursor-not-allowed": isDisabled },
  );

  const triggerClasses = classNames(
    "flex items-center justify-between rounded-xl border border-gray-300 bg-white transition-colors duration-100 outline-none w-full",
    sizeClasses[size],
    { "cursor-not-allowed": isDisabled },
    { "shadow-lg": isOpen },
  );

  const dropdownContainerClasses = classNames(
    "absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg focus:outline-none",
    // sizeClasses[size].includes("text-xs") && "text-xs",
    // sizeClasses[size].includes("text-sm") && "text-sm",
    // sizeClasses[size].includes("text-base") && "text-base",
    // sizeClasses[size].includes("text-lg") && "text-lg",
    sizeClasses[size].split(" ").find((cls) => cls.startsWith("text-")),
  );

  const optionClasses = (index: number, isSelected: boolean) =>
    classNames(
      "cursor-pointer px-4 py-2 hover:bg-gray-100 transition-colors duration-100 text-start",
      {
        "bg-gray-200 font-semibold": isSelected,
        "bg-gray-100": activeIndex === index && !isSelected,
      },
    );

  const displayedLabel = currentSelectedOption
    ? currentSelectedOption.label
    : placeholder;

  return (
    <div ref={selectRef} className={selectClasses} aria-live="polite">
      {label && (
        <label
          htmlFor={`select-trigger-${currentSelectedOption?.value || "placeholder"}`}
          className="mb-1 block text-sm font-medium text-gray-700 text-start"
        >
          {label}
        </label>
      )}
      <button
        id={`select-trigger-${currentSelectedOption?.value || "placeholder"}`}
        type="button"
        className={triggerClasses}
        onClick={toggleDropdown}
        disabled={isDisabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls="select-options-list"
        aria-labelledby={`select-label-${currentSelectedOption?.value || "placeholder"}`}
        role="combobox"
        aria-activedescendant={
          isOpen && activeIndex !== -1
            ? `option-${options[activeIndex].value}`
            : undefined
        }
      >
        <span
          className={classNames(
            "block overflow-hidden text-ellipsis whitespace-nowrap",
            {
              "text-gray-500": !currentSelectedOption && !value,
            },
          )}
        >
          {displayedLabel}
        </span>
        {dropdownIcon ? (
          dropdownIcon
        ) : isOpen ? (
          <ArrowUp2 size={18} className="stroke-gray-500" />
        ) : (
          <ArrowDown2 size={18} className="stroke-gray-500" />
        )}
      </button>

      {isOpen && (
        <div
          className={dropdownContainerClasses}
          role="listbox"
          id="select-options-list"
          tabIndex={-1}
        >
          <ul
            ref={optionsListRef}
            className="max-h-60 overflow-auto py-1"
            role="presentation"
          >
            {options.map((option, index) => (
              <li
                key={option.value}
                id={`option-${option.value}`}
                role="option"
                aria-selected={option.value === (value ?? internalValue)}
                onClick={() => handleSelectOption(option)}
                className={optionClasses(
                  index,
                  option.value === (value ?? internalValue),
                )}
                onMouseMove={() => setActiveIndex(index)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
