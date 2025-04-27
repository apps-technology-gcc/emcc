"use client";
import React, { useRef, useState } from "react";
import Section from "@/src/components/layout/Section";
import TextContentSection from "@/src/components/common/TextContentSection";
import { Text, textVariants } from "@/src/components/ui/elements/Text";
import { AccordionList } from "@/src/components/ui/elements/AccordionsList";
import NavLink2 from "@/src/components/ui/elements/NavLink2";
import { Icon } from "@/src/components/ui/elements/Icon";
import { cn } from "@/src/lib/utils";
import { AccordionMenuList } from "@/src/components/ui/elements/AccordionsMenuList";
import SidebarMenu from "@/src/components/common/SideBarMenu";
import Breadcrumb from "@/src/components/common/Breadcrumb";
import Breadcrumbs from "@/src/components/ui/elements/Breadcrumbs";
import Tag from "@/src/components/ui/elements/Tags";
import Divider from "@/src/components/ui/elements/Divider";
import Banner from "@/src/components/common/Banner";
import bgImage from "@/public/event-bg.jpeg";
import NavLink from "@/src/components/ui/elements/NavLink";
import SectionTitle from "@/src/components/common/SectionTitle";

import Link from "@/src/components/ui/elements/Link";
import BulletText from "@/src/components/ui/elements/BulletText";

import IconWithText from "@/components/common/IconWithText";
import { Button } from "@/src/components/ui/elements/Button";
// import Speakers from "@/app/components/Speaker";
import { Input, Label } from "@/src/components/ui/elements/form/Input";
import SearchSelect from "@/src/components/ui/elements/form/SearchSelect";
import Checkbox from "@/src/components/ui/elements/form/Checkbox";
import GoogleIcon from "@/public/google_icon.svg";
import Image from "next/image";
import ArrowIcon from "@/public/arrow_icon.svg";
import Calender from "./components/calender";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
const events = [
  {
    id: 1,
    title:
      "Config 2024: Designing a Better Conference For People Who Build Product",
    topic: "Event Topic",
    location: "Virtual & In Person - San Francisco, CA",
    date: "Friday 30 July, 2024",
    isFree: true,
    membersOnly: false,
    //   backgroundImage: EventBg.src,
  },
  {
    id: 2,
    title: "Next.js Conference 2024",
    topic: "Web Development",
    location: "Virtual",
    date: "Saturday 15 August, 2024",
    isFree: false,
    membersOnly: false,
    //   backgroundImage: EventBg.src,
  },
  {
    id: 3,
    title: "React Summit 2024",
    topic: "Frontend Development",
    location: "Amsterdam, Netherlands",
    date: "Monday 20 September, 2024",
    isFree: true,
    membersOnly: false,
    //   backgroundImage: EventBg.src,
  },
];
const Page = () => {
  const [activeTab, setActiveTab] = useState("All Events");

  const handleChangeTab = (e: Event, tab: string) => {
    e.preventDefault();
    setActiveTab(tab);
  };

  const calendarRef = useRef(null);
  const [events, setEvents] = useState([
    { title: "Config 2024", date: new Date() },
    // Add more events here
  ]);

  const handleDateClick = (arg: any) => {
    // const title = prompt("Enter event title:");
    // if (title) {
    //   setEvents([...events, { title, date: arg.dateStr }]);
    // }
  };

  const [calenderView, setCalenderView] = useState("dayGridMonth");
  const handleCalenderView = (e: any, view: string) => {
    e.preventDefault();
    console.log("view", view);
    setCalenderView(view);
  };
  const [currentMonth, setCurrentMonth] = useState(
    new Date().toLocaleString("default", { month: "long" })
  );

  // Handle external button clicks
  const handlePrevMonth = () => {
    console.log("Clicked", calendarRef);
    if (calendarRef.current) {
      // @ts-ignore
      const calendarApi = calendarRef?.current?.getApi();
      calendarApi.prev(); // Move to the previous month
      updateCurrentMonth(calendarApi);
    }
  };

  const handleNextMonth = () => {
    if (calendarRef.current) {
      // @ts-ignore
      const calendarApi = calendarRef.current.getApi();
      calendarApi.next(); // Move to the next month
      updateCurrentMonth(calendarApi);
    }
  };

  // Update the current month display
  const updateCurrentMonth = (calendarApi: any) => {
    const currentDate = calendarApi.getDate();
    const monthName = currentDate.toLocaleString("default", { month: "long" });
    const year = currentDate.getFullYear();
    setCurrentMonth(`${monthName} ${year}`);
  };

  // When the calendar view changes (e.g., month changes)
  const handleDatesSet = (arg: any) => {
    updateCurrentMonth(arg.view.calendar);
  };
  const dayHeaderFormat = {
    weekday: "short", // This will show abbreviated weekday names
  };
  return (
    <>
      <Banner bgImage={bgImage.src}>
        <div className="flex flex-col gap-16">
          <div className="max-w-[763px] flex flex-col gap-12">
            <Text
              font={"tinos"}
              variant={"h1_page_title"}
              className="uppercase text-white"
            >
              Training & Events
            </Text>
            <Text variant={"body"} className="text-white">
              Training with EMCC will develop your practical knowledge and
              skills in Coaching, Mentoring & Supervision. Our best in class
              programmes are led by recognised industry experts and mapped
              against the our global standard competency frameworks.
            </Text>
          </div>
          <div className="flex flex-col gap-2.5">
            {/* <Tag
              variant={"tag2"}
              style={"style1"}
              className="!bg-pink-200 max-w-fit"
            >
              Members Only
            </Tag> */}
            <div className="flex items-center gap-2.5">
              <Icon name="event_note" className="text-[24px]  text-white" />
              <Text variant={"card_title_small"} className="text-white">
                Friday, 9th November, 2021
              </Text>
            </div>
            <div className="flex items-center gap-2.5">
              <Icon name="schedule" className="text-[24px]  text-white" />
              <Text variant={"card_title_small"} className="text-white">
                7:00 am to 2:00pm EDT
              </Text>
            </div>
            <div className="flex items-center gap-2.5">
              <Icon name="location_on" className="text-[24px] text-white" />
              <Text variant={"card_title_small"} className="text-white">
                Friday, 9th November, 2021
              </Text>
            </div>
          </div>
        </div>
      </Banner>
      <Breadcrumb>
        <Breadcrumbs
          list={[
            {
              name: "Event Calendar 2024-25",
              href: "/",
            },
          ]}
        />
      </Breadcrumb>

      <Section bgColor="white">
        <div className="flex flex-col gap-12">
          <div className="flex items-center gap-8">
            <NavLink
              variant={"navlink-1"}
              href="/"
              className={cn(
                activeTab === "All Events" ? " border-primary-600" : ""
              )}
            >
              All Events
            </NavLink>
            <NavLink
              variant={"navlink-1"}
              href="/"
              onClick={() => setActiveTab("Disqualified Coaches")}
              className={cn(
                activeTab === "Disqualified Coaches"
                  ? " border-primary-600"
                  : ""
              )}
            >
              In Person Events
            </NavLink>
            <NavLink
              variant={"navlink-1"}
              href="/"
              onClick={() => setActiveTab("Inactive Coaches")}
              className={cn(
                activeTab === "Inactive Coaches" ? " border-primary-600" : ""
              )}
            >
              Virtual Events
            </NavLink>
          </div>
          <div className="flex items-center w-full justify-between gap-5">
            <SectionTitle title="Events 2024-25" />
            <div className="flex items-center gap-12">
              <div className="flex items-center gap-8">
                <NavLink
                  variant={"navlink-1"}
                  href="/"
                  onClick={(e) => handleCalenderView(e, "dayGridMonth")}
                  className={cn(
                    calenderView === "dayGridMonth" ? " border-primary-600" : ""
                  )}
                >
                  Month
                </NavLink>
                <NavLink
                  variant={"navlink-1"}
                  href="/"
                  onClick={(e) => handleCalenderView(e, "timeGridWeek")}
                  className={cn(
                    calenderView === "timeGridWeek" ? " border-primary-600" : ""
                  )}
                >
                  Week
                </NavLink>
                <NavLink
                  variant={"navlink-1"}
                  href="/"
                  onClick={(e) => handleCalenderView(e, "timeGridDay")}
                  className={cn(
                    calenderView === "timeGridDay" ? " border-primary-600" : ""
                  )}
                >
                  Day
                </NavLink>
              </div>
              <div className="flex items-center gap-5">
                <Text variant={"section_title"} className="uppercase">
                  {currentMonth.split(" ")[0]}
                </Text>
                <div
                  onClick={() => handlePrevMonth()}
                  className="h-6 w-6 flex items-center justify-center border-primary-600 border"
                >
                  <Image
                    src={ArrowIcon}
                    width={9}
                    height={14}
                    className="w-auto"
                    alt="arrow"
                  />
                </div>
                <div
                  onClick={() => handleNextMonth()}
                  className="h-6 w-6 flex items-center justify-center border-primary-600 border"
                >
                  <Image
                    src={ArrowIcon}
                    width={9}
                    height={14}
                    className="w-auto transform rotate-180"
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
          </div>
          <FullCalendar
            ref={calendarRef}
            plugins={[
              dayGridPlugin,
              interactionPlugin,
              timeGridPlugin,
              listPlugin,
            ]}
            // Custom day header formatting
            dayHeaderFormat={{ weekday: "short" }}
            // Custom header styling
            dayHeaderClassNames={`h-[50px] leading-[50px] bg-[#F0F3FE] ${textVariants(
              {
                variant: "card_title_small",
              }
            )}`}
            // Custom date cell styling
            dayCellClassNames={({ date, isToday, isPast, isFuture }) => [
              "min-h-[106px] !p-1 border relative",
              textVariants({
                variant: "card_title_small",
              }),
              "hover:bg-gray-50 transition-colors duration-200",
              isToday ? "bg-blue-50" : "",
              isPast ? "text-gray-400" : "",
              isFuture ? "text-gray-900" : "",
            ]}
            // Additional calendar customization
            headerToolbar={false}
            dayMaxEvents={3}
            moreLinkContent={(args) => `+${args.num} more`}
            eventClassNames="px-2 py-1 rounded-md text-sm font-medium"
            slotLabelFormat={{
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            }}
            initialView={calenderView}
            views={{
              dayGridMonth: {
                // month view
                titleFormat: { month: "long", year: "numeric" },
                dayMaxEvents: true,
                dayMaxEventRows: 3,
                type: "dayGridMonth",
              },
              timeGridWeek: {
                // week view
                titleFormat: { month: "long", day: "numeric" },
                slotMinTime: "08:00:00",
                slotMaxTime: "20:00:00",
                allDaySlot: false,
                type: "timeGridWeek",
              },
              timeGridDay: {
                // day view
                titleFormat: { month: "long", day: "numeric" },
                slotMinTime: "08:00:00",
                slotMaxTime: "20:00:00",
                allDaySlot: false,
                type: "timeGridDay",
              },
            }}
            viewDidMount={(info) => {
              const calendarApi = info.view.calendar;
              calendarApi.changeView(calenderView);
              setCalenderView(info.view.type);
            }}
            events={events}
            dateClick={handleDateClick}
          />
        </div>
      </Section>

      <style>{`
      .fc-scrollgrid-liquid {
      border-radius: 10px;
    overflow: hidden;
    border: 0.5px solid #D1D1D1;
      }
    .fc-daygrid-day-frame {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    }
    .fc-daygrid-day-events {
        position: absolute !important; 
        left: 0; 
        bottom: 0;
     
    }
        .fc-daygrid-event-harness {
           background: #EBF0FF;
        }
        // .fc-custom-view {
        //   /* Calendar container */
        //   font-family: ui-sans-serif, system-ui, -apple-system;
        // }
        
        // .fc-header-toolbar {
        //   /* Header toolbar */
        //   margin-bottom: 1.5em !important;
        // }
        
        // .fc-day-header {
        //   /* Day header cells */
        //   text-transform: uppercase;
        //   font-size: 0.875rem;
        //   padding: 0.5rem;
        // }
        
        // .fc-day {
        //   /* Individual day cells */
        //   min-height: 100px;
        //   transition: background-color 0.2s;
        // }
        
        // .fc-day:hover {
        //   background-color: rgba(0, 0, 0, 0.02);
        // }
        
        // .fc-day-number {
        //   /* Day numbers */
        //   font-size: 1rem;
        //   margin: 0.25rem;
        // }
        
        // .fc-today {
        //   /* Today's cell */
        //   background-color: rgba(59, 130, 246, 0.1) !important;
        // }
        
        // .fc-button {
        //   /* Calendar buttons */
        //   background-color: #ffffff !important;
        //   border: 1px solid #e5e7eb !important;
        //   color: #374151 !important;
        //   padding: 0.5rem 1rem !important;
        //   font-weight: 500 !important;
        //   border-radius: 0.375rem !important;
        //   transition: all 0.2s !important;
        // }
        
        // .fc-button:hover {
        //   background-color: #f9fafb !important;
        //   border-color: #d1d5db !important;
        // }
        
        // .fc-button-active {
        //   background-color: #e5e7eb !important;
        //   border-color: #d1d5db !important;
        // }
      `}</style>
    </>
  );
};

export default Page;
