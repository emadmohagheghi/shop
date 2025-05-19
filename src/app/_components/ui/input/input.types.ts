import { ComponentBase } from '../../types/component-base.types';
import { InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement> &
  Omit<ComponentBase, 'size'> & {
    type?: 'text' | 'password' | 'email' | 'number';
    placeholder?: string;
    icon?: React.ReactNode;
    searchPath?: string;
  };
