import { ComponentBase } from "../../types/component-base.types";
import { InputHTMLAttributes } from "react";

export type CheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "size"
> &
  Omit<ComponentBase, "variant"> & {
    label?: string;
    description?: string;
    error?: string;
    indeterminate?: boolean;
    checkIcon?: React.ReactNode;
    indeterminateIcon?: React.ReactNode;
  };

export type CheckboxGroupProps = {
  value?: string[];
  onChange?: (values: string[]) => void;
  className?: string;
  children: React.ReactNode;
  error?: string;
  label?: string;
  direction?: "horizontal" | "vertical";
  disabled?: boolean;
};
