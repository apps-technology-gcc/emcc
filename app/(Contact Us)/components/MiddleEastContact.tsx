import Divider from "@/src/components/ui/elements/Divider";
import { Text } from "@/src/components/ui/elements/Text";
import React from "react";

const MiddleEastContact = () => {
  const contactItems = [
    {
      title: "Operations",
      email: "email@emccglobal.org",
    },
    {
      title: "Accreditation",
      email: "email@emccglobal.org",
    },
    {
      title: "Membership",
      email: "email@emccglobal.org",
    },
    {
      title: "Compliance",
      email: "email@emccglobal.org",
    },
    {
      title: "United Arab Emirates",
      email: "riza.kadilar@emccglobal.org",
    },
    {
      title: "Qatar",
      email: "riza.kadilar@emccglobal.org",
    },
    {
      title: "Qatar",
      email: "francois.baleynaud@emccglobal.org",
    },
    {
      title: "Kuwait",
      email: "riza.kadilar@emccglobal.org",
    },
    {
      title: "Jordan",
      email: "riza.kadilar@emccglobal.org",
    },
    {
      title: "Oman",
      email: "riza.kadilar@emccglobal.org",
    },
    {
      title: "Bahrain",
      email: "riza.kadilar@emccglobal.org",
    },
    {
      title: "Egypt",
      email: "riza.kadilar@emccglobal.org",
    },
  ];

  return (
    <div className="flex flex-col gap-12">
      <Text variant={"section_title"}>EMCC Global Contacts</Text>
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-2 gap-8 items-center gap-">
          <div className="p-5 flex flex-col gap-5 rounded-[10px] overflow-hidden bg-background">
            <Text variant={"card_title_large"} className="text-[#131314]">
              By Post
            </Text>
            <Text variant={"body"} className="text-[#333333]">
              EMCC Global, Avenue Paul-Henri Spaak 17, <br />
              1060 Brussels,
              <br />
              Belgium
            </Text>
          </div>
          <div className="p-5 flex flex-col gap-5 rounded-[10px] overflow-hidden bg-background">
            <Text variant={"card_title_large"} className="text-[#131314]">
              By Email
            </Text>
            <Text variant={"body"} className="text-[#333333]">
              Our Team are always happy to discuss your enquiries over the
              phone. <br />
              Email: admin@telenthub.com
            </Text>
          </div>
          {contactItems.slice(0, 4).map((item, index) => (
            <ContactItem key={index} {...item} />
          ))}
        </div>
        <Divider />
        <Text variant={"card_title_large"}>EMCC ME Countries</Text>
        <div className="grid grid-cols-2 gap-8">
          {contactItems.slice(4).map((item, index) => (
            <ContactItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Update the ContactItem interface and component
interface ContactItemProps {
  title: string;
  email: string;
  name?: string; // Make name optional
}

const ContactItem = ({ title, email, name }: ContactItemProps) => {
  return (
    <div className="flex items-start gap-5">
      <div
        className="w-[20px] h-[20px] rounded-full overflow-hidden"
        style={{
          background:
            "linear-gradient(90deg, #00FFB5 0%, #887BFF 35.94%, #BD3CF0 68.23%, #334AFF 100%)",
        }}
      ></div>
      <div className="flex flex-col gap-5">
        <Text variant={"card_title_small"}>{title}</Text>
        {name && (
          <Text variant={"body"} className="text-neutral">
            {name}
          </Text>
        )}
        <Text variant={"body"} className="text-[#333333]">
          {email}
        </Text>
      </div>
    </div>
  );
};

export default MiddleEastContact;
