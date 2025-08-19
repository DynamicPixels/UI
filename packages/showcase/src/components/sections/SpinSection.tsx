import React from "react";
import { Spin } from "@dynamicpixels/dynamicui";
import CodeBlock from "../CodeBlock";

const SpinSection = () => {
  return (
    <section id="spin" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6">Spin</h2>
      <div className="border-b">
        <p className="text-gray-600 mb-6">
          Loading spinner to indicate busy state of an operation.
        </p>

        <h3 className="text-lg font-semibold mb-4">Examples</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-md font-medium mb-3">Basic Spin</h4>
            <div className="flex flex-wrap gap-6 items-center mb-4">
              <div className="p-4 border rounded-md">
                <Spin size="small" />
              </div>
              <div className="p-4 border rounded-md">
                <Spin size="default" />
              </div>
              <div className="p-4 border rounded-md">
                <Spin size="large" />
              </div>
            </div>
            <CodeBlock language="tsx" title="Basic Spin">
              {`<Spin size="small" />
<Spin size="default" />
<Spin size="large" />`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">Spin with Content</h4>
            <div className="space-y-4 mb-4">
              <div className="p-6 border rounded-md relative">
                <div className="absolute inset-0 bg-white bg-opacity-60 flex items-center justify-center rounded-md">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                </div>
                <p>This content is being loaded...</p>
                <p>More content here...</p>
              </div>
            </div>
            <CodeBlock language="tsx" title="Spin with Content">
              {`<Spin>
  <div>
    <p>This content is being loaded...</p>
    <p>More content here...</p>
  </div>
</Spin>`}
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
                  size
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  'small' | 'default' | 'large'
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  'default'
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Size of the spinning indicator
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  tip
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  string
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  -
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Customize description content when Spin has children
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default SpinSection;
