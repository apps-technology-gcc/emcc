import { ButtonProps } from "./Button";
import { Icon } from "./Icon";
import { Text } from "./Text";

const Primary = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className="flex group bg-primary-100 hover:bg-primary-500 items-center gap-2.5 py-[3.5px] px-5 rounded-[2px] ">
      <Text
        className="text-primary-600 group-hover:text-white"
        variants="button"
        as="span"
      >
        {children}
      </Text>
    </button>
  );
};

const NavigationMegaMenuBtn = ({
  title,
  icon,
}: {
  title: string;
  icon: string;
}) => {
  return (
    <button className="flex max-w-fit items-center gap-2.5 bg-[#F6F6F6] hover:bg-green-100 py-[5px] px-2.5 rounded-[2px] ">
      <Text variants="nav_text_2" as="span">
        {title}
      </Text>
      {/* <Icon name="contactless" className="text-[20px]" /> */}
      <Icon name={icon} className="text-[20px]" />
    </button>
  );
};

const TextLink = ({ title }: { title: string }) => {
  return (
    <button className="flex items-center gap-2.5">
      <div className="bg-[#4DFBED] h-8 w-8 flex items-center justify-center rounded-full">
        <Icon name="arrow_outward" className="text-[20px]" />
      </div>
      <Text variants="button" className="hover:underline" as="span">
        {title}
      </Text>
    </button>
  );
};

const TextLinkIcon = () => {
  return (
    <button className="flex items-center gap-2.5">
      <Icon name="contactless" className="" />
      <Text variants="navbar" className="hover:underline" as="span">
        TextLink
      </Text>
    </button>
  );
};

export { Primary, NavigationMegaMenuBtn, TextLink, TextLinkIcon };
