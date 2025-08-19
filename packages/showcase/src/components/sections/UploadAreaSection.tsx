import React, { useState } from "react";
import { UploadArea, UploadFile } from "@dynamicpixels/dynamicui";
import CodeBlock from "../CodeBlock";

const UploadAreaSection = () => {
  const [files, setFiles] = useState<UploadFile[]>([]);
  const [singleFile, setSingleFile] = useState<UploadFile[]>([]);

  return (
    <section id="uploadarea" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6">UploadArea</h2>
      <div className="border-b">
        <p className="text-gray-600 mb-6">
          Upload file by selecting or dragging files to the area.
        </p>

        <h3 className="text-lg font-semibold mb-4">Examples</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-md font-medium mb-3">
              Basic Upload (Multiple Files)
            </h4>
            <div className="mb-4">
              <UploadArea value={files} onChange={setFiles} multiple={true} />
            </div>
            <CodeBlock language="tsx" title="Basic Upload">
              {`const [files, setFiles] = useState([]);

<UploadArea
  value={files}
  onChange={setFiles}
  multiple={true}
/>`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">Single File Upload</h4>
            <div className="mb-4">
              <UploadArea
                value={singleFile}
                onChange={setSingleFile}
                multiple={false}
              />
            </div>
            <CodeBlock language="tsx" title="Single File Upload">
              {`const [file, setFile] = useState([]);

<UploadArea
  value={file}
  onChange={setFile}
  multiple={false}
/>`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">Custom Styled Upload</h4>
            <div className="mb-4">
              <UploadArea
                value={[]}
                onChange={(files) => console.log("Uploaded files:", files)}
                multiple={true}
                className="border-blue-300 hover:border-blue-400"
              />
            </div>
            <CodeBlock language="tsx" title="Custom Styled Upload">
              {`<UploadArea
  value={files}
  onChange={handleFileChange}
  multiple={true}
  className="border-blue-300 hover:border-blue-400"
/>`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">
              Controlled Upload with Preset Files
            </h4>
            <div className="mb-4">
              <UploadArea
                value={[
                  {
                    uid: "1",
                    name: "example.pdf",
                    status: "done",
                    url: "#",
                  },
                  {
                    uid: "2",
                    name: "image.jpg",
                    status: "done",
                    url: "#",
                  },
                ]}
                onChange={(files) => console.log("Files changed:", files)}
                multiple={true}
              />
            </div>
            <CodeBlock language="tsx" title="Preset Files">
              {`const presetFiles = [
  {
    uid: "1",
    name: "example.pdf",
    status: "done",
    url: "#"
  },
  {
    uid: "2", 
    name: "image.jpg", 
    status: "done",
    url: "#"
  }
];

<UploadArea
  value={presetFiles}
  onChange={handleFileChange}
  multiple={true}
/>`}
            </CodeBlock>
          </div>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-4">API</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Property
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Default
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  value
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  UploadFile[]
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  []
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  List of files that have been uploaded
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  onChange
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  function
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  -
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Callback when file list changes
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  multiple
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  boolean
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  true
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Whether to support selecting multiple files
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  className
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  string
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  -
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Additional CSS class
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className="text-lg font-semibold mt-6 mb-4">
          UploadFile Interface
        </h4>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Property
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  uid
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  string
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Unique identifier for the file
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  name
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  string
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  File name
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  status
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  'done' | 'error' | 'uploading'
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Upload status (optional)
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  url
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  string
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  File URL (optional)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default UploadAreaSection;
