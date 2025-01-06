import * as React from "react";
import { cn } from "../../../lib/utils";

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <label className="relative inline-flex items-center cursor-pointer gap-[10px]">
        <input type="checkbox" className="sr-only peer" ref={ref} {...props} />
        <div
          className={cn(
            "relative w-[36px] h-[20px] rounded-full",
            "bg-gray-300 dark:bg-gray-700",
            "peer-checked:bg-blue-600",
            "transition-all duration-200",
            className
          )}
        >
          <span
            className={cn(
              "absolute top-1/2 left-1 transform -translate-y-1/2",
              "h-[12px] w-[12px] bg-white rounded-full",
              "transition-transform duration-200",
              "peer-checked:translate-x-[16px]"
            )}
          />
        </div>
        {label && <span className="text-sm text-gray-500">{label}</span>}
      </label>
    );
  }
);

Switch.displayName = "Switch";

export default Switch;
