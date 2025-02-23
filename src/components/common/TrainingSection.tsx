import SectionTitle from "@/src/components/common/SectionTitle";
import { Icon } from "@/src/components/ui/elements/Icon";
import Link from "@/src/components/ui/elements/Link";
import React from "react";
import EventCard from "./EventCard";

interface EventData {
  id: string | number;
  title: string;
  topic: string;
  location: string;
  date: string;
  isFree: boolean;
  membersOnly: boolean;
  backgroundImage?: string;
}

interface TrainingSectionProps {
  events: EventData[];
  viewMoreLink?: string;
  title?: string;
}

const TrainingSection: React.FC<TrainingSectionProps> = ({
  events,
  viewMoreLink = "/",
  title = "EMCC ME Events",
}) => {
  return (
    <div className="flex flex-col gap-12">
      {/* Section Title */}
      <SectionTitle title={title} />

      {/* Event Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {events.length > 0 ? (
          events.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              topic={event.topic}
              location={event.location}
              date={event.date}
              isFree={event.isFree}
              membersOnly={event.membersOnly}
              backgroundImage={event.backgroundImage}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No events available
          </p>
        )}
      </div>

      {/* View More Link */}
      <div className="flex justify-end">
        <Link
          icon={<Icon name="east" className="text-[20px]" />}
          href={viewMoreLink}
          iconPosition="right"
          className="flex items-center gap-2.5 text-primary-600"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default TrainingSection;
