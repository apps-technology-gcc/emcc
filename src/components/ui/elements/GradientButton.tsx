import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";

const baseStyles =
  "relative inline-flex items-center justify-center font-medium duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const gradientOneStyles = `bg-gradient-one p-[1px] rounded-tl-[10px] rounded-br-[10px]`;

const buttonVariants = cva(baseStyles, {
  variants: {
    variant: {
      gradient_one: cn(
        "text-foreground hover:text-background",
        gradientOneStyles
      ),
    },

    disabled: {
      true: "opacity-50 cursor-not-allowed",
    },
  },
  defaultVariants: {
    variant: "gradient_one",
    size: "default",
  },
});

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  className?: string;
  Icon?: React.ReactNode;
}

const GradientButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      disabled = false,
      children,
      Icon,
      ...props
    }: ButtonProps,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <button
        className={cn(buttonVariants({ variant, disabled, className }))}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        <div
          className={cn(
            buttonVariants({ className }),
            "bg-white text-green-500 hover:text-white px-[30px] py-[9.5px] hover:bg-gradient-one"
          )}
        >
          <span className="relative">{children}</span>
          {Icon && <span className="relative ml-2">{Icon}</span>}
        </div>
      </button>
    );
  }
);

GradientButton.displayName = "Button";

export { GradientButton, buttonVariants };
export type { ButtonProps };
