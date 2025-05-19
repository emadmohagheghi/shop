'use client';
import { Variant } from '../../types/varients.types';
import { InputProps } from './input.types';
import classNames from 'classnames';
import { KeyboardEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SearchNormal1 } from 'iconsax-react';

const variantClasses: Record<Variant, string> = {
  neutral: 'border-gray-300 focus:border-gray-500 text-gray-800',
  primary: 'border-primary focus:border-primary-focus text-gray-800',
  success: 'border-success focus:border-success-focus text-gray-800',
  warning: 'border-warning focus:border-warning-focus text-gray-800',
  error: 'border-error focus:border-error-focus text-gray-800',
};

export const Input = ({
  type = 'text',
  variant = 'neutral',
  isDisabled = false,
  placeholder = 'جستجو',
  className,
  icon = (
    <SearchNormal1
      size="28px"
      className={`stroke-gray-500 group-focus-within:stroke-primary`}
    />
  ),
  searchPath = '/search',
  ...props
}: InputProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const classes = classNames(
    className,
    'bg-white h-12 px-4 rounded-md border-2 outline-none transition-colors duration-100 w-full disabled:cursor-not-allowed',
    { [variantClasses[variant]]: variant },
    { 'pr-12': icon }
  );

  const handleSearch = () => {
    if (searchTerm.trim()) {
      router.push(`${searchPath}?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="relative w-full group ">
      <input
        type={type}
        className={classes}
        disabled={isDisabled}
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
        {...props}
      />
      {icon && (
        <div
          className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 cursor-pointer"
          onClick={handleSearch}
        >
          {icon}
        </div>
      )}
    </div>
  );
};
