import React from "react";
import { Icon } from "./Icon";
import { Text } from "./Text";

const Toast = () => {
  return (
    <div className="flex p-5 border-primary-600 bg-primary-50 rounded-[4px] items-center gap-2.5">
      <Icon name="info" className="text-primary-600" />
      <Text variant="body">
        If you have a question about Membership, please email the team at:
        info@emccme.org
      </Text>
    </div>
  );
};

export default Toast;
