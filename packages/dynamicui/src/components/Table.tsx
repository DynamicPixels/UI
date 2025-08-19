import React from "react";
import { cn } from "../utils/cn";

export interface TableColumn {
  key: string;
  title: React.ReactNode;
  dataIndex?: string;
  render?: (
    value: unknown,
    record: unknown,
    rowIndex: number,
  ) => React.ReactNode;
  width?: number | string;
  align?: "left" | "center" | "right";
  className?: string;
}

export interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
  columns: TableColumn[];
  data: unknown[];
  bordered?: boolean;
  size?: "default" | "middle" | "small";
  header?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

const sizeMap = {
  default: {
    cell: "px-4 py-4 text-[14px]",
    header: "px-4 py-4 text-[14px] font-bold",
  },
  middle: {
    cell: "px-3 py-3 text-[14px]",
    header: "px-3 py-3 text-[14px] font-bold",
  },
  small: {
    cell: "px-2 py-2 text-[14px]",
    header: "px-2 py-2 text-[14px] font-bold",
  },
};

const Table: React.FC<TableProps> = ({
  columns,
  data,
  bordered = false,
  size = "default",
  header,
  footer,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "overflow-x-auto rounded-[16px] bg-[var(--Neutral-gray-12)]",
        bordered
          ? "border border-[var(--Neutral-gray-9)]"
          : "shadow-[0px_1px_2px_0px_rgba(0,0,0,0.03),0px_1px_6px_-1px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.02)]",
        className,
      )}
      {...props}
    >
      {header && (
        <div className="px-4 py-4 border-b border-[var(--Neutral-gray-9)] text-[16px] font-medium text-[var(--Neutral-gray-1)]">
          {header}
        </div>
      )}
      <table className="min-w-full w-full border-separate border-spacing-0">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className={cn(
                  "bg-[var(--Neutral-gray-11)] text-left text-[var(--Neutral-gray-2)] border-b border-[var(--Neutral-gray-9)]",
                  sizeMap[size].header,
                  col.className,
                )}
                style={{ width: col.width, textAlign: col.align }}
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center py-8 text-[var(--Neutral-gray-5)]"
              >
                No Data
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => {
              const record = row as Record<string, unknown>;
              return (
                <tr
                  key={record.key?.toString() || rowIndex}
                  className="border-b border-[var(--Neutral-gray-9)] last:border-b-0 hover:bg-[var(--Neutral-gray-11)] transition-colors"
                >
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className={cn(
                        "text-[var(--Neutral-gray-2)]",
                        sizeMap[size].cell,
                        bordered
                          ? "border-r border-[var(--Neutral-gray-9)] last:border-r-0"
                          : "",
                        col.className,
                      )}
                      style={{ textAlign: col.align }}
                    >
                      {col.render
                        ? col.render(
                            record[col.dataIndex ?? col.key],
                            record,
                            rowIndex,
                          )
                        : React.isValidElement(
                              record[col.dataIndex ?? col.key],
                            ) ||
                            typeof record[col.dataIndex ?? col.key] ===
                              "string" ||
                            typeof record[col.dataIndex ?? col.key] === "number"
                          ? (record[
                              col.dataIndex ?? col.key
                            ] as React.ReactNode)
                          : record[col.dataIndex ?? col.key] !== undefined &&
                              record[col.dataIndex ?? col.key] !== null
                            ? String(record[col.dataIndex ?? col.key])
                            : null}
                    </td>
                  ))}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      {footer && (
        <div className="px-4 py-4 border-t border-[var(--Neutral-gray-9)] text-[14px] text-[var(--Neutral-gray-5)]">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Table;
