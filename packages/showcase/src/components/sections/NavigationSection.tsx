import React from "react";
import { Navigation } from "@dynamicpixels/dynamicui";
import CodeBlock from "../CodeBlock";

const NavigationSection = () => {
  return (
    <section id="navigation" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6">Navigation</h2>
      <div className="border-b">
        <p className="text-gray-600 mb-6">
          A pagination navigation component providing page navigation with
          support for jump-to-page functionality and customizable display
          options.
        </p>

        <h3 className="text-lg font-semibold mb-4">Examples</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-md font-medium mb-3">Basic Pagination</h4>
            <div className="mb-4">
              <Navigation
                total={100}
                current={1}
                pageSize={10}
                onChange={(page) => console.log("Page changed to:", page)}
              />
            </div>
            <CodeBlock language="tsx" title="Basic Pagination">
              {`<Navigation 
  total={100}
  current={1}
  pageSize={10}
  onChange={(page) => console.log('Page changed to:', page)}
/>`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">Mini Pagination</h4>
            <div className="mb-4">
              <Navigation
                total={50}
                current={3}
                pageSize={5}
                mini={true}
                onChange={(page) => console.log("Page changed to:", page)}
              />
            </div>
            <CodeBlock language="tsx" title="Mini Pagination">
              {`<Navigation 
  total={50}
  current={3}
  pageSize={5}
  mini={true}
  onChange={(page) => console.log('Page changed to:', page)}
/>`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">
              Pagination without Jumper
            </h4>
            <div className="mb-4">
              <Navigation
                total={200}
                current={5}
                pageSize={20}
                showJumper={false}
                showTotal={true}
                onChange={(page) => console.log("Page changed to:", page)}
              />
            </div>
            <CodeBlock language="tsx" title="Pagination without Jumper">
              {`<Navigation 
  total={200}
  current={5}
  pageSize={20}
  showJumper={false}
  showTotal={true}
  onChange={(page) => console.log('Page changed to:', page)}
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
                  total
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  number
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  50
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Total number of items
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  current
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  number
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  1
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Current page number
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  pageSize
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  number
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  10
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Number of items per page
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  mini
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  boolean
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  false
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Whether to use mini size
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  showJumper
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  boolean
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  true
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Whether to show page jumper
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  showTotal
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  boolean
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  true
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Whether to show total count
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  onChange
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  (page: number) =&gt; void
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  -
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Callback when page changes
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default NavigationSection;
