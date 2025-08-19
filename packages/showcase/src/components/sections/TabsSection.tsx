import React from "react";
import { Tabs } from "@dynamicpixels/dynamicui";
import CodeBlock from "../CodeBlock";

const TabsSection = () => {
  return (
    <section id="tabs" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6">Tabs</h2>
      <div className="border-b">
        <p className="text-gray-600 mb-6">
          Tabs organize content across different views, with only one visible at
          a time.
        </p>

        <h3 className="text-lg font-semibold mb-4">Examples</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-md font-medium mb-3">Basic Tabs</h4>
            <div className="mb-4">
              <Tabs
                value="1"
                tabs={[
                  { key: "1", label: "Tab 1" },
                  { key: "2", label: "Tab 2" },
                  { key: "3", label: "Tab 3" },
                ]}
              >
                <div className="p-4">Content of Tab 1</div>
                <div className="p-4">Content of Tab 2</div>
                <div className="p-4">Content of Tab 3</div>
              </Tabs>
            </div>
            <CodeBlock language="tsx" title="Basic Tabs">
              {`<Tabs
  value="1"
  tabs={[
    { key: "1", label: "Tab 1" },
    { key: "2", label: "Tab 2" },
    { key: "3", label: "Tab 3" },
  ]}
>
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</Tabs>`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">Different Sizes</h4>
            <div className="space-y-4 mb-4">
              <Tabs
                size="small"
                value="1"
                tabs={[
                  { key: "1", label: "Small Tab 1" },
                  { key: "2", label: "Small Tab 2" },
                ]}
              >
                <div className="p-2 text-sm">Small content</div>
                <div className="p-2 text-sm">Small content 2</div>
              </Tabs>
              <Tabs
                size="large"
                value="1"
                tabs={[
                  { key: "1", label: "Large Tab 1" },
                  { key: "2", label: "Large Tab 2" },
                ]}
              >
                <div className="p-6">Large content</div>
                <div className="p-6">Large content 2</div>
              </Tabs>
            </div>
            <CodeBlock language="tsx" title="Tabs Sizes">
              {`<Tabs size="small" value="1" tabs={tabs}>
  {children}
</Tabs>
<Tabs size="large" value="1" tabs={tabs}>
  {children}
</Tabs>`}
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
                  string
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  -
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Currently active tab key
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  tabs
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Tab[]
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  -
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Tab items configuration
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  onChange
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  (key: string) =&gt; void
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  -
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Callback when tab changes
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  size
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  "small" | "default" | "large"
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  "default"
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Size of tabs
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  position
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  "top" | "bottom" | "left" | "right"
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  "top"
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Position of tab headers
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TabsSection;
