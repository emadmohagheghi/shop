import { Star1 } from "iconsax-react";
import { Size } from "../../types/size.types";
import { RatingProps } from "./rating.types";

const sizeClasses: Record<Size, number> = {
  tiny: 4,
  small: 5,
  normal: 6,
  large: 7,
};

export const Rating: React.FC<RatingProps> = ({
  rate,
  className,
  size = "normal",
  variant = "warning",
}) => {
  return (
    <div className={`flex flex-row-reverse gap-1 ${className}`}>
      {[1, 2, 3, 4, 5].map((index) => (
        <Star1
          key={`star-${index}`}
          className={`${rate >= index ? `fill-${variant}` : ""} w-${sizeClasses[size]} stroke-${variant}`}
        />
      ))}
    </div>
  );
};
