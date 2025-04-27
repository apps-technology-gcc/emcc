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
  const sections = [
    { id: "work_we_do", title: "Section 1" },
    { id: "strategy", title: "Section 2" },
    { id: "region", title: "Section 3" },
  ];
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Create an Intersection Observer with options
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the highest intersection ratio
        const visibleSection = entries.reduce((max: any, entry: any) => {
          return entry.intersectionRatio > (max?.intersectionRatio || 0)
            ? entry
            : max;
        }, null);

        // Update active section if we have a visible section
        if (visibleSection && visibleSection.intersectionRatio > 0) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        // Root margin to start detecting slightly before the element comes into view
        rootMargin: "-20% 0px -20% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1], // Multiple thresholds for smoother detection
      }
    );

    // Observe all section elements
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup function to remove observers
    return () => {
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sections]); // Add sections as dependency

  // For debugging
  useEffect(() => {
    console.log("Active Section:", activeSection);
  }, [activeSection]);

  const sideBarData = {
    aboutEMCC: {
      title: "About EMCC ME",
      accordion: {
        title: "About EMCC ME",
        listItems: [
          {
            id: "work_we_do",
            text: "Work We Do",
          },
          {
            id: "strategy",
            text: "Our Strategy",
          },
          {
            id: "region",
            text: "Our Region",
          },
        ],
      },
      links: [
        {
          text: "Board & Governance",
          href: "/board-and-governance",
        },
        {
          text: "Leadership & Organisation",
          href: "#",
        },
      ],
    },
    moreAboutUs: {
      title: "More About Us",
      cards: [
        {
          icon: "sqricon",
          title: "esg",
          description:
            "Lorem ipsum dolor sit amet consectetur. Mattis amet elit vulputate convallis massa accumsan purus sit. Proin porta sit amet nam egestas ac. Sit fermentum amet ut consequat nec. Non faucibus lectus quis tortor aliquam suscipit fermentum sem mi.",
        },
        {
          icon: "sqricon",
          title: "Research",
          description:
            "Lorem ipsum dolor sit amet consectetur. Mattis amet elit vulputate convallis massa accumsan purus sit. Proin porta sit amet nam egestas ac. Sit fermentum amet ut consequat nec. Non faucibus lectus quis tortor aliquam suscipit fermentum sem mi.",
        },
      ],
    },
    applyToJoin: {
      title: "Apply to Join Our Board",
      description:
        "Lorem ipsum dolor sit amet consectetur. Leo leo risus varius gravida tellus. Aliquet mi sit tristique mauris egestas molestie volutpat.",
      buttonText: "Register Your Interest",
    },
  };

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
            <WorkWeDoSection
              guidingValues={pageContent.guidingValues}
              {...pageContent.workWeDo}
            />
            {/* <GuidingValuesSection values={pageContent.guidingValues} /> */}
            <OurStrategySection {...pageContent.ourStrategy} />
            <OurRegionSection {...pageContent.ourRegion} />
          </div>
          <div className="md:col-span-4">
            <SidebarSection {...sideBarData} activeSection={activeSection} />
          </div>
        </div>
      </Section>
    </>
  ) : null;
};

export default page;
