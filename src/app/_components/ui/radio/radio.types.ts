import { ComponentBase } from "../../types/component-base.types";
import { InputHTMLAttributes } from "react";

export type RadioProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "size"
> &
  Omit<ComponentBase, "variant"> & {
    label?: string;
    description?: string;
    error?: string;
    name?: string; // اختیاری کردیم چون از context هم می‌تواند بیاید
    value: string;
  };

export type RadioGroupProps = {
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  children: React.ReactNode;
  error?: string;
  label?: string;
  direction?: "horizontal" | "vertical";
};
