// "use client";
// import { Text } from "@/src/components/ui/elements/Text";
// import Image from "next/image";
// import { Button } from "@/src/components/ui/elements/Button";
// import { GradientButton } from "@/src/components/ui/elements/GradientButton";
// import Link from "@/src/components/ui/elements/Link";
// import { Primary } from "@/src/components/ui/elements/Additional";
// import InputChips from "@/src/components/ui/elements/InputChips";
// import { Input } from "@/src/components/ui/elements/form/Input";
// import Otp from "@/src/components/ui/elements/form/Otp";
// import CardNumber from "@/components/ui/elements/form/CardNumber";
// import FileUpload from "@/src/components/ui/elements/form/FileUpload";
// import { SearchInput } from "@/src/components/ui/elements/form/Search";
// import { SearchHome } from "@/src/components/ui/elements/form/SearchHome";
// import Tag from "@/src/components/ui/elements/Tags";
// import Radio from "@/src/components/ui/elements/form/Radio";
// import SearchSelect from "@/src/components/ui/elements/form/SearchSelect";
// import { useForm } from "react-hook-form";
// import { Accordion } from "@/src/components/ui/elements/Accordions";
// import { AccordionList } from "@/src/components/ui/elements/AccordionsList";
// import Switch from "@/src/components/ui/elements/Switch";
// import NavLink from "@/src/components/ui/elements/NavLink";
// import SideBarNav from "@/src/components/ui/elements/SideBarNav";
// import DashBoardNav from "@/src/components/ui/elements/DashboardNav";
// import PageNavigation from "@/src/components/ui/elements/PageNavigation";
// import Breadcrumbs from "@/src/components/ui/elements/Breadcrumbs";
// import MegaMenu from "@/src/components/ui/elements/MegaMenu";
// import NavLink2 from "@/src/components/ui/elements/NavLink2";
// import { Icon } from "@/src/components/ui/elements/Icon";
// import NavProfileLink from "@/src/components/ui/elements/NavProfileLink";
// import Navbar from "@/src/components/navbar/Navbar";
// import { Footer } from "@/src/components/footer/Footer";
// import Toast from "@/src/components/ui/elements/Toast";
// import ChatWidgetContainer from "@/src/components/chat/ChatWidgetContainer";
// export default function Home() {
//   const handleCardNumberChange = (value: string) => {
//     console.log("Card number:", value); // Will receive clean number without spaces
//   };
//   const { control } = useForm();
//   return (
//     <div className="">
//       {/* Text */}
//       <Text variant="body">This is a text component</Text>
//       <Text variant="body" font="tinos">
//         This is a text component
//       </Text>
//       {/* View All Type Of Combination Text Variations

//       h1_page_title: "text-[48px] leading-[53.5px] font-bold font-poppins",
//       h2_page_title_2: "text-[48px] leading-[72px] font-medium font-poppins",
//       navbar: "text-sm leading-[21px] font-normal font-poppins",
//       section_title: "text-[26px] leading-[39px] font-semibold font-poppins",
//       body: "text-sm leading-[26px] font-light font-poppins",
//       card_title_large: "text-base leading-6 font-medium font-poppins",
//       card_title_small: "text-sm leading-[21px] font-medium font-poppins",
//       label: "text-xs leading-[18px] font-normal font-poppins",
//       resource_header: "text-base leading-6 font-medium font-poppins",
//       placeholder: "text-xs leading-[18px] font-light font-poppins",
//       button: "text-sm leading-[21px] font-normal font-poppins",
//       small: "text-xs leading-[18px] font-light font-poppins",
//       tag: "text-sm leading-[21px] font-normal font-poppins",
//       extra_small: "text-[10px] leading-[15px] font-light font-poppins",
//       nav_text_2: "text-xs leading-[18px] font-normal font-poppins",
//       side_nav_header: "text-sm leading-[21px] font-semibold font-poppins",
//       */}
//       <Text variant="h1_page_title">This is a text component</Text>
//       <Text variant="h2_page_title_2">This is a text component</Text>
//       <Text variant="navbar">This is a text component</Text>
//       <Text variant="section_title">This is a text component</Text>
//       <Text variant="body">This is a text component</Text>
//       <Text variant="card_title_large">This is a text component</Text>
//       <Text variant="card_title_small">This is a text component</Text>
//       <Text variant="label">This is a text component</Text>
//       <Text variant="resource_header">This is a text component</Text>
//       <Text variant="placeholder">This is a text component</Text>
//       <Text variant="button">This is a text component</Text>
//       <Text variant="small">This is a text component</Text>
//       <Text variant="tag">This is a text component</Text>
//       <Text variant="extra_small">This is a text component</Text>
//       <Text variant="nav_text_2">This is a text component</Text>
//       <Text variant="side_nav_header">This is a text component</Text>
//       {/* Use tinos font for all text component */}
//       <Text variant="h1_page_title" font="tinos">
//         This is a text component
//       </Text>
//       <Text variant="h2_page_title_2" font="tinos">
//         This is a text component
//       </Text>
//       <Text variant="navbar" font="tinos">
//         This is a text component
//       </Text>
//       <Text variant="section_title" font="tinos">
//         This is a text component
//       </Text>
//       <Text variant="body" font="tinos">
//         This is a text component
//       </Text>
//       <Text variant="card_title_large" font="tinos">
//         This is a text component
//       </Text>
//       <Text variant="card_title_small" font="tinos">
//         This is a text component
//       </Text>
//       <Text variant="label" font="tinos">
//         This is a text component
//       </Text>
//       <Text variant="resource_header" font="tinos">
//         This is a text component
//       </Text>
//       <Text variant="placeholder" font="tinos">
//         This is a text Placeholder
//       </Text>
//       <Text variant="button" font="tinos">
//         This is a text component
//       </Text>
//       <Text variant="small" font="tinos">
//         This is a text component
//       </Text>
//       <Text variant="tag" font="tinos">
//         This is a text component
//       </Text>
//       <Text variant="extra_small" font="tinos">
//         This is a text component
//       </Text>
//       <Text variant="nav_text_2" font="tinos">
//         This is a text component
//       </Text>
//       <Text variant="side_nav_header" font="tinos">
//         This is a text component
//       </Text>
//       {/* <div className="relative p-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-lg">
//         <div className="relative bg-white p-4 rounded-md bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
//           <p className="text-center">This is a simulated gradient border!</p>
//         </div>
//       </div> */}
//       {/* <div className="border-neutralDark bg-gradient-one">div</div> */}
//       <Button variant="default" btnType="primary">
//         Click me
//       </Button>
//       <Button variant="radius" btnType="primary">
//         Click me
//       </Button>
//       <Button variant="default" btnType="secondary">
//         Click me
//       </Button>
//       <Button variant="radius" btnType="secondary">
//         Click me
//       </Button>
//       <Button variant="default" btnType="secondary" outline>
//         Click me
//       </Button>
//       <Button variant="radius" btnType="secondary" outline>
//         Click me
//       </Button>
//       <Button variant="default" btnType="primary" outline>
//         Click me
//       </Button>
//       <Button variant="radius" btnType="primary" outline>
//         Click me
//       </Button>
//       <GradientButton variant="gradient_one">
//         Primary gradient Button
//       </GradientButton>

//       <Link href="/" variant="primary">
//         Primary Link
//       </Link>
//       <Link href="/" variant="secondary">
//         Secondary Link
//       </Link>
//       <Primary>Primary</Primary>
//       <InputChips variant="primary">Primary</InputChips>
//       <InputChips variant="secondary">Secondary</InputChips>
//       <InputChips variant="text">Text</InputChips>

//       <Input label="Label" placeholder="Placeholder" />

//       <Otp />

//       <CardNumber
//         onChange={handleCardNumberChange}
//         placeholder="Enter card number"
//       />
//       <div className="my-2">
//         <FileUpload type="attach" />
//       </div>
//       <FileUpload type="choose" />
//       <Tag style="styleNone" variant="tag1">
//         Search
//       </Tag>
//       <Tag style="style1" variant="tag2">
//         Search
//       </Tag>
//       <Tag style="style2" variant="tag2">
//         Search
//       </Tag>
//       <Tag style="style3" variant="tag2">
//         Search
//       </Tag>
//       <div className="z-10">
//         <SearchHome id="search" placeholder="Search" />
//       </div>
//       <SearchSelect
//         control={control}
//         name="country"
//         options={[
//           { value: "us", label: "United States" },
//           { value: "uk", label: "United Kingdom" },
//         ]}
//         // checkbox
//         isMulti
//         placeholder="Select a country"
//         onChange={(value) => console.log(value)}
//       />
//       <Accordion
//         title="Basic Accordion"
//         content="This is the content<br/>This is another paragraph"
//       />
//       <AccordionList
//         title="Basic Accordion"
//         listItems={["Item 1", "Item 2", "Item 3"]}
//       />
//       <Switch
//         label="Toggle me"
//         onChange={(e) => console.log(e.target.checked)}
//       />
//       <div className="flex items-center gap-5">
//         <NavLink variant="navlink-1" href="/">
//           Text
//         </NavLink>
//         <NavLink variant="navlink-2" href="/">
//           Text
//         </NavLink>
//         <NavLink variant="declaration" href="/">
//           Text
//         </NavLink>
//         <NavLink variant="tab-1" href="/">
//           Text
//         </NavLink>
//         <NavLink variant="tab-2" href="/">
//           Text
//         </NavLink>
//       </div>
//       <SideBarNav />
//       <DashBoardNav />
//       <PageNavigation />
//       <Breadcrumbs />
//       <Navbar />
//       <Footer />
//       <NavLink2 href="/" variant="one">
//         <span>Home</span>
//         <Icon className="text-[16px]" name="arrow_drop_down" />
//       </NavLink2>
//       <NavLink2 href="/" variant="two">
//         <span>Home</span>
//       </NavLink2>
//       <NavLink2 href="/" variant="three">
//         <span>Home</span>
//       </NavLink2>
//       <NavLink2 href="/" variant="four">
//         <span>Home</span>
//         <Icon className="text-[16px]" name="chevron_right" />
//       </NavLink2>
//       <NavLink2 href="/" variant="five">
//         <span>Home</span>
//         <Icon
//           className="text-[16px] group-hover:text-primary-600"
//           name="chevron_right"
//         />
//       </NavLink2>
//       <NavLink2 href="/" variant="six">
//         <span>Home</span>
//       </NavLink2>
//       <NavLink2 href="/" variant="seven">
//         <span className="min-w-24">Home</span>
//         <Tag variant="tag2" style="style1">
//           New
//         </Tag>
//       </NavLink2>
//       <NavLink2 href="/" variant="eight">
//         <span>Home</span>
//         <Icon
//           className="text-[16px] group-hover:text-primary-600"
//           name="chevron_right"
//         />
//       </NavLink2>
//       <NavLink2 href="/" variant="link">
//         <span className="group-hover:underline">Link</span>
//       </NavLink2>
//       <NavProfileLink
//         icon={
//           <Icon
//             className="text-[16px] group-hover:text-primary-600"
//             name="account_circle"
//           />
//         }
//         href="/profile"
//         text="My Profile"
//       />
//       {/* <div>Custom content here</div> */}
//       {/* <Checkbox id="checkbox" label="Checkbox" /> */}
//       <Radio id="option1" label="Option 1" labelPosition="right" />
//       <Toast />
//       <ChatWidgetContainer />
//     </div>
//   );
// }
import React from "react";

const page1 = () => {
  return <div>Page 1</div>;
};

export default page1;
