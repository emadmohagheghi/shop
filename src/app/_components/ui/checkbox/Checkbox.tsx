import React, { createContext, useContext, useEffect, useRef } from "react";
import classNames from "classnames";
import { CheckboxProps, CheckboxGroupProps } from "./checkbox.types";

// Context برای Checkbox Group
const CheckboxGroupContext = createContext<{
  value?: string[];
  onChange?: (values: string[]) => void;
  disabled?: boolean;
}>({});

// Default icons
const CheckIcon = () => (
  <svg
    className="h-full w-full text-white"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const IndeterminateIcon = () => (
  <svg
    className="h-full w-full text-white"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M4 10a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z"
      clipRule="evenodd"
    />
  </svg>
);

// Checkbox Group Component
export const CheckboxGroup = ({
  value = [],
  onChange,
  className,
  children,
  error,
  label,
  direction = "vertical",
  disabled = false,
}: CheckboxGroupProps) => {
  const groupClasses = classNames(
    "flex gap-4",
    {
      "flex-col": direction === "vertical",
      "flex-row flex-wrap": direction === "horizontal",
    },
    className,
  );

  return (
    <CheckboxGroupContext.Provider value={{ value, onChange, disabled }}>
      <div className="w-full">
        {label && (
          <label className="mb-2 block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <div className={groupClasses}>{children}</div>
        {error && <p className="text-error mt-2 text-sm">{error}</p>}
      </div>
    </CheckboxGroupContext.Provider>
  );
};

// Checkbox Component
export const Checkbox = ({
  label,
  description,
  error,
  className,
  size = "normal",
  isDisabled: propIsDisabled = false,
  value,
  checked: propChecked,
  onChange: propOnChange,
  indeterminate = false,
  checkIcon,
  indeterminateIcon,
  ...props
}: CheckboxProps) => {
  const context = useContext(CheckboxGroupContext);
  const inputRef = useRef<HTMLInputElement>(null);

  // اگر در CheckboxGroup قرار دارد از context استفاده کن
  const groupValue = context.value || [];
  const groupOnChange = context.onChange;
  const groupDisabled = context.disabled;

  const isChecked = groupOnChange
    ? value
      ? groupValue.includes(String(value))
      : false
    : propChecked;

  const isDisabled = propIsDisabled || groupDisabled;

  // Set indeterminate state
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate && !isChecked;
    }
  }, [indeterminate, isChecked]);

  const sizeClasses = {
    tiny: "w-3 h-3",
    small: "w-4 h-4",
    normal: "w-5 h-5",
    large: "w-6 h-6",
  };

  const labelSizeClasses = {
    tiny: "text-xs",
    small: "text-sm",
    normal: "text-base",
    large: "text-lg",
  };

  const containerClasses = classNames(
    "flex items-start gap-3",
    {
      "opacity-50 cursor-not-allowed": isDisabled,
      "cursor-pointer": !isDisabled,
    },
    className,
  );

  const checkboxClasses = classNames(
    "border-2 border-gray-300 rounded transition-all duration-200 flex-shrink-0",
    "flex items-center justify-center",
    "hover:border-primary-focus focus:ring-2 focus:ring-primary focus:ring-offset-2",
    "disabled:border-gray-200 disabled:bg-gray-100 disabled:cursor-not-allowed",
    sizeClasses[size],
    {
      "border-primary bg-primary": isChecked || indeterminate,
      "border-error": error && !isDisabled,
      "bg-gray-50": !isChecked && !indeterminate,
    },
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (groupOnChange && value) {
      // Group mode
      const stringValue = String(value);
      const newValues = isChecked
        ? groupValue.filter((v) => v !== stringValue)
        : [...groupValue, stringValue];
      groupOnChange(newValues);
    } else if (propOnChange) {
      // Single mode
      propOnChange(e);
    }
  };

  return (
    <label className={containerClasses}>
      <div className="relative">
        <input
          ref={inputRef}
          type="checkbox"
          value={value}
          checked={isChecked}
          onChange={handleChange}
          disabled={isDisabled}
          className="sr-only"
          {...props}
        />
        <div className={checkboxClasses}>
          {indeterminate && !isChecked
            ? indeterminateIcon || <IndeterminateIcon />
            : isChecked
              ? checkIcon || <CheckIcon />
              : null}
        </div>
      </div>
      <div className="flex-1">
        {label && (
          <span
            className={classNames(
              "block font-medium text-gray-900",
              labelSizeClasses[size],
              {
                "text-gray-500": isDisabled,
              },
            )}
          >
            {label}
          </span>
        )}
        {description && (
          <span
            className={classNames("mt-1 block text-gray-600", {
              "text-xs": size === "tiny",
              "text-sm": size === "small" || size === "normal",
              "text-base": size === "large",
              "text-gray-400": isDisabled,
            })}
          >
            {description}
          </span>
        )}
        {error && !isDisabled && (
          <span className="text-error mt-1 block text-sm">{error}</span>
        )}
      </div>
    </label>
  );
};
