import SectionTitle from "@/src/components/common/SectionTitle";
import React from "react";
import CaseStudyCard from "./CaseStudyCard";
import Link from "@/src/components/ui/elements/Link";
import { Icon } from "@/src/components/ui/elements/Icon";
import BlogImg from "@/public/blog.png";
const ResourcesGroup = ({
  title,
  resources,
  cta,
}: {
  title: string;
  resources: [];
  cta: string;
}) => {
  return (
    <div className="flex flex-col gap-12">
      <SectionTitle title={title} />
      <div className="grid grid-cols-1 xs:grid-cols-2 gap-8">
        {resources.map((item: any, index: number) => (
          <CaseStudyCard
            key={index}
            imageUrl={BlogImg.src}
            imageAlt={title}
            tag={item.tag}
            date={item.date}
            title={item.title}
          />
        ))}
      </div>
      <div className="flex justify-end">
        <Link
          href={""}
          iconPosition={"right"}
          icon={<Icon name="east" className="text-[20px]" />}
        >
          {cta}
        </Link>
      </div>
    </div>
  );
};

export default ResourcesGroup;
