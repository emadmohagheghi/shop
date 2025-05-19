import { ButtonHTMLAttributes } from 'react';
import { ComponentBase } from '../../types/component-base.types';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ComponentBase & {
    isLoading?: boolean;
    loadingText?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
  };
