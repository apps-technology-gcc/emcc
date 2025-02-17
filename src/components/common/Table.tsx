"use client";
import React from "react";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  ColumnDef,
} from "@tanstack/react-table";
import { Icon } from "../ui/elements/Icon";
import { cn } from "@/src/lib/utils";
import { Text, textVariants } from "../ui/elements/Text";
import Tag from "../ui/elements/Tags";

interface TableProps<T> {
  data: T[];
  columns: ColumnDef<T, any>[];
}

const Table = <T extends object>({ data, columns }: TableProps<T>) => {
  // Create a table instance with sorting
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="w-full rounded-tl-md border-b-0 rounded-tr-md border border-border">
      <table className="w-full overflow-hidden rounded-tl-md rounded-tr-md ">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header, index) => (
                <th
                  style={{
                    width: header.getSize(),
                    position: "relative",
                  }}
                  key={header.id}
                  className={cn(
                    "h-16 px-4 border-b  border-border border-l bg-primary-100 text-left font-semibold text-gray-700",
                    index == 0 && "border-l-0 "
                  )}
                  onClick={header.column.getToggleSortingHandler()} // Add sorting on click
                >
                  <div className="flex items-center gap-2">
                    <Text
                      variant={"card_title_small"}
                      className="text-[#222222] text-center"
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </Text>

                    {/* Sorting icons */}
                    {header.column.getCanSort() && (
                      <span>
                        {header.column.getIsSorted() === "asc" ? (
                          <Icon
                            name="arrow_drop_down"
                            className="text-[24px]"
                          />
                        ) : header.column.getIsSorted() === "desc" ? (
                          <Icon
                            name="arrow_drop_down"
                            className="text-[24px]"
                          />
                        ) : (
                          <Icon
                            name="arrow_drop_down"
                            className="text-[24px]"
                          />
                        )}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, index) => (
            <tr key={row.id} className=" transition-colors">
              {row.getVisibleCells().map((cell, index) => (
                <td
                  key={cell.id}
                  className={cn(
                    "h-12 px-4 border  border-r-0 border-border text-gray-600",
                    index == 0 && "border-l-0 "
                  )}
                >
                  <Text variant={"body"} className="text-[#222222]">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Text>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
