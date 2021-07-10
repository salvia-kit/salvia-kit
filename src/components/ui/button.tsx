import React from 'react';

interface BtnPropsWithChildren {}

interface BtnProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    BtnPropsWithChildren {
  children: React.ReactNode;
  className?: string;
  color?: 'custom';
  size?: 'sm' | 'md' | 'lg';
}

type ButtonRef = React.ForwardedRef<HTMLButtonElement>;

const style = {
  default: `text-white focus:outline-none shadow font-medium transition-all ease-in duration-700`,
  disabled: `opacity-60 cursor-not-allowed`,
  sizes: {
    sm: 'px-6 py-1 text-sm',
    md: 'px-6 py-2',
    lg: 'px-6 py-3',
  },
  colors: {
    custom: 'bg-custom hover:bg-custom-hover',
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
      className={`${className} ${style.sizes[size]} ${style.colors[color]} 
          ${disabled ? style.disabled : ''}`}
    >
      {children}
    </button>
  ),
);

Button.displayName = 'Button';

export default Button;
