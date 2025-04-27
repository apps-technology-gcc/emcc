import { Text } from "@/src/components/ui/elements/Text";
import { Button } from "@/src/components/ui/elements/Button";
import { Icon } from "@/src/components/ui/elements/Icon";
import Image from "next/image";
import NavLink2 from "@/src/components/ui/elements/NavLink2";
import sqricon from "@/public/sqricon.svg";
import { AccordionList } from "@/src/components/ui/elements/AccordionsList";
import { cn } from "@/src/lib/utils";
import { usePathname } from "next/navigation";

interface SidebarSectionProps {
  aboutEMCC: {
    title: string;
    accordion: {
      title: string;
      listItems: {
        id: string;
        text: string;
      }[];
    };
    links: { text: string; href: string }[];
  };
  moreAboutUs?: {
    title: string;
    cards: { icon: string; title: string; description: string }[];
  };
  applyToJoin: {
    title: string;
    description: string;
    buttonText: string;
  };
  moreDetails?: {
    title: string;
    items: {
      title: string;
      href: string;
    }[];
  };
  downloadHistory?: {
    title: string;
    items: {
      title: string;
      href: string;
    }[];
  };
  activeSection: string;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({
  aboutEMCC,
  moreAboutUs,
  applyToJoin,
  moreDetails,
  downloadHistory,
  activeSection,
}) => {
  //  Get active rounte path
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "";
  console.log("currentPath", currentPath);
  const pathname = usePathname();
  console.log("pathname", pathname);
  return (
    <div className="flex sticky top-4 overflow-y-scroll scrollbar-hide flex-col gap-12">
      <div>
        <div className="p-5 mb-[17px] bg-primary-100">
          <Text variant={"side_nav_header"} className="text-neutralDark">
            {aboutEMCC.title}
          </Text>
        </div>
        <div className="flex flex-col gap-5">
          <div className="border-b border-border">
            <AccordionList
              activeSection={activeSection}
              title={aboutEMCC.accordion.title}
              listItems={aboutEMCC.accordion.listItems}
            />
          </div>
          {aboutEMCC.links.map((link, index) => (
            <NavLink2
              key={index}
              className={cn(
                "flex items-center justify-between w-full ",
                pathname === link.href && "!text-primary-800"
              )}
              href={link.href || "#"}
              variant={"eight"}
            >
              {link.text}
              <Icon name="chevron_right" className="text-[16px]" />
            </NavLink2>
          ))}
        </div>
      </div>
      {moreAboutUs && (
        <div className="flex bg-background flex-col px-5 py-8 rounded-md gap-8">
          <Text variant={"card_title_large"}>{moreAboutUs.title}</Text>
          {moreAboutUs.cards.map((card, index) => (
            <div key={index} className="flex items-center gap-5">
              <Image src={sqricon} width={50} height={40} alt="icon" />
              <div className="flex flex-col items-start gap-5">
                <Text variant={"card_title_small"}>{card.title}</Text>
                <Text variant={"body"} className=" line-clamp-2">
                  {card.description}
                </Text>
              </div>
            </div>
          ))}
        </div>
      )}
      {moreDetails && (
        <div className="flex bg-background flex-col px-5 py-8 rounded-md gap-8">
          <Text className="text-neutral" variant={"card_title_large"}>
            {moreDetails.title}
          </Text>
          <div className="flex flex-col gap-5">
            {moreDetails.items.map((item, index) => (
              <div key={index} className="flex items-center gap-2.5">
                <Icon name="description" className="text-[20px]" />
                <Text variant={"navbar"} className="text-neutralDark">
                  {item.title}
                </Text>
              </div>
            ))}
          </div>
        </div>
      )}
      {downloadHistory && (
        <div className="flex bg-background flex-col px-5 py-8 rounded-md gap-8">
          <Text className="text-neutral" variant={"card_title_large"}>
            {downloadHistory.title}
          </Text>
          <div className="flex flex-col gap-5">
            {downloadHistory.items.map((item, index) => (
              <div key={index} className="flex items-center gap-2.5">
                <Icon name="description" className="text-[20px]" />
                <Text variant={"navbar"} className="text-neutralDark">
                  {item.title}
                </Text>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex bg-background flex-col px-5 py-8 rounded-md gap-8">
        <Text variant={"card_title_large"}>{applyToJoin.title}</Text>
        <Text variant={"body"}>{applyToJoin.description}</Text>
        <Button variant={"default"} btnType={"primary"} outline>
          {applyToJoin.buttonText}
        </Button>
      </div>
    </div>
  );
};

export default SidebarSection;
