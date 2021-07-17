import React from 'react';

interface BtnPropsWithChildren {}

export interface BtnProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    BtnPropsWithChildren {
  children: React.ReactNode;
  className?: string;
  color?: 'custom' | 'white' | 'black' | 'green' | 'blue-sky';
  size?: 'sm' | 'md' | 'lg';
}

type ButtonRef = React.ForwardedRef<HTMLButtonElement>;

const style = {
  default: `font-black shadow`,
  disabled: `opacity-60 cursor-not-allowed`,
  sizes: {
    sm: 'px-6 py-1 text-sm',
    md: 'px-6 py-2',
    lg: 'px-6 py-3',
  },
  colors: {
    custom: 'bg-[#14445c] hover:bg-[#0E2E3F] text-white',
    white: 'bg-white text-[#14445c]',
    black: 'bg-black text-white',
    green: 'bg-green-700 text-white',
    'blue-sky': 'bg-[#26a69a] text-white',
  },
};

const Button = React.forwardRef(
  (
    {
      children,
      className,
      color = 'custom',
      disabled = false,
      size = 'md',
      ...props
    }: BtnProps,
    ref: ButtonRef,
  ) => (
    <button
      {...props}
      ref={ref}
      disabled={disabled}
      className={`${className} ${style.default} ${style.sizes[size]} 
          ${style.colors[color]} ${disabled ? style.disabled : ''} `}
    >
      {children}
    </button>
  ),
);

Button.displayName = 'Button';

export default Button;
