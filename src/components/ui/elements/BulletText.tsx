"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/src/lib/utils";
import { textVariants } from "./Text";

const BulletText = ({ texts }: { texts: string[] }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true once the component mounts (client-side)
  }, []);

  if (!isClient) {
    // Render a fallback during SSR
    return (
      <ul className="ml-5">
        {texts.map((item, index) => (
          <li
            key={index}
            className={cn(
              "list-disc",
              textVariants({ variant: "body" }),
              "text-neutral"
            )}
          >
            {item} {/* Render plain text during SSR */}
          </li>
        ))}
      </ul>
    );
  }

  // Dynamically import DOMPurify on the client side
  const DOMPurify = require("dompurify");

  return (
    <ul className="ml-5">
      {texts.map((item, index) => (
        <li
          key={index}
          className={cn(
            "list-disc",
            textVariants({ variant: "body" }),
            "text-neutral"
          )}
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item) }} // Sanitize and render HTML
        />
      ))}
    </ul>
  );
};

export default BulletText;
