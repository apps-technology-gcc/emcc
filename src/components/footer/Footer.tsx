import * as React from "react";
import { FooterColumn } from "./FooterColumn";
import { SocialLink } from "./SocialLink";
import { Text } from "../ui/elements/Text";
import { Cookies } from "./Cookies";
import NavLink2 from "../ui/elements/NavLink2";

const companyLinks = [
  "About EMCC ME",
  "Member Benefits",
  "Data & Insights",
  "Accreditation",
  "Articles & Research",
];
const communityLinks = [
  "EMCC Global",
  "Corporate Membership",
  "Communities of Practice",
  "Partnership & Sponsorship",
  "Become a Volunteer",
];
const servicesLinks = [
  "EMCC Registrar",
  "Regulation",
  "Competency Frameworks",
  "Training & Events",
  "Newsletter Signup",
];
const legalLinks = [
  "Site Map",
  "How to make a Complaint",
  "Terms of Business",
  "Privacy Policy",
  "Corporate Governance",
];
const socialLinks = ["Facebook", "Instagram", "LinkedIn", "YouTube"];

export const Footer: React.FC = () => {
  const handleCookieAccept = () => {
    console.log("change");
  };
  const handleCookieReject = () => {
    console.log("change");
  };
  const handleCookieManage = () => {
    console.log("change");
  };

  return (
    <div className="flex relative flex-col bg-neutral-100">
      <div className="flex z-0 flex-col px-14 py-12 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
            <div className="flex flex-col text-xs font-light min-w-[240px] text-zinc-800 w-[330px]">
              <div className="flex gap-5 flex-col w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/0c97f9c7045a66cb38af7dd2719d899ab8a4b65d3bcd8dc208a121f1f13d244c?apiKey=7d86919144c846178294e9d8a4321223&"
                  alt="EMCC Global Logo"
                  className="object-contain aspect-[2.23] w-[89px]"
                />
                <Text variant="small" className="text-neutral">
                  EMCC Global is registered as a 'not for profit international
                  association' in Belgium under registration number
                  0819.495.590.
                </Text>
                <Text variant="small" className="text-neutral">
                  VAT registration BE0819495590
                </Text>
                <Text variant="small" className="text-neutral">
                  Registered Address: EMCC Global, 63A Scepterstraat, 1050
                  Brussels, Belgium
                </Text>
                <Text variant="small" className="text-neutral">
                  Email: administrator@emccme.org
                </Text>
              </div>
            </div>
            <div className="flex flex-wrap flex-1 shrink gap-10 items-start pt-16 basis-0 min-w-[240px] max-md:max-w-full">
              <FooterColumn title="Company" links={companyLinks} />
              <FooterColumn title="Community" links={communityLinks} />
              <FooterColumn title="Services & Support" links={servicesLinks} />
              <FooterColumn title="Legal" links={legalLinks} />
            </div>
          </div>
        </div>
        <div className="flex border-b  border-border mt-12 w-full bg-neutral-300 min-h-[1px] max-md:mt-10 max-md:max-w-full" />
        <div className="flex flex-wrap gap-10 justify-between items-end mt-12 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-8 justify-center items-center text-xs font-light whitespace-nowrap min-w-[240px] text-zinc-800">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/c8804fc458ae21245d80a94160bc00ec4a9c28277fe7871ab68163c5587d65c0?apiKey=7d86919144c846178294e9d8a4321223&"
              alt="Social Media Icon"
              className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
            />
            <div className="flex gap-5 items-start self-stretch my-auto min-w-[240px]">
              {socialLinks.map((link, index) => (
                <NavLink2 variant="link" href={link} key={index}>
                  <span className="group-hover:underline">{link}</span>
                </NavLink2>
              ))}
            </div>
          </div>
          <div className="flex gap-8 items-end min-w-[240px]">
            <Text
              variant="small"
              className="text-xs font-light text-right text-zinc-800"
            >
              Copyright ©2024 All rights reserved
            </Text>
            <div className="flex gap-2.5 items-center w-[31px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/f5a06d832952d4a7d1b1918e29a74cd6d2fb712e25bf40af607064f23c5170fa?apiKey=7d86919144c846178294e9d8a4321223&"
                alt=""
                className="object-contain self-stretch my-auto aspect-[0.78] w-[31px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex absolute z-0 gap-2.5 items-start p-2.5 w-11 h-11 rounded-sm bg-zinc-900 bg-opacity-90 right-[55px] top-[108px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/97566be1f2dc49557107ce79ca7e3d575c310f425bf9e1468e7ede7974e29110?apiKey=7d86919144c846178294e9d8a4321223&"
          alt=""
          className="object-contain w-6 aspect-square"
        />
      </div>
      <Cookies
        onAccept={handleCookieAccept}
        onReject={handleCookieReject}
        onManage={handleCookieManage}
      />
      <div className="flex absolute z-0 flex-col items-end bottom-[225px] right-[55px] w-[50px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/3349c65cac403813cbf31e6bb08bd0fcc24b780f093e286118ea0f73bdb1871d?apiKey=7d86919144c846178294e9d8a4321223&"
          alt=""
          className="object-contain w-full mb-[4.5px] shadow-sm aspect-square"
        />
      </div>
    </div>
  );
};
