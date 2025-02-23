import Section from "@/src/components/layout/Section";
import { Button } from "@/src/components/ui/elements/Button";
import { Text } from "@/src/components/ui/elements/Text";
import NotFoundImg from "@/public/gif/404.gif";
import Image from "next/image";
export default function NotFoundPage() {
  return (
    <Section bgColor="white" className="py-[135px]">
      <div className="flex flex-col items-center justify-center gap-12">
        <h1
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFB5] via-[#334AFF] via-[#887BFF]
        to-[#BE38F3] font-poppins text-[60px] font-medium leading-[90px]
        text-center"
        >
          Oops!
        </h1>
        <Image src={NotFoundImg} alt="404" width={200} height={148} />
        <Text variant={"section_title"}>404 - Page Not Found</Text>
        <Text variant={"body"} className="text-neutral">
          We can’t to seem to find the page you are looking for. Please visit
          this page again soon.
        </Text>
        <Button variant={"default"} btnType={"primary"}>
          Go to Home Page
        </Button>
      </div>
    </Section>
  );
}
