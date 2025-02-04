export interface BreadcrumbItem {
  name: string;
}

export interface GuidingValue {
  id: number;
  title: string;
  description: string;
}

export interface AccordionItem {
  title: string;
  content: string;
}

export interface SidebarLink {
  text: string;
  href: string;
}

export interface SidebarCard {
  icon: string;
  title: string;
  description: string;
}

export interface PageContent {
  banner: {
    title: string;
    description: string;
  };
  breadcrumb: BreadcrumbItem[];
  workWeDo: {
    title: string;
    paragraphs: string[];
    accordions: AccordionItem[];
  };
  guidingValues: GuidingValue[];
  ourStrategy: {
    title: string;
    paragraphs: string[];
    accordions: AccordionItem[];
  };
  ourRegion: {
    title: string;
    description: string;
    countries: string[];
  };
  sidebar: {
    aboutEMCC: {
      title: string;
      accordion: {
        title: string;
        listItems: string[];
      };
      links: SidebarLink[];
    };
    moreAboutUs: {
      title: string;
      cards: SidebarCard[];
    };
    applyToJoin: {
      title: string;
      description: string;
      buttonText: string;
    };
  };
}
