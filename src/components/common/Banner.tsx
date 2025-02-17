import { cn } from "../../lib/utils";
import React from "react";

interface BannerProps {
  children: React.ReactNode;
  fluid?: boolean;
  bgColor?: string;
  bgImage: any; // New prop for background image
  gradient?: string; // New prop for gradient overlay
  className?: string;
}

const Banner: React.FC<BannerProps> = ({
  children,
  fluid,
  bgColor = "black",
  bgImage,
  gradient = "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.3))",
  className,
}) => {
  return (
    <section
      className={cn(
        "md:py-[75px] py-[75px] flex items-center justify-start md:min-h-[500px]",
        className
      )}
      style={{
        backgroundImage: bgImage
          ? `${gradient}, url(${bgImage})`
          : bgColor
          ? bgColor
          : "transparent",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {fluid ? children : <div className="container">{children}</div>}
    </section>
  );
};

export default Banner;
