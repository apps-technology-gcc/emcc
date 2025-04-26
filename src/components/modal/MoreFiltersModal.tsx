import React from "react";
import Modal from "./ModalWrapper";
import { Text } from "../ui/elements/Text";
import SuccessGif from "@/public/success.gif";
import Image from "next/image";
import { Button } from "../ui/elements/Button";
import Divider from "../ui/elements/Divider";
import Checkbox from "../ui/elements/form/Checkbox";
const MoreFilters = () => {
  return (
    <>
      <Modal isOpen={true} closeModel={() => {}}>
        <div className="flex h-[739px] overflow-y-auto flex-col gap-5 items-center justify-center">
          <Text variant={"card_title_large"} className="px-2.5">
            More Filters
          </Text>

          <Divider />
          <div className="flex flex-col gap-2.5 ">
            <Text variant={"card_title_large"} className="px-2.5">
              Work Type
            </Text>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="p-2.5">
                <Checkbox id="onsite" name="onsite" label="Onsite" />
              </div>
              <div className="p-2.5">
                <Checkbox id="hybrid" name="hybrid" label="Hybrid" />
              </div>
              <div className="p-2.5">
                <Checkbox id="remote" name="remote" label="Remote" />
              </div>
            </div>
          </div>
          <Divider />
          <div className="flex flex-col gap-2.5 ">
            <Text variant={"card_title_large"} className="px-2.5">
              Career Level
            </Text>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="p-2.5">
                <Checkbox
                  id="subject-matter-expert"
                  name="subject-matter-expert"
                  label="Subject Matter Expert"
                />
              </div>
              <div className="p-2.5">
                <Checkbox
                  id="senior-management"
                  name="senior-management"
                  label="Senior Management"
                />
              </div>
              <div className="p-2.5">
                <Checkbox
                  id="board-advisory"
                  name="board-advisory"
                  label="Board Advisory Level"
                />
              </div>
              <div className="p-2.5">
                <Checkbox
                  id="middle-management"
                  name="middle-management"
                  label="Middle Management"
                />
              </div>
              <div className="p-2.5">
                <Checkbox
                  id="executive-management"
                  name="executive-management"
                  label="Executive Management (C-Suite)"
                />
              </div>
              <div className="p-2.5">
                <Checkbox
                  id="junior-management"
                  name="junior-management"
                  label="Junior Management"
                />
              </div>
              <div className="p-2.5">
                <Checkbox
                  id="executive-director"
                  name="executive-director"
                  label="Executive Director"
                />
              </div>
              <div className="p-2.5">
                <Checkbox
                  id="specialist"
                  name="specialist"
                  label="Specialist"
                />
              </div>
            </div>
          </div>
          <Divider />
          <div className="flex flex-col gap-2.5 ">
            <Text variant={"card_title_large"} className="px-2.5">
              Work Type
            </Text>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="p-2.5">
                <Checkbox
                  id="internal-coach"
                  name="internal-coach"
                  label="Internal Coach - Full Time / Part Time"
                />
              </div>
              <div className="p-2.5">
                <Checkbox
                  id="external-coach"
                  name="external-coach"
                  label="Independent - External Coach"
                />
              </div>
              <div className="p-2.5">
                <Checkbox
                  id="professional-services"
                  name="professional-services"
                  label="Professional Services / Consultancy"
                />
              </div>
              <div className="p-2.5">
                <Checkbox
                  id="apprenticeship"
                  name="apprenticeship"
                  label="Apprenticeship"
                />
              </div>
            </div>
          </div>
          <Divider />
          <div className="flex flex-col gap-2.5 ">
            <Text variant={"card_title_large"} className="px-2.5">
              Work Type
            </Text>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="p-2.5">
                <Checkbox
                  id="individual-client"
                  name="individual-client"
                  label="Individual Client"
                />
              </div>
              <div className="p-2.5">
                <Checkbox
                  id="corporate-client"
                  name="corporate-client"
                  label="Corporate Client"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full flex items-center justify-between gap-5">
          <Text variant={"button"} className="cursor-pointer">
            Reset
          </Text>
          <Text variant={"button"} className="text-primary-600 cursor-pointer">
            Apply Filter
          </Text>
        </div>
      </Modal>
    </>
  );
};

export default MoreFilters;
