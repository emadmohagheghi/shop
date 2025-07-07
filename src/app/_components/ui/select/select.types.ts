import { Size } from "../../types/size.types";
export type SelectOption = {
  value: string;
  label: string;
};

export type SelectProps = {
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  size?: Size;
  isDisabled?: boolean;
  className?: string;
  dropdownIcon?: React.ReactNode;
  defaultOpen?: boolean;
};
