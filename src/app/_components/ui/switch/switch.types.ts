import { InputHTMLAttributes } from "react";
import { ComponentBase } from "../../types/component-base.types";

export type SwitchProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size" | "type"
> &
  ComponentBase & {
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
    label?: string;
    thumbIcon?: React.ReactNode;
    checkedThumbIcon?: React.ReactNode;
    id?: string;
  };
