import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'light';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-500 text-white shadow-brand hover:bg-brand-600 hover:shadow-hover active:scale-[0.98]',
  secondary:
    'bg-navy text-white shadow-soft hover:bg-navy-light hover:shadow-card active:scale-[0.98]',
  outline:
    'border-2 border-brand-500 text-brand-500 hover:bg-brand-50 active:scale-[0.98]',
  ghost: 'text-navy hover:bg-bg-soft active:scale-[0.98]',
  light:
    'bg-white text-brand-600 shadow-card hover:bg-brand-50 hover:shadow-hover active:scale-[0.98]',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
