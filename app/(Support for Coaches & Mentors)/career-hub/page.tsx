"use client";
import React, { useState } from "react";
import CareerBg from "@/public/career_bg.jpeg";
import Banner from "@/src/components/common/Banner";
import BannerSection from "@/src/components/common/BannerSection";
import { cn } from "@/src/lib/utils";
import Image from "next/image";
import Breadcrumb from "@/src/components/common/Breadcrumb";
import Breadcrumbs from "@/src/components/ui/elements/Breadcrumbs";
import Section from "@/src/components/layout/Section";
import { Button } from "@/src/components/ui/elements/Button";
import { Text, textVariants } from "@/src/components/ui/elements/Text";
import TextContentSection from "@/src/components/common/TextContentSection";
import { Icon } from "@/src/components/ui/elements/Icon";
import KeyBoardLeftIcon from "@/public/keyboard_icon_left.svg";
import KeyBoardRightIcon from "@/public/keyboard_icon_right.svg";
import MentorCardBg from "@/public/mentor_card_bg.png";
import FigmaLogo from "@/public/logo_figma.svg";
import Link from "@/src/components/ui/elements/Link";

const page = () => {
  const sectionsData = {
    "Career options": {
      texts: [
        "Lorem ipsum dolor sit amet consectetur. Urna nisl pulvinar aliquet sollicitudin at cursus porttitor luctus. Etiam id amet at in amet. Ultrices amet lobortis viverra tortor porta. Natoque adipiscing mi suscipit eget risus. Elit pretium quam sed consectetur at eget eu. Vel malesuada proin mi ultrices non ac in. Metus at molestie donec ac cras lorem. Sit purus id ut at ipsum. Eget morbi id egestas enim. Ac etiam volutpat nisl amet auctor lacus pellentesque. Nec augue nam at volutpat nisl sed netus. Sapien nec sit posuere proin. Tempus leo sodales purus nibh est vestibulum.",
        "Non quam morbi elementum praesent nisl massa lobortis faucibus. Velit sem mattis libero vel eu amet massa libero non. Felis risus a eleifend volutpat duis volutpat. Et tincidunt turpis amet et enim orci. Pulvinar pellentesque nunc lorem euismod sed volutpat in ultricies. Fermentum lorem sed mollis turpis egestas erat odio. Consequat massa ut erat et augue urna libero convallis. Massa neque cursus diam scelerisque. Mattis et accumsan ullamcorper mauris morbi nibh risus. Interdum consectetur tellus vulputate placerat dui laoreet sed adipiscing. Velit sit diam sollicitudin praesent eleifend mattis.",
      ],
      linkItem: { href: "/career", text: "Find Out More About Career" },
    },
    "Continuing competence": {
      texts: [
        "Lorem ipsum dolor sit amet consectetur. Tristique augue volutpat fermentum cursus et etiam libero. Non lectus ut nunc sit mattis amet sit pulvinar egestas. Elementum rutrum dictum libero pretium id in est lorem tellus. Nibh aenean sed sociis tincidunt convallis arcu turpis in. Proin sagittis leo cursus augue diam. Consectetur pretium id donec mauris turpis pharetra euismod nibh. Non a vel ac interdum placerat. Ornare rhoncus vel nulla pretium semper pharetra. Arcu libero risus diam diam aliquet pharetra. Id placerat vestibulum elementum aliquet ultrices et quam. Vitae egestas ultrices lectus dui morbi aliquet consequat dolor nibh. At ut varius nunc enim nibh varius viverra tristique consequat. Cursus diam in consectetur risus libero. Nulla auctor diam consectetur fringilla pellentesque habitasse fames hac scelerisque.",
        "Mi et venenatis eleifend nunc nulla tristique pretium. Lacus amet natoque lacus commodo nunc faucibus vitae eu vel. Eget tempus lectus et id laoreet tellus. Sed faucibus neque elementum urna eleifend. Scelerisque quam orci feugiat ultricies ut lectus aliquam. Arcu blandit vel integer varius a nulla adipiscing dignissim mauris. Sapien dui a ac pretium et. Viverra amet leo ut elementum consequat nisi et arcu eget. Ipsum ut mattis risus sapien mi vestibulum tortor non cras. Mi volutpat mattis turpis leo donec enim aliquam. Faucibus egestas viverra bibendum quis maecenas pretium. Lorem nulla feugiat vel leo nascetur pellentesque. Non sit sed nibh enim.",
        "Sapien gravida egestas magna convallis pellentesque. Tempor massa ipsum condimentum neque consequat pulvinar vulputate. Ut dui turpis lacinia habitasse at. Dignissim suspendisse viverra in habitant. Lacus turpis nunc commodo orci proin. Purus egestas aenean quisque viverra auctor elit a sit netus. Leo scelerisque aliquam et sit et eget ultricies sit.",
      ],
      linkItem: { href: "/career", text: "Find Out More About Career" },
    },
    "Coaching careers": {
      texts: [
        "Lorem ipsum dolor sit amet consectetur. Tristique augue volutpat fermentum cursus et etiam libero. Non lectus ut nunc sit mattis amet sit pulvinar egestas. Elementum rutrum dictum libero pretium id in est lorem tellus. Nibh aenean sed sociis tincidunt convallis arcu turpis in. Proin sagittis leo cursus augue diam. Consectetur pretium id donec mauris turpis pharetra euismod nibh. Non a vel ac interdum placerat. Ornare rhoncus vel nulla pretium semper pharetra. Arcu libero risus diam diam aliquet pharetra. Id placerat vestibulum elementum aliquet ultrices et quam. Vitae egestas ultrices lectus dui morbi aliquet consequat dolor nibh. At ut varius nunc enim nibh varius viverra tristique consequat. Cursus diam in consectetur risus libero.",
        "Nulla auctor diam consectetur fringilla pellentesque habitasse fames hac scelerisque. Mi et venenatis eleifend nunc nulla tristique pretium. Lacus amet natoque lacus commodo nunc faucibus vitae eu vel. Eget tempus lectus et id laoreet tellus. Sed faucibus neque elementum urna eleifend. Scelerisque quam orci feugiat ultricies ut lectus aliquam. Arcu blandit vel integer varius a nulla adipiscing dignissim mauris. Sapien dui a ac pretium et.",
      ],
      linkItem: { href: "/career", text: "Find Out More About Career" },
    },
    "Returning after a career break": {
      texts: [
        "Lorem ipsum dolor sit amet consectetur. Tristique sociis sapien cursus tellus netus pellentesque nulla. Mi nisl nisi mi eu adipiscing ac elementum consectetur augue. Pulvinar amet amet adipiscing pellentesque aliquam bibendum nam porttitor. Facilisis sed nunc proin urna quam habitant. Tortor amet etiam vestibulum dictum posuere ut. Eget leo at egestas amet enim cursus ipsum accumsan.",
        "Nibh sit mi sit ut. Nisl nisl amet nec amet nulla suscipit massa in. Nulla risus bibendum nisl eleifend. Enim nisl aliquet nam facilisi gravida malesuada mi euismod sed. In lectus tempor ut pellentesque faucibus id eget. Congue interdum non pellentesque ornare maecenas facilisi. Quis cras sit quis amet vulputate facilisi at faucibus at. Imperdiet pellentesque scelerisque volutpat at quam a eu aliquet.",
        "Maecenas risus lacus id vel egestas urna commodo sed. Eleifend sit turpis diam molestie sed. Tempor quam sed ultrices dictum. In dui pellentesque enim tellus morbi tellus. Ac sit nulla blandit ac. Egestas urna elementum platea magna amet. Sit ac nulla adipiscing tellus morbi. Odio mauris sed turpis elit phasellus gravida ac. Purus semper ipsum sollicitudin sed.",
        "Nec maecenas viverra adipiscing orci duis. Cras pretium at phasellus iaculis quam pellentesque sagittis feugiat. Mauris pretium duis imperdiet odio varius ultricies. Amet ullamcorper scelerisque arcu mollis laoreet amet eget. Dignissim bibendum purus gravida quisque morbi nunc enim. Integer facilisi sapien aliquam consectetur et ultrices facilisi. Viverra lectus bibendum adipiscing et aenean. Netus elementum et dolor tortor lacus molestie velit risus laoreet. Suspendisse metus sapien vel eu adipiscing adipiscing id auctor enim. Nibh vestibulum ornare ultrices amet nunc et a nullam quam.",
      ],
      linkItem: { href: "/career", text: "Find Out More About Career" },
    },
  };
  const [tabItems, setTabItems] = useState([
    "Career options",
    "Continuing competence",
    "Coaching careers",
    "Returning after a career break",
    "Looking for a Job",
  ]);
  const [selectedTabItem, setSelectedItem] = useState<
    | "Career options"
    | "Continuing competence"
    | "Coaching careers"
    | "Returning after a career break"
    | "Looking for a Job"
  >("Career options");
  // Function to chunk array into smaller groups
  const chunkArray = (array: string[], chunkSize: number) => {
    return array.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / chunkSize);

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [];
      }
      resultArray[chunkIndex].push(item);
      return resultArray;
    }, [] as string[][]);
  };

  const groupedItems = chunkArray(tabItems, 2); // Split into columns
  const setSelectedTab = (item: any) => {
    setSelectedItem(item);
  };
  return (
    <>
      <section
        className={cn(
          "md:py-[75px] bg-neutralDark relative py-[75px] flex items-center justify-start md:min-h-[500px]"
        )}
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="absolute right-0 w-[517px] top-0 h-full"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 26% 100%)" }}
        >
          <Image
            src={CareerBg}
            className="max-w-[130%]  object-contain "
            alt="career-bg"
          />
        </div>
        <div className="container">
          <BannerSection
            title="Welcome to your professional community"
            description="Lorem ipsum dolor sit amet consectetur. Scelerisque congue sagittis ac duis tortor sollicitudin facilisi. Nisi feugiat facilisis id ac proin potenti. Ut aenean porttitor dignissim sit purus nunc. Ac quam fermentum velit sed amet. Ipsum magna neque quam adipiscing."
          />
        </div>
      </section>
      <Breadcrumb>
        <Breadcrumbs
          list={[
            {
              name: "Career Hub",
            },
          ]}
        />
      </Breadcrumb>

      <Section bgColor="green-50" className="py-8">
        <div className="flex justify-between">
          <div className="flex gap-12">
            {groupedItems.map((group, index) => (
              <div key={index} className="flex flex-col gap-8">
                {group.map((item) => (
                  <button
                    key={item}
                    onClick={() => setSelectedTab(item)}
                    className={cn(
                      textVariants({
                        variant: "button",
                      }),
                      "text-neutralDark  underline-offset-[6px]",
                      selectedTabItem === item ? "" : "underline"
                    )}
                  >
                    {item}
                  </button>
                ))}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-8">
            <button className={cn("flex gap-2.5 items-center")}>
              <div className="h-2.5 w-2.5 bg-pink-500 "></div>
              <span
                className={cn(
                  textVariants({
                    variant: "button",
                  }),
                  "text-neutralDark underline underline-offset-[6px]",
                  "items-center"
                )}
              >
                {" "}
                Jobs with EMCC Global
              </span>
            </button>
            <button className={cn("flex gap-2.5 items-center")}>
              <div className="h-2.5 w-2.5 bg-pink-500 "></div>
              <span
                className={cn(
                  textVariants({
                    variant: "button",
                  }),
                  "text-neutralDark underline underline-offset-[6px]",
                  "items-center"
                )}
              >
                {" "}
                Jobs with EMCC ME
              </span>
            </button>
          </div>
        </div>
      </Section>

      <Section bgColor="white">
        {selectedTabItem === "Looking for a Job" ? (
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-5">
              {" "}
              <TextContentSection title="Coaching & Mentoring Jobs" />
              <Text variant={"body"} className="text-[#2B2B2B]">
                Laoreet libero tincidunt neque tellus semper morbi tellus. Non
                lorem velit a metus et senectus tincidunt.
              </Text>
            </div>
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-[18px] justify-end">
                  <div className="h-5 cursor-pointer w-5 border-primary-600 flex items-center justify-center border">
                    <Image src={KeyBoardLeftIcon} alt="keyboard-left-icon" />
                  </div>
                  <div className="h-5 w-5 cursor-pointer border-primary-600 flex items-center justify-center border">
                    <Image
                      src={KeyBoardRightIcon}
                      alt="keyboard-left-icon"
                      // className="transform rotate-180"
                    />
                  </div>
                </div>
                <div className="grid gap-8 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                  <div className="rounded-md border-border border overflow-hidden">
                    <div className="relative h-[100px]">
                      <Image
                        src={MentorCardBg}
                        alt="Mentor Bg"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute min-h-[100px] top-2 left-5">
                        <Image
                          src={FigmaLogo}
                          alt="Mentor Bg"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="px-5 pt-[50px] justify-between flex gap-5 pb-5 bg-white">
                      <div className="flex flex-col gap-5">
                        <Text
                          variant={"card_title_small"}
                          className="text-[#131314]"
                        >
                          GCC Limited
                        </Text>
                        <Text variant={"body"}>8 Jobs</Text>
                      </div>
                      <Icon name="add_circle" className="text-[20px]" />
                    </div>
                  </div>
                  <div className="rounded-md border-border border overflow-hidden">
                    <div className="relative h-[100px]">
                      <Image
                        src={MentorCardBg}
                        alt="Mentor Bg"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute min-h-[100px] top-2 left-5">
                        <Image
                          src={FigmaLogo}
                          alt="Mentor Bg"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="px-5 pt-[50px] justify-between flex gap-5 pb-5 bg-white">
                      <div className="flex flex-col gap-5">
                        <Text
                          variant={"card_title_small"}
                          className="text-[#131314]"
                        >
                          GCC Limited
                        </Text>
                        <Text variant={"body"}>8 Jobs</Text>
                      </div>
                      <Icon name="add_circle" className="text-[20px]" />
                    </div>
                  </div>
                  <div className="rounded-md border-border border overflow-hidden">
                    <div className="relative h-[100px]">
                      <Image
                        src={MentorCardBg}
                        alt="Mentor Bg"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute min-h-[100px] top-2 left-5">
                        <Image
                          src={FigmaLogo}
                          alt="Mentor Bg"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="px-5 pt-[50px] justify-between flex gap-5 pb-5 bg-white">
                      <div className="flex flex-col gap-5">
                        <Text
                          variant={"card_title_small"}
                          className="text-[#131314]"
                        >
                          GCC Limited
                        </Text>
                        <Text variant={"body"}>8 Jobs</Text>
                      </div>
                      <Icon name="add_circle" className="text-[20px]" />
                    </div>
                  </div>
                  <div className="rounded-md border-border border overflow-hidden">
                    <div className="relative h-[100px]">
                      <Image
                        src={MentorCardBg}
                        alt="Mentor Bg"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute min-h-[100px] top-2 left-5">
                        <Image
                          src={FigmaLogo}
                          alt="Mentor Bg"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="px-5 pt-[50px] justify-between flex gap-5 pb-5 bg-white">
                      <div className="flex flex-col gap-5">
                        <Text
                          variant={"card_title_small"}
                          className="text-[#131314]"
                        >
                          GCC Limited
                        </Text>
                        <Text variant={"body"}>8 Jobs</Text>
                      </div>
                      <Icon name="add_circle" className="text-[20px]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <Link
                  variant={"secondary"}
                  href="/ "
                  icon="east"
                  iconPosition="right"
                >
                  View All Jobs{" "}
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <CareerTabDetails
            title={selectedTabItem}
            {...sectionsData[selectedTabItem]}
          />
        )}
      </Section>
    </>
  );
};

const CareerTabDetails = ({
  title,
  linkItem,
  texts,
}: {
  title: string;
  texts: string[];
  linkItem: {
    href: string;
    text: string;
  };
}) => {
  return (
    <div className="flex flex-col gap-12">
      <TextContentSection title={title} texts={texts} />
      <Link
        href={linkItem.href}
        variant="primary"
        icon="east"
        iconPosition="right"
      >
        {linkItem.text}
      </Link>
    </div>
  );
};

export default page;
