import { ComponentBase } from "../../types/component-base.types";

export type ProgressProps = Omit<ComponentBase, 'isDisabled'> & {
  value: number;
};
