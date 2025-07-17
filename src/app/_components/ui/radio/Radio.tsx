import React, { createContext, useContext } from "react";
import classNames from "classnames";
import { RadioProps, RadioGroupProps } from "./radio.types";

const RadioGroupContext = createContext<{
  name: string;
  value?: string;
  onChange?: (value: string) => void;
}>({
  name: "",
});

export const RadioGroup = ({
  name,
  value,
  onChange,
  className,
  children,
  error,
  label,
  direction = "vertical",
}: RadioGroupProps) => {
  const groupClasses = classNames(
    "flex gap-4",
    {
      "flex-col": direction === "vertical",
      "flex-row flex-wrap": direction === "horizontal",
    },
    className,
  );

  return (
    <RadioGroupContext.Provider value={{ name, value, onChange }}>
      <div className="w-full">
        {label && (
          <label className="mb-2 block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <div className={groupClasses}>{children}</div>
        {error && <p className="text-error mt-2 text-sm">{error}</p>}
      </div>
    </RadioGroupContext.Provider>
  );
};

export const Radio = ({
  label,
  description,
  error,
  className,
  size = "normal",
  isDisabled = false,
  name: propName,
  value,
  checked: propChecked,
  onChange: propOnChange,
  ...props
}: RadioProps) => {
  const context = useContext(RadioGroupContext);

  const name = context.name || propName;
  const checked =
    context.value !== undefined && context.value !== null
      ? context.value === value
      : propChecked;
  const onChange = context.onChange || propOnChange;

  if (!name && !context.name) {
    console.warn(
      "Radio component requires either a name prop or to be used within RadioGroup",
    );
  }

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

  const radioClasses = classNames(
    "border-2 border-gray-300 rounded-full transition-all duration-200 flex-shrink-0",
    "checked:border-primary checked:bg-primary checked:before:opacity-100",
    'before:content-[""] before:w-full before:h-full before:rounded-full before:bg-white before:scale-50',
    "before:transition-all before:duration-200 before:opacity-0 before:block",
    "hover:border-primary-focus focus:ring-2 focus:ring-primary focus:ring-offset-2",
    "disabled:border-gray-200 disabled:bg-gray-100 disabled:cursor-not-allowed",
    sizeClasses[size],
    {
      "border-error": error && !isDisabled,
    },
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      if (context.onChange) {
        context.onChange(value);
      } else if (typeof onChange === "function") {
        (onChange as any)(e);
      }
    }
  };

  return (
    <label className={containerClasses}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
        disabled={isDisabled}
        className={radioClasses}
        {...props}
      />
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
