// by AI
"use client"
import classNames from "classnames";
import { Size } from "../../types/size.types";
import { Variant } from "../../types/varients.types";
import { SwitchProps } from "./switch.types";
import { generateID } from "@/utils/string";

const sizeClasses: Record<
  Size,
  { track: string; thumb: string; label: string }
> = {
  tiny: {
    track: "w-8 h-4",
    thumb: "w-3 h-3",
    label: "text-xs",
  },
  small: {
    track: "w-10 h-5",
    thumb: "w-4 h-4",
    label: "text-sm",
  },
  normal: {
    track: "w-12 h-6",
    thumb: "w-5 h-5",
    label: "text-base",
  },
  large: {
    track: "w-14 h-7",
    thumb: "w-6 h-6",
    label: "text-lg",
  },
};

const variantClasses: Record<Variant, { checked: string; unchecked: string }> =
  {
    neutral: {
      checked: "bg-gray-500",
      unchecked: "bg-gray-300",
    },
    primary: {
      checked: "bg-primary",
      unchecked: "bg-gray-300",
    },
    success: {
      checked: "bg-success",
      unchecked: "bg-gray-300",
    },
    warning: {
      checked: "bg-warning",
      unchecked: "bg-gray-300",
    },
    error: {
      checked: "bg-error",
      unchecked: "bg-gray-300",
    },
  };

export const Switch = ({
  variant = "primary",
  size = "normal",
  className,
  checked,
  defaultChecked,
  onChange,
  label,
  isDisabled = false,
  thumbIcon,
  checkedThumbIcon,
  id,
  ...props
}: SwitchProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.checked);
    }
  };

  const switchId = id || generateID();

  const trackClasses = classNames(
    "relative inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2",
    sizeClasses[size].track,
    {
      [variantClasses[variant].checked]: checked,
      [variantClasses[variant].unchecked]: !checked,
      "opacity-50 cursor-not-allowed": isDisabled,
      "focus:ring-primary": variant === "primary",
      "focus:ring-gray-500": variant === "neutral",
      "focus:ring-success": variant === "success",
      "focus:ring-warning": variant === "warning",
      "focus:ring-error": variant === "error",
    },
  );

  const thumbClasses = classNames(
    "pointer-events-none inline-block rounded-full bg-white shadow transform ring-0 transition duration-200 ease-in-out flex items-center justify-center",
    sizeClasses[size].thumb,
    {
      "translate-x-full": checked && size === "tiny",
      "translate-x-5": checked && size === "small",
      "translate-x-6": checked && size === "normal",
      "translate-x-7": checked && size === "large",
      "translate-x-0": !checked,
    },
  );

  const labelClasses = classNames(
    "font-medium text-gray-900",
    sizeClasses[size].label,
  );

  return (
    <div dir="ltr" className={classNames("flex items-start gap-3", className)}>
      <label htmlFor={switchId} className={trackClasses}>
        <input
          type="checkbox"
          id={switchId}
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={handleChange}
          disabled={isDisabled}
          className="sr-only"
          {...props}
        />
        <span className={thumbClasses}>
          {checked && checkedThumbIcon ? checkedThumbIcon : thumbIcon}
        </span>
      </label>

      {(label) && (
        <div className="flex flex-col">
          {label && (
            <label
              htmlFor={switchId}
              className={classNames(labelClasses, {
                "cursor-pointer": !isDisabled,
                "cursor-not-allowed opacity-50": isDisabled,
              })}
            >
              {label}
            </label>
          )}
        </div>
      )}
    </div>
  );
};
