import React from 'react'

export const Label = ({ children, className="", ...props }: {
    children: React.ReactNode;
    className?: string;
} & React.LabelHTMLAttributes<HTMLLabelElement>) => {

    const cn = (...classes: string[]) => classes.join(" ");

  return (
    <label
    {...props}
      className={cn(
        "text-neutral-700 font-medium",
        className,
      )}
    >
      {children}
    </label>
  );
};
