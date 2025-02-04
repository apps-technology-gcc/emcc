"use client";
import Banner from "@/src/components/common/Banner";
import BannerSection from "./../components/BannerSection";
import Breadcrumb from "@/src/components/common/Breadcrumb";
import Breadcrumbs from "@/src/components/ui/elements/Breadcrumbs";
import Section from "@/src/components/layout/Section";
import WorkWeDoSection from "./components/WorkWeDoSection";
import GuidingValuesSection from "./components/GuidingValuesSection";
import OurStrategySection from "./components/OurStrategySection";
import OurRegionSection from "./../components/OurRegionSection";
import SidebarSection from "./../components/SidebarSection";
import bgImage from "@/public/about-bg.png";
import { useEffect, useState } from "react";
import pageContentJson from "@/src/data/about.json";
import TextContentSection from "@/src/components/common/TextContentSection";
import { PageContent } from "./type";

const page = () => {
  const [pageContent, setPageContent] = useState<PageContent>(pageContentJson);

  return pageContent ? (
    <>
      <Banner bgImage={bgImage.src}>
        <BannerSection {...pageContent.banner} />
      </Banner>
      <Breadcrumb>
        <Breadcrumbs list={pageContent.breadcrumb} />
      </Breadcrumb>
      <Section bgColor="white">
        <div className="grid grid-cols-1 md:grid-cols-11 gap-16">
          <div className="md:col-span-7 flex flex-col gap-20">
            <WorkWeDoSection {...pageContent.workWeDo} />
            <GuidingValuesSection values={pageContent.guidingValues} />
            <OurStrategySection {...pageContent.ourStrategy} />
            <OurRegionSection {...pageContent.ourRegion} />
          </div>
          <div className="md:col-span-4">
            <SidebarSection {...pageContent.sidebar} />
          </div>
        </div>
      </Section>
    </>
  ) : null;
};

export default page;
