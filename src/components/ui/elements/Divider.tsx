import { FC } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const dividerVariants = cva("bg-border dark:bg-gray-700", {
  variants: {
    orientation: {
      horizontal: "w-full h-[1px] ",
      vertical: "h-full w-[1px] ",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

interface DividerProps extends VariantProps<typeof dividerVariants> {
  length?: string | number;
  className?: string;
}

const Divider: FC<DividerProps> = ({
  orientation = "horizontal",
  length,
  className = "",
}) => {
  const style = length
    ? {
        ...(orientation === "horizontal"
          ? { width: length }
          : { height: length }),
      }
    : undefined;

  return (
    <div
      className={dividerVariants({ orientation, className })}
      style={style}
      role="separator"
      aria-orientation={orientation}
    />
  );
};

export default Divider;
