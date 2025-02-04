import React from "react";
import { Icon } from "./Icon";
import { Text } from "./Text";

const Toast = ({ message }: { message: string }) => {
  return (
    <div className="flex p-5 border-primary-600 bg-primary-50 rounded-[4px] items-center gap-2.5">
      <Icon name="info" className="text-primary-600" />
      <Text variant="body">{message}</Text>
    </div>
  );
};

export default Toast;
