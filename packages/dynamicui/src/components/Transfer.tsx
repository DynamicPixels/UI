"use client";

import React from "react";
import { cn } from "../utils/cn";
import Input from "./Input";
import Button from "./Button";
import CheckBox from "./CheckBox";
import {
  SearchOutlined,
  LeftOutlined,
  RightOutlined,
  DeleteOutlined,
} from "./Icons";

export interface TransferItem {
  key: string;
  label: string;
  disabled?: boolean;
}

export interface TransferProps {
  dataSource: TransferItem[];
  targetKeys: string[];
  onChange?: (targetKeys: string[]) => void;
  titles?: [string, string];
  oneWay?: boolean;
  className?: string;
}

const Transfer: React.FC<TransferProps> = ({
  dataSource,
  targetKeys,
  onChange,
  titles = ["Source", "Target"],
  oneWay = false,
  className,
}) => {
  const [sourceSelected, setSourceSelected] = React.useState<string[]>([]);
  const [targetSelected, setTargetSelected] = React.useState<string[]>([]);
  const [sourceSearch, setSourceSearch] = React.useState("");
  const [targetSearch, setTargetSearch] = React.useState("");

  const sourceList = dataSource.filter(
    (item) =>
      !targetKeys.includes(item.key) &&
      item.label.toLowerCase().includes(sourceSearch.toLowerCase()),
  );
  const targetList = dataSource.filter(
    (item) =>
      targetKeys.includes(item.key) &&
      item.label.toLowerCase().includes(targetSearch.toLowerCase()),
  );

  const moveToTarget = () => {
    const newKeys = [
      ...targetKeys,
      ...sourceSelected.filter((k) => !targetKeys.includes(k)),
    ];
    onChange?.(newKeys);
    setSourceSelected([]);
  };
  const moveToSource = () => {
    const newKeys = targetKeys.filter((k) => !targetSelected.includes(k));
    onChange?.(newKeys);
    setTargetSelected([]);
  };

  return (
    <div className={cn("flex gap-2", className)}>
      {/* Source Panel */}
      <div className="bg-[#F7F9FA] border border-[#D2D7D9] rounded-[16px] flex flex-col w-64 min-h-[320px]">
        {/* Header */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-[rgba(0,0,0,0.06)]">
          <div className="flex items-center gap-2">
            <CheckBox
              checked={
                sourceSelected.length === sourceList.length &&
                sourceList.length > 0
              }
              indeterminate={
                sourceSelected.length > 0 &&
                sourceSelected.length < sourceList.length
              }
              onChange={(checked) =>
                setSourceSelected(checked ? sourceList.map((i) => i.key) : [])
              }
              disabled={sourceList.length === 0}
            />
            <span className=" text-[14px] text-[rgba(0,0,0,0.88)]">
              {titles[0]}
            </span>
          </div>
          <span className="text-xs text-[rgba(0,0,0,0.88)]">
            {sourceSelected.length}/{sourceList.length} items
          </span>
        </div>
        {/* Search */}
        <div className="p-3">
          <Input
            size="default"
            placeholder="Search here"
            startIcon={
              <SearchOutlined className="w-4 h-4 text-[rgba(0,0,0,0.45)]" />
            }
            value={sourceSearch}
            onChange={(e) => setSourceSearch(e.target.value)}
            className="rounded-[16px] border border-[#D2D7D9] bg-[#F7F9FA]"
          />
        </div>
        {/* List */}
        <div className="flex-1 overflow-auto">
          {sourceList.map((item) => (
            <div
              key={item.key}
              className={cn(
                "flex items-center px-3 py-2 gap-2 hover:bg-[rgba(0,0,0,0.04)] transition",
                sourceSelected.includes(item.key) && "bg-[#E6F4FF]",
              )}
            >
              <CheckBox
                checked={sourceSelected.includes(item.key)}
                onChange={(checked) =>
                  setSourceSelected((prev) =>
                    checked
                      ? [...prev, item.key]
                      : prev.filter((k) => k !== item.key),
                  )
                }
                disabled={item.disabled}
              />
              <span className=" text-[14px] text-[rgba(0,0,0,0.88)]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
        {/* Footer */}
        <div className="flex justify-end p-2 border-t border-[rgba(240,240,240,1)]">
          <Button
            size="small"
            icon={<SearchOutlined className="w-4 h-4" />}
            onClick={() => setSourceSearch("")}
            className="rounded-[16px] border border-[#D2D7D9] bg-[#F7F9FA] shadow-[0px_2px_0px_0px_rgba(0,0,0,0.02)]"
          >
            Left button reload
          </Button>
        </div>
      </div>
      {/* Controls */}
      <div className="flex flex-col justify-center gap-2">
        <Button
          size="small"
          icon={<RightOutlined className="w-4 h-4" />}
          onClick={moveToTarget}
          disabled={sourceSelected.length === 0}
          className="rounded-full bg-[rgba(0,0,0,0.04)] border border-[#D2D7D9] w-9 h-9"
        />
        {!oneWay && (
          <Button
            size="small"
            icon={<LeftOutlined className="w-4 h-4" />}
            onClick={moveToSource}
            disabled={targetSelected.length === 0}
            className="rounded-full bg-[rgba(0,0,0,0.04)] border border-[#D2D7D9] w-9 h-9"
          />
        )}
      </div>
      {/* Target Panel */}
      <div className="bg-[#F7F9FA] border border-[#D2D7D9] rounded-[16px] flex flex-col w-64 min-h-[320px]">
        {/* Header */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-[rgba(0,0,0,0.06)]">
          <div className="flex items-center gap-2">
            <CheckBox
              checked={
                targetSelected.length === targetList.length &&
                targetList.length > 0
              }
              indeterminate={
                targetSelected.length > 0 &&
                targetSelected.length < targetList.length
              }
              onChange={(checked) =>
                setTargetSelected(checked ? targetList.map((i) => i.key) : [])
              }
              disabled={targetList.length === 0}
            />
            <span className=" text-[14px] text-[rgba(0,0,0,0.88)]">
              {titles[1]}
            </span>
          </div>
          <span className="text-xs text-[rgba(0,0,0,0.88)]">
            {targetSelected.length}/{targetList.length} items
          </span>
        </div>
        {/* Search */}
        <div className="p-3">
          <Input
            size="default"
            placeholder="Search here"
            startIcon={
              <SearchOutlined className="w-4 h-4 text-[rgba(0,0,0,0.45)]" />
            }
            value={targetSearch}
            onChange={(e) => setTargetSearch(e.target.value)}
            className="rounded-[16px] border border-[#D2D7D9] bg-[#F7F9FA]"
          />
        </div>
        {/* List */}
        <div className="flex-1 overflow-auto">
          {targetList.map((item) => (
            <div
              key={item.key}
              className={cn(
                "flex items-center px-3 py-2 gap-2 hover:bg-[rgba(0,0,0,0.04)] transition",
                targetSelected.includes(item.key) && "bg-[#E6F4FF]",
              )}
            >
              <CheckBox
                checked={targetSelected.includes(item.key)}
                onChange={(checked) =>
                  setTargetSelected((prev) =>
                    checked
                      ? [...prev, item.key]
                      : prev.filter((k) => k !== item.key),
                  )
                }
                disabled={item.disabled}
              />
              <span className=" text-[14px] text-[rgba(0,0,0,0.88)]">
                {item.label}
              </span>
              <button
                className="ml-auto text-[rgba(0,0,0,0.45)] hover:text-red-500"
                onClick={() => {
                  const newKeys = targetKeys.filter((k) => k !== item.key);
                  onChange?.(newKeys);
                  setTargetSelected((prev) =>
                    prev.filter((k) => k !== item.key),
                  );
                }}
              >
                <DeleteOutlined className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
        {/* Footer */}
        <div className="flex justify-end p-2 border-t border-[rgba(240,240,240,1)]">
          <Button
            size="small"
            icon={<SearchOutlined className="w-4 h-4" />}
            onClick={() => setTargetSearch("")}
            className="rounded-[16px] border border-[#D2D7D9] bg-[#F7F9FA] shadow-[0px_2px_0px_0px_rgba(0,0,0,0.02)]"
          >
            Right button reload
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
