interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface LeadershipDescription {
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
  aboutTitle: string;
  aboutContent: string;
  accordionList: AccordionItem[];
  boardLink: string;
  leadershipLink: string;
  moreAboutItems: MoreAboutItem[];
  applyTitle: string;
  applyContent: string;
  applyButtonLabel: string;
  applyButtonUrl: string;
}

export interface PageContent {
  banner: Banner;
  breadcrumb: BreadcrumbItem[];
  executiveLeadership: LeadershipDescription;
  executiveDirectors: ExecutiveDirectors;
  countryDirectors: CountryDirectors;
  sidebar: Sidebar;
}
