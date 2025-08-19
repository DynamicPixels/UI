"use client";

import React, { useRef } from "react";
import { cn } from "../utils/cn";
import Button from "./Button";
import { InboxOutlined, PaperClipOutlined, DeleteOutlined } from "./Icons";

export interface UploadFile {
  uid: string;
  name: string;
  status?: "done" | "error" | "uploading";
  url?: string;
}

export interface UploadAreaProps {
  value?: UploadFile[];
  onChange?: (files: UploadFile[]) => void;
  multiple?: boolean;
  className?: string;
}

const UploadArea: React.FC<UploadAreaProps> = ({
  value = [],
  onChange,
  multiple = true,
  className,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    const newFiles: UploadFile[] = Array.from(files).map((file) => ({
      uid: `${file.name}-${file.size}-${file.lastModified}`,
      name: file.name,
      status: "done",
    }));
    onChange?.([...value, ...newFiles]);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const handleRemove = (uid: string) => {
    onChange?.(value.filter((file) => file.uid !== uid));
  };

  return (
    <div className={cn("w-full max-w-lg mx-auto", className)}>
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-4 p-6 border-2 border-dashed border-[#D2D7D9] bg-[rgba(0,0,0,0.02)] rounded-[32px] cursor-pointer transition hover:border-[#1677FF]",
          value.length > 0 && "border-solid",
        )}
        onClick={() => inputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <InboxOutlined className="w-12 h-12 text-[#131414]" />
        <div className="flex flex-col items-center gap-1">
          <span className=" text-[16px] text-[rgba(0,0,0,0.88)] leading-6">
            Click or drag file to this area to upload
          </span>
          <span className=" text-[14px] text-[rgba(0,0,0,0.45)] leading-[1.57]">
            Support for a single or bulk upload.
          </span>
        </div>
        <input
          ref={inputRef}
          type="file"
          multiple={multiple}
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>
      {/* File List */}
      {value.length > 0 && (
        <div className="mt-4 flex flex-col gap-2">
          {value.map((file) => (
            <div
              key={file.uid}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-[8px]",
                file.status === "error"
                  ? "bg-[#F5222D]/10 text-[#F5222D]"
                  : "bg-[#1677FF]/10 text-[#131414]",
              )}
            >
              <PaperClipOutlined
                className={cn(
                  "w-4 h-4",
                  file.status === "error"
                    ? "text-[#F5222D]"
                    : "text-[rgba(0,0,0,0.45)]",
                )}
              />
              <span className=" text-[14px] flex-1 truncate">{file.name}</span>
              <Button
                size="small"
                variant={file.status === "error" ? "danger" : "text"}
                icon={
                  <DeleteOutlined
                    className={cn(
                      "w-4 h-4",
                      file.status === "error"
                        ? "text-[#F5222D]"
                        : "text-[rgba(0,0,0,0.45)]",
                    )}
                  />
                }
                onClick={() => handleRemove(file.uid)}
                className="rounded-full"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UploadArea;
