import Image from "next/image";
import React from "react";
import slogan from "@/public/slogan.svg";
import { Text } from "@/src/components/ui/elements/Text";
import { Button } from "@/src/components/ui/elements/Button";
import Link from "@/src/components/ui/elements/Link";
import Marquee from "react-fast-marquee";
const ServiceSection = () => {
  return (
    //     background: radial-gradient(131.18% 258.14% at -8.43% -6%, #FEFCFF 12.54%, #9647FE 41.57%, #887BFF 69.45%, #EEDEF3 94.27%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    // linear-gradient(180deg, rgba(255, 255, 255, 0) 31.49%, #FFFFFF 92.39%);

    <div className="bg-[radial-gradient(131.18%_258.14%_at_-8.43%_-6%,#FEFCFF_12.54%,#9647FE_41.57%,#887BFF_69.45%,#EEDEF3_94.27%)] bg-[linear-gradient(180deg,rgba(255,255,255,0)_31.49%,#FFFFFF_92.39%)]">
      <div className="container">
        <div className="py-24">
          <Marquee className="grid grid-cols-2 gap-x-8 gap-y-5">
            <div className="grid max-w-[1170px] gap-x-8 gap-y-5 grid-cols-3">
              <div className="flex flex-col bg-white p-5 gap-5 rounded-md">
                <Image alt="Slogan" src={slogan} width={42} height={42} />
                <Text className="text-[#000000]" variant="card_title_large">
                  Coaching
                </Text>
                <Text className="text-[#454545]" variant="body">
                  EMCC ME provides a wide range of services and activities for
                  new and existing coaches.
                </Text>
                <Link href="#" icon="east" iconPosition="right">
                  Reade More
                </Link>
              </div>
              <div className="flex flex-col bg-white p-5 gap-5 rounded-md">
                <Image alt="Slogan" src={slogan} width={42} height={42} />
                <Text className="text-[#000000]" variant="card_title_large">
                  Coaching
                </Text>
                <Text className="text-[#454545]" variant="body">
                  EMCC ME provides a wide range of services and activities for
                  new and existing coaches.
                </Text>
                <Link href="#" icon="east" iconPosition="right">
                  Reade More
                </Link>
              </div>
              <div className="flex flex-col bg-white p-5 gap-5 rounded-md">
                <Image alt="Slogan" src={slogan} width={42} height={42} />
                <Text className="text-[#000000]" variant="card_title_large">
                  Coaching
                </Text>
                <Text className="text-[#454545]" variant="body">
                  EMCC ME provides a wide range of services and activities for
                  new and existing coaches.
                </Text>
                <Link href="#" icon="east" iconPosition="right">
                  Reade More
                </Link>
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
