import Image from "next/image";
import JobLogo from "@/public/job_logo.svg";
import { Text } from "@/src/components/ui/elements/Text";
import Link from "@/src/components/ui/elements/Link";

export interface JobCardProps {
  logo: string;
  title: string;
  experience: string;
  company: string;
  location: string;
  jobType: string;
  workMode: string;
  applyLink: string;
}

const JobCard: React.FC<JobCardProps> = ({
  logo,
  title,
  experience,
  company,
  location,
  jobType,
  workMode,
  applyLink,
}) => {
  return (
    // <div className="grid border-b border-border gap-8 grid-cols-[50px_auto_170px_170px_70px] px-5 py-[36.5px] ">
    //   <div>
    //     <Image
    //       className="w-full"
    //       width={50}
    //       height={50}
    //       //   src={logo }
    //       src={JobLogo}
    //       alt="job-logo"
    //     />
    //   </div>
    //   <div className="flex flex-col gap-5">
    //     <p className="underline font-bold text-lg">
    //       {title} ({experience} Exp.)
    //     </p>
    //     <div className="flex items-center gap-5">
    //       <p className="font-medium">{company}</p>
    //       <p className="text-gray-600">{location}</p>
    //     </div>
    //   </div>
    //   <div className="flex items-center gap-2.5">
    //     <p>{jobType}</p>
    //     <p>{workMode}</p>
    //   </div>
    //   <div className="flex items-center">
    //     <p>{location}</p>
    //   </div>
    //   <div className="flex items-center">
    //     <Link
    //       href={applyLink}
    //       className="text-blue-600 font-medium flex items-center gap-1"
    //     >
    //       Apply <span className="material-icons">east</span>
    //     </Link>
    //   </div>
    // </div>
    <div className="grid border-b border-border gap-8 grid-cols-[50px_auto_170px_170px_70px] px-5 py-[36.5px] ">
      <div className="">
        <Image
          className="w-full"
          width={50}
          height={50}
          src={JobLogo}
          alt="job-logo"
        />
      </div>
      <div className="flex flex-col gap-5">
        <Text variant={"card_title_large"} className="underline">
          {title} ({experience} Exp.)
        </Text>
        <div className="flex items-center gap-5">
          <Text variant={"card_title_small"}>{company}</Text>
          <Text variant={"body"}>{location}</Text>
        </div>
      </div>
      <div className="flex items-center gap-2.5">
        <Text variant={"body"}>{jobType}</Text>
        <Text variant={"body"}>{workMode}</Text>
      </div>
      <div className="flex items-center">
        <Text variant={"body"}>{location}</Text>
      </div>
      <div className="flex items-center">
        <Link href="#" variant={"primary"} iconPosition="right" icon="east">
          Apply
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
