import React, { ChangeEvent, useState } from "react";
import { Button } from "../Button";
import { Input } from "./Input";

interface FileUploadProps {
  onFileSelect?: (file: File) => void;
  accept?: string;
  multiple?: boolean;
}

const AttachFile: React.FC<FileUploadProps> = ({
  onFileSelect,
  accept,
  multiple,
}) => {
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      onFileSelect?.(files[0]);
    }
  };

  return (
    <div className="flex items-center gap-0 ">
      <div className="flex-grow">
        <Input name="file" type="text" placeholder="Attach File" />
      </div>
      <Button className="-ml-2 z-10" variant="default" btnType="secondary">
        Upload
      </Button>
    </div>
  );
};

const Choose: React.FC<FileUploadProps> = ({
  onFileSelect,
  accept,
  multiple,
}) => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      onFileSelect?.(files[0]);
    }
  };

  return (
    <div className="grid grid-cols-12 gap-2.5">
      <input hidden type="file" name="" id="" />
      <div className="col-span-4">
        <Input name="file" type="text" placeholder="Choose a file" />
      </div>
      <div className="col-span-6">
        <Input name="fileName" type="text" placeholder="File Name" />
      </div>
      <div className="col-span-2">
        <Button variant="default" btnType="secondary">
          Reset
        </Button>
      </div>
    </div>
  );
};
// @ts-ignore
const FileUpload: React.FC<FileUploadProps> = ({
  type,

  ...props
}: {
  type: "attach" | "choose";
}) => {
  return (
    <div>
      {type === "attach" ? <AttachFile {...props} /> : <Choose {...props} />}
    </div>
  );
};

export default FileUpload;
