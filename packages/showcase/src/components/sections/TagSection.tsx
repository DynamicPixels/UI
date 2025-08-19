import React from "react";
import { Tag } from "@dynamicpixels/dynamicui";
import CodeBlock from "../CodeBlock";

const TagSection = () => {
  return (
    <section id="tag" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6">Tag</h2>
      <div className="border-b">
        <p className="text-gray-600 mb-6">
          Tags are used for categorizing, labeling, and organizing content.
        </p>

        <h3 className="text-lg font-semibold mb-4">Examples</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-md font-medium mb-3">Basic Tags</h4>
            <div className="flex flex-wrap gap-3 mb-4">
              <Tag>Default</Tag>
              <Tag color="blue">Blue</Tag>
              <Tag color="green">Green</Tag>
              <Tag color="red">Red</Tag>
              <Tag color="orange">Orange</Tag>
            </div>
            <CodeBlock language="tsx" title="Basic Tags">
              {`<Tag>Default</Tag>
<Tag color="blue">Blue</Tag>
<Tag color="green">Green</Tag>
<Tag color="red">Red</Tag>
<Tag color="orange">Orange</Tag>`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">Closable Tags</h4>
            <div className="flex flex-wrap gap-3 mb-4">
              <Tag closable>Closable</Tag>
              <Tag color="blue" closable>
                Blue Closable
              </Tag>
              <Tag color="green" closable>
                Green Closable
              </Tag>
            </div>
            <CodeBlock language="tsx" title="Closable Tags">
              {`<Tag closable>Closable</Tag>
<Tag color="blue" closable>Blue Closable</Tag>
<Tag color="green" closable>Green Closable</Tag>`}
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
                  color
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  'default' | 'blue' | 'green' | 'red' | 'orange'
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  'default'
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Color theme of the tag
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  closable
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  boolean
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  false
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Whether the tag can be closed
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  onClose
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {"() => void"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  -
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Callback when tag is closed
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TagSection;
