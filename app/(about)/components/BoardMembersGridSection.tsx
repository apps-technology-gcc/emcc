import { Text } from "@/src/components/ui/elements/Text";
import SectionLink from "@/src/components/common/SectionLink";
import MemberCard from "@/src/components/card/MemberCard";

interface BoardMembersGridSectionProps {
  title: string;
  members: any[]; // Replace `any` with the actual type for MemberCard data
  linkTitle?: string;
  onClick?: () => void;
}

const BoardMembersGridSection: React.FC<BoardMembersGridSectionProps> = ({
  title,
  members,
  linkTitle,
  onClick,
}) => {
  return (
    <div className="flex flex-col rounded-md">
      <Text variant={"section_title"} className="text-neutralDark mb-8">
        {title}
      </Text>
      <div className="grid mb-8 gap-8 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3">
        {members.map((member, index) => (
          <MemberCard key={index} {...member} />
        ))}
      </div>
      {linkTitle && <SectionLink onClick={() => onClick()} title={linkTitle} />}
    </div>
  );
};

export default BoardMembersGridSection;
