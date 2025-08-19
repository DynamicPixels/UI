import React from "react";
import { Button, Empty } from "@dynamicpixels/dynamicui";
import CodeBlock from "../CodeBlock";

const EmptySection = () => {
  return (
    <section id="empty" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6">Empty</h2>
      <div className="border-b">
        <p className="text-gray-600 mb-6">
          Empty state placeholder for empty content areas.
        </p>

        <h3 className="text-lg font-semibold mb-4">Examples</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-md font-medium mb-3">Basic Empty</h4>
            <div className="mb-4">
              <Empty />
            </div>
            <CodeBlock language="tsx" title="Basic Empty">
              {`<Empty />`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">Custom Description</h4>
            <div className="mb-4">
              <Empty description="No items found">
                <Button variant="primary">Create New</Button>
              </Empty>
            </div>
            <CodeBlock language="tsx" title="Custom Description">
              {`<Empty 
  description="No items found"
>
  <Button variant="primary">Create New</Button>
</Empty>`}
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
                  description
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ReactNode
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  'No data'
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Customize description
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  image
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ReactNode
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  -
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Customize image
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default EmptySection;
