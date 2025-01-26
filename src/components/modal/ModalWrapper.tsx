"use client";

import React, { FC } from "react";
import { createPortal } from "react-dom";
import { Icon } from "../ui/elements/Icon";
interface ModalWrapperProps {
  children: React.ReactNode;
  closeModal: () => void;
  isOpen: boolean;
}

const ModalWrapper: FC<ModalWrapperProps> = ({
  children,
  isOpen,
  closeModal,
}) => {
  const handleCloseModal = () => {
    closeModal();
  };
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (isOpen == false) return null;
  return mounted
    ? createPortal(
        <div className="fixed  overflow-y-auto items-center justify-center top-0 left-0 z-50 w-full h-full">
          <div
            onClick={handleCloseModal}
            className="fixed opacity-10 flex items-center justify-center top-0 left-0 -z-10 w-full h-full bg-black"
          ></div>
          <div
            onClick={handleCloseModal}
            className="my-10 md:my-20  flex justify-center overflow-y-auto"
          >
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="z-50 w-full sm:w-auto"
            >
              <div className="max-w-[800px] min-w-[320px] xl:min-w-[450px] p-12 bg-white relative">
                <Icon
                  onClick={handleCloseModal}
                  className="absolute text-[24px] text-neutralDark cursor-pointer right-5 top-5"
                  name="close"
                />
                {children}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;
};

export default ModalWrapper;
