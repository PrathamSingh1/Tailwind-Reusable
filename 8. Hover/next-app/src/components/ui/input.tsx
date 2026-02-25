import React from 'react'

export const Input = ({ className="", ...props}: {
    className?: string;
}& React.InputHTMLAttributes<HTMLInputElement>) => {
    const cn = (...classes: string[]) => classes.join(" ");

  return (
    <input
      {...props}
      className={cn(
        "focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2 px-4 py-2 bg-white focus:bg-neutral-100 rounded-lg shadow-input placeholder-neutral-300 focus:border-gray-300 border-transparent transition-all duration-300",
        className,
      )}
    />
  );
};
