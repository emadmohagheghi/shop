import { ComponentBase } from "../../types/component-base.types";

export type RatingProps = Omit<ComponentBase , "isDisabled"> & {
  rate: number;
};
