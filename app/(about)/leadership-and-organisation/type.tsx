interface Banner {
  title: string;
  description: string;
}

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface ExecutiveLeadership {
  title: string;
  description: string[];
}

interface Member {
  name: string;
  role: string;
  imageSrc: string;
  description: string;
}

interface ExecutiveDirectors {
  title: string;
  members: Member[];
}

interface CountryDirectors {
  title: string;
  members: Member[];
}

interface AccordionItem {
  title: string;
  listItems: string[];
}

interface MoreAboutItem {
  title: string;
  description: string;
}

interface Sidebar {
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
}

interface LeadershipData {
  banner: Banner;
  breadcrumb: BreadcrumbItem[];
  executiveLeadership: ExecutiveLeadership;
  executiveDirectors: ExecutiveDirectors;
  countryDirectors: CountryDirectors;
  sidebar: Sidebar;
}
