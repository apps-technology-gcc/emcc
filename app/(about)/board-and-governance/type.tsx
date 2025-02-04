// src/types/board-governance.ts
export interface BreadcrumbItem {
  name: string;
  href?: string;
}

export interface AccordionItem {
  title: string;
  content: string;
}

export interface BoardMember {
  name: string;
  position: string;
  email: string;
  imageSrc: string;
  bio?: string;
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

export interface BoardPageContent {
  banner: {
    title: string;
    description: string;
  };
  breadcrumb: BreadcrumbItem[];
  executiveBoard: {
    title: string;
    description: string;
    accordions: AccordionItem[];
  };
  president: {
    title: string;
    name: string;
    description: string;
    imageSrc: string;
  };
  boardSecretary: {
    title: string;
    name: string;
    description: string;
    email: string;
    imageSrc: string;
  };
  boardText: string;
  boardMembers: {
    title: string;
    members: BoardMember[];
  };
  boardAdvisors: {
    title: string;
    members: BoardMember[];
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
