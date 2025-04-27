"use client";
import Banner from "@/src/components/common/Banner";

import Breadcrumb from "@/src/components/common/Breadcrumb";
import Breadcrumbs from "@/src/components/ui/elements/Breadcrumbs";
import Section from "@/src/components/layout/Section";

import bgImage from "@/public/about-bg.png";
import { useEffect, useState } from "react";
import pageContentJson from "@/src/data/about.json";
import TextContentSection from "@/src/components/common/TextContentSection";
import BannerSection from "@/src/components/common/BannerSection";
import SidebarMenu from "@/src/components/common/SideBarMenu";

import ALogo from "@/public/A_logo.svg";
import ICFLogo from "@/public/icf_logo.svg";
import Logo from "@/public/logo.svg";
import Image from "next/image";
import SectionTitle from "@/src/components/common/SectionTitle";
import AccordionGroup from "@/src/components/common/AccordionGroup";

import MoreAboutUs from "@/src/components/common/MoreAboutUs";
import sqricon from "@/public/sqricon.svg";
import Tag from "@/src/components/ui/elements/Tags";
import { Text } from "@/src/components/ui/elements/Text";
import BulletText from "@/src/components/ui/elements/BulletText";
import ResourceCard from "@/components/common/ResourceCard";
import ResourceImg from "@/public/resource-img.png";
import ApplyBoard from "@/src/components/common/ApplyBoard";
import FrameWorkImg from "@/public/framework.png";
import CtgImg from "@/public/category.png";
import MemberBoard from "@/src/components/common/MemberBoard";
import RelatedResourceGroup from "@/src/components/common/RelatedResourceGroup";
import GlobalCodeEthicsImg from "@/public/global-ethics-img.png";
import Link from "@/src/components/ui/elements/Link";
import { Button } from "@/src/components/ui/elements/Button";
import { Icon } from "@/src/components/ui/elements/Icon";
const page = () => {
  const [pageContent, setPageContent] = useState<any>(pageContentJson);
  const menuData = [
    {
      title: "EMCC Research",
      menuColor: "pink-400",

      links: [
        {
          text: "AI & Digital",
          href: "/ai-digital",
        },
        {
          text: "Climate Action & Sustainability",
          href: "/climate-action-and-sustainability",
        },
        {
          text: "Inclusion & Diversity ",
          href: "/inclusion-and-diversity ",
        },
        {
          text: "Skills Agenda for Europe",
          href: "/skills-agenda-for-europe",
        },
        {
          text: "Culture, Talent and Inclusion (CTI)",
          href: "/cti",
        },
      ],
    },
  ];

  const classess =
    "from-[#BE4FEE] to-[#883BFE] from-[#5340FFCC] to-[#BE38F3] from-[#00CCC6] to-[#BE38F3]";
  return pageContent ? (
    <>
      <Banner bgImage={bgImage.src}>
        <BannerSection
          title="Leadership in Action"
          description="Posuere diam massa in morbi posuere nullam. Accumsan dictum lacus nibh aliquam tincidunt faucibus quis vehicula ac. Tempor fringilla odio id tortor felis suspendisse porta placerat rhoncus. Vestibulum semper vitae pellentesque fames quam purus nec faucibus porttitor."
        />
      </Banner>
      <Breadcrumb>
        <Breadcrumbs
          list={[
            {
              name: "Leadership in Action",
            },
          ]}
        />
      </Breadcrumb>
      <Section bgColor="white">
        <div className="grid grid-cols-1 md:grid-cols-[auto_370px] gap-16 min-h-screen">
          <div className="flex flex-col gap-12">
            <TextContentSection title="Climate Action & Sustainability" />
            <div className="flex border-l-2 border-green-500 bg-green-50 p-5">
              <Text variant={"card_title_large"}>
                Message from EMCC Global President, Dr Riza Kadilar
              </Text>
            </div>
            <TextContentSection
              texts={[
                "We live in extraordinary times, where a number of global challenges face humanity, throwing doubt on the very fabric of society and the way we have chosen to exist. These challenges provoke different and often strong reactions and there is a risk we become polarised and isolated. It is only through meaningful human connection and dialogue that we can begin to coalesce and find shared solutions, looking to a fair and sustainable way of living.",
                "Coaching needs to evolve and I believe coaches, mentors and supervisors have an important role in supporting our communities to engage into a reflective dialogue to have clarity on their roles regarding these important topics, and harness the best of humanity. We have the skills to generate awareness and high quality thinking. We are proud of our role in 2022 in revising the Global Code of Ethics, which is now much clearer about our responsibilities in benefitting society more broadly.",
                "EMCC has always been and continues to be an inclusive thought leadership organisation. That’s why we aim to support our community to be better equipped in dealing with challenging topics and conversations.",
                "We, therefore, offer this reflective guide, not as a manual or an instruction but as a tool to guide your thinking. There is no single truth or right way, and we invite you to use this resource to reflect on your practice and identify what actions, if any, you may want to take.",
                "Finally, I would like to thank members of the Climate Action and Sustainability Centre for Excellence for their work in collating this guide.",
              ]}
            />
            <div className="flex">
              <Button
                variant={"default"}
                btnType={"primary"}
                outline
                Icon={<Icon name="download" className="text-[20px] " />}
              >
                Climate Action and Sustainability Guide
              </Button>
            </div>
          </div>
          <div className="">
            <div className="sticky flex flex-col gap-12 top-4 max-h-[calc(100vh)] overflow-y-scroll scrollbar-hide">
              <SidebarMenu menuData={menuData} />
            </div>
          </div>
        </div>
      </Section>
      <Section bgColor="transparent" className="!pt-0">
        <RelatedResourceGroup title="Related Resources" />
      </Section>
    </>
  ) : null;
};

export default page;
