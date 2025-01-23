import * as React from "react";
import FilingTableHeader from "./FilingTableHeader";
import FilingRow from "./FilingRow";
import { FilingRowData } from "@/src/types";

function FilingsTable() {
  const filingData: FilingRowData[] = [
    {
      type: "8-K",
      description: "Current Report Filing",
      date: "24 Nov 2023",
      previewUrl:
        "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/b72e9efcb8e886490377bf82d1cd8d56edfeeebc0bb1e496c021f1533cd70ac8?apiKey=7d86919144c846178294e9d8a4321223&",
    },
    {
      type: "8-K",
      description: "Foundation",
      date: "24 Nov 2023",
      previewUrl:
        "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/b72e9efcb8e886490377bf82d1cd8d56edfeeebc0bb1e496c021f1533cd70ac8?apiKey=7d86919144c846178294e9d8a4321223&",
    },
    {
      type: "8-K",
      description: "Foundation",
      date: "24 Nov 2023",
      previewUrl:
        "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/b72e9efcb8e886490377bf82d1cd8d56edfeeebc0bb1e496c021f1533cd70ac8?apiKey=7d86919144c846178294e9d8a4321223&",
    },
    {
      type: "8-K",
      description: "Foundation",
      date: "24 Nov 2023",
      previewUrl:
        "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/b72e9efcb8e886490377bf82d1cd8d56edfeeebc0bb1e496c021f1533cd70ac8?apiKey=7d86919144c846178294e9d8a4321223&",
    },
    {
      type: "8-K",
      description: "Foundation",
      date: "24 Nov 2023",
      previewUrl:
        "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/b72e9efcb8e886490377bf82d1cd8d56edfeeebc0bb1e496c021f1533cd70ac8?apiKey=7d86919144c846178294e9d8a4321223&",
    },
  ];

  return (
    <div
      className="flex overflow-hidden flex-col max-w-[736px]"
      role="table"
      aria-label="Filings Table"
    >
      <FilingTableHeader />
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          {filingData.map((filing, index) => (
            <FilingRow key={index} data={filing} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilingsTable;
