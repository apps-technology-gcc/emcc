import React from "react";
import Section from "../layout/Section";
import { Text } from "../ui/elements/Text";

const Breadcrumb = ({ children }: { children: React.ReactElement }) => {
  return (
    <Section bgColor="background" className="py-2.5">
      {children}
    </Section>
  );
};

export default Breadcrumb;
