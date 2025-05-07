import { Size } from '../types/size.types';
import { Variant } from '../types/varients.types';
import { ButtonProps } from './button.types';
import classNames from 'classnames';
import { Loading } from '../loading';

const sizeClasses: Record<Size, string> = {
  tiny: 'h-8 text-xs',
  small: 'h-10 text-sm',
  normal: 'h-12 text-base',
  large: 'h-14 text-lg',
};

const variantClasses: Record<Variant, string> = {
  neutral: 'bg-gray-500 text-white hover:bg-gray-600 border-gray-500',
  primary: 'bg-primary text-white hover:bg-primary-focus border-primary',
  success: 'bg-success text-white hover:bg-success-focus border-success',
  warning: 'bg-warning text-white hover:bg-warning-focus border-warning',
  error: 'bg-error text-white hover:bg-error-focus border-error',
};

export const Button = ({
  variant = 'neutral',
  size = 'normal',
  className,
  children,
  isDisabled = false,
  isLoading = false,
  loadingText = 'در حال انجام...',
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) => {
  const classes = classNames(
    className,
    'px-4 rounded-md flex items-center justify-center gap-3 transition-colors duration-100 cursor-pointer text-nowrap disabled:cursor-not-allowed disabled:opacity-50',
    { [sizeClasses[size]]: size },
    { [variantClasses[variant]]: variant }
  );
  return (
    <button disabled={isDisabled} className={`${classes}`} {...props}>
      {isLoading && <Loading variant={variant} size={size} />}
      {!isLoading && rightIcon}
      {isLoading ? loadingText : children}
      {!isLoading && leftIcon}
    </button>
  );
};
