import { Text } from "@/src/components/ui/elements/Text";
import React from "react";

const LearningItem = ({
  title,
  content,
  id,
}: {
  title: string;
  content: string;
  id: number;
}) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="border-green-300 flex items-center justify-center border-[0.5px] bg-[#EEFFFC] transform rotate-45 h-[30px] w-[30px] rounded-md">
        <span className="text-primary-600 text-[20px] font-semibold transform -rotate-45 ">
          {id}
        </span>
      </div>
      <Text variant={"card_title_large"} className="text-neutral">
        Structured CPD / Active Learning
      </Text>
      <Text variant={"body"} className="text-[#454545]">
        Structured CPD typically involves interactive and participation-based
        study. It is often proactive and can include attending training courses,
        workshops, seminars, conferences, eLearning courses or CPD certified
        events. CPD active learning can also apply to professionals taking
        career-orientated exams, however the study and revision would be
        considered self-directed learning.
      </Text>
    </div>
  );
};

export default LearningItem;
