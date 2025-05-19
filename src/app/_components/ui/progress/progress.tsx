import { Size } from '../../types/size.types';
import { Variant } from '../../types/varients.types';
import { ProgressProps } from './progress.types';
import classNames from 'classnames';

const sizeClasses: Record<Size, string> = {
  tiny: 'h-1',
  small: 'h-2',
  normal: 'h-3',
  large: 'h-4',
};

const variantClasses: Record<Variant, string> = {
  neutral: '*:bg-gray-500',
  primary: '*:bg-primary',
  success: '*:bg-success',
  warning: '*:bg-warning',
  error: '*:bg-error',
};

export const Progress = ({
  value,
  variant = 'neutral',
  size = 'small',
  className,
}: ProgressProps) => {
  const classes = classNames(
    'w-full bg-gray-300 rounded-full rounded-full',
    sizeClasses[size],
    variantClasses[variant],
    className
  );
  return (
    <>
      <div className={classes}>
        <div className='h-full rounded-full' style={{ width: `${value}%` }}>

        </div>
      </div>
    </>
  );
};
