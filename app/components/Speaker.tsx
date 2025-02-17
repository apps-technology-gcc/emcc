import React from "react";
import SpeakerImg from "@/public/speaker.png";
import Image from "next/image";
import { Text } from "@/src/components/ui/elements/Text";
import Link from "@/src/components/ui/elements/Link";
import { Icon } from "@/src/components/ui/elements/Icon";
import Divider from "@/src/components/ui/elements/Divider";
const Speakers = () => {
  return (
    <div className="bg-[#F7F7F7] flex flex-col gap-8 px-[30px] py-8 ">
      <Speaker />
      <Divider />
      <Speaker />
      <Divider />
      <Speaker />
    </div>
  );
};

export default Speakers;

const Speaker = () => {
  return (
    <div className="flex items-start gap-[30px]">
      <div className="min-w-[120px]">
        <Image
          src={SpeakerImg}
          width={120}
          height={120}
          alt="speaker"
          className="w-full"
        />
      </div>
      <div className="flex flex-col gap-5">
        <Text variant={"card_title_large"} className="text-[#333333]">
          Jennifer Britton
        </Text>
        <div className="flex flex-col max-w-fit gap-2 5">
          <Text variant={"body"} className="text-[#333333]">
            Coach, Author
          </Text>

          <span className="bg-green-200 h-[2px]"></span>
        </div>
        <Text variant={"body"} className="text-[#333333]">
          Lacinia massa cursus fermentum duis lacinia senectus. Sodales urna
          nibh urna ullamcorper vestibulum mauris. Etiam donec vel eu cursus sed
          ipsum nunc. Pellentesque tortor eget mauris iaculis. Nisl pellentesque
          aliquet arcu pretium nunc posuere nulla elementum gravida. Proin risus
          dictum ligula hac sed eget. Eget tortor placerat gravida egestas
          praesent. Nunc fusce vitae fringilla nisl fermentum imperdiet sit
          facilisi...
        </Text>
        <Link
          iconPosition="right"
          icon={<Icon name="east" className="text-[20px]" />}
          href="/"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};
