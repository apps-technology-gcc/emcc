import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const spacerVariants = cva("block", {
  variants: {
    size: {
      "page-banner-y": "h-28", // 7rem - 112px
      "section-y": "h-20", // 5rem - 80px
      "hero-title-b": "h-16", // 4rem - 64px
      "subtitle-b": "h-8", // 2rem - 32px
      line: "h-7", // 1.75rem - 28px
      para: "h-7", // 1.75rem - 28px
      "card-3/4": "h-8", // 2rem - 32px
      "card-inside": "h-8", // 2rem - 32px
      "card-x-sm": "h-12", // 3rem - 48px
      "card-row": "h-12", // 3rem - 48px
      "card-title-b": "h-5", // 1.25rem - 20px
      "section-heading-b": "h-12", // 3rem - 48px
      "blog-image-b": "h-8", // 2rem - 32px
      "section-footer-link": "h-12", // 3rem - 48px
      "blog-column-negative": "h-12", // 3rem - 48px
      "two-column-x": "h-12", // 3rem - 48px
      "blog-list-b": "h-8", // 2rem - 32px
    },
    orientation: {
      horizontal: "w-full",
      vertical: "h-full",
    },
  },
  defaultVariants: {
    size: "line",
    orientation: "horizontal",
  },
});

interface SpacerProps extends VariantProps<typeof spacerVariants> {
  className?: string;
}

export function Spacer({ size, orientation, className }: SpacerProps) {
  return (
    <div className={cn(spacerVariants({ size, orientation }), className)} />
  );
}
