"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Icon } from "../ui/elements/Icon";
import { Text } from "../ui/elements/Text";
import { cn } from "@/src/lib/utils";
// @ts-ignore
const OrgChart = dynamic<any>(() => import("@dabeng/react-orgchart"), {
  ssr: false,
  loading: () => <span>Loading...</span>,
});

const data = {
  id: "1",
  name: "President",
  title: "CEO",
  type: "root",
  children: [
    {
      type: "children_1",
      id: "2",
      name: "Board Secretary",
      title: "Secretary",
    },
    {
      type: "children_1",
      id: "3",
      name: "Executive Director",
      title: "Strategy & Compliance",
      children: [
        {
          type: "children_2",
          id: "4",
          name: "Regional Strategy",
          title: "Strategy Lead",
          children: [
            {
              type: "children_3",
              id: "5",
              name: "Membership & Benefits",
              title: "Strategy Lead",
            },
            {
              type: "children_3",
              id: "6",
              name: "Events",
              title: "Operations Manager",
            },
            {
              type: "children_3",
              id: "7",
              name: "Marketing, Brand & Communication",
              title: "Compliance Head",
            },
          ],
        },
        {
          type: "children_2",
          id: "8",
          name: "Regional SOP",
          title: "Operations Manager",
        },
        {
          type: "children_2",
          id: "9",
          name: "Accreditation & Standards",
          title: "Compliance Head",
        },
      ],
    },
    {
      type: "children_1",
      id: "10",
      name: "Executive Director",
      title: "Community & Development",
      children: [
        {
          type: "children_2",
          id: "11",
          name: "Professional Ethics",
          title: "Ethics Head",
        },
        {
          type: "children_2",
          id: "12",
          name: "Culture & Inclusion",
          title: "HR Lead",
        },
        {
          type: "children_2",
          id: "13",
          name: "Community Outreach",
          title: "Community Manager",
        },
      ],
    },
  ],
};
export default function OrgChartComponent() {
  const chartRef = useRef<any>(null);
  const [mounted, setMounted] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const handleZoomIn = () => {
    const newZoom = Math.min(2, zoomLevel + 0.1);
    setZoomLevel(newZoom);
    const chart = document.getElementsByClassName("my-chart")[0] as HTMLElement;
    if (chart) {
      chart.style.transform = `scale(${newZoom})`;
    }
  };

  const handleZoomOut = () => {
    const newZoom = Math.max(0.6, zoomLevel - 0.1);
    setZoomLevel(newZoom);
    const chart = document.getElementsByClassName("my-chart")[0] as HTMLElement;
    if (chart) {
      chart.style.transform = `scale(${newZoom})`;
    }
  };

  const handleFitToScreen = () => {
    const chart = document.getElementsByClassName("my-chart")[0] as HTMLElement;
    const container = chart.parentElement;

    if (chart && container) {
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;
      const chartWidth = chart.scrollWidth;
      const chartHeight = chart.scrollHeight;

      const scaleX = containerWidth / chartWidth;
      const scaleY = containerHeight / chartHeight;
      const scale = Math.min(scaleX, scaleY, 1);

      setZoomLevel(scale);
      chart.style.transform = `scale(${scale})`;
    }
  };

  useEffect(() => {
    if (!mounted) return;

    const style = document.createElement("style");
    style.textContent = `
    .orgchart {
        background: transparent !important;
    }
   
      
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, [mounted]);

  return mounted ? (
    <div className="relative min-h-[500px] w-full">
      <div className="w-full h-full">
        <div className="absolute right-5 top-5 h-8 rounded-md overflow-hidden border-border border-[0.5px]  flex z-50 items-center">
          <Icon
            onClick={() => handleZoomOut()}
            name="remove_circle_outline"
            className="text-[20px] px-2.5 cursor-pointer"
          />
          <Text
            onClick={() => handleFitToScreen()}
            variant={"button"}
            className="px-2.5 text-[#191919] cursor-pointer border-l border-r border-border h-full flex items-center"
          >
            Fit to Screen
          </Text>

          <Icon
            onClick={() => handleZoomIn()}
            name="add_circle_outline"
            className="text-[20px] px-2.5 cursor-pointer"
          />
        </div>
        <OrgChart
          ref={chartRef}
          datasource={data}
          pan={true}
          NodeTemplate={(data: any) => {
            console.log("Data", data);
            return (
              <div
                className={cn(
                  "flex  flex-col rounded-md overflow-hidden gap-1.5",
                  (() => {
                    switch (data.nodeData.type) {
                      case "root":
                        return "bg-primary-600";
                      case "children_1":
                        return "bg-primary-500";
                      case "children_2":
                        return "bg-primary-400";
                      case "children_3":
                        return "bg-primary-300 text-white";
                      default:
                        return "bg-primary-200";
                    }
                  })()
                )}
              >
                <Text
                  variant={"small"}
                  className={cn(
                    "px-2.5 text-center py-[16px]  text-white",
                    data.nodeData.type == "children_3" ||
                      data.nodeData.type == "children_4"
                      ? "text-black"
                      : "text-white"
                  )}
                >
                  {data.nodeData.name}
                </Text>
              </div>
            );
          }}
          zoom={true}
          nodeTitle="name"
          nodeContent="title"
          chartClass="my-chart"
          multipleSelect={false}
          collapsible={false}
        />
      </div>
    </div>
  ) : null;
}
