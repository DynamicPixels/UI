import React from "react";
import { Progress } from "@dynamicpixels/dynamicui";
import CodeBlock from "../CodeBlock";

const ProgressSection = () => {
  return (
    <section id="progress" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6">Progress</h2>
      <div className="border-b">
        <p className="text-gray-600 mb-6">
          Progress indicators show the completion progress of an operation or
          process.
        </p>

        <h3 className="text-lg font-semibold mb-4">Examples</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-md font-medium mb-3">Basic Progress</h4>
            <div className="space-y-4 mb-4">
              <Progress percent={30} />
              <Progress percent={50} />
              <Progress percent={70} />
              <Progress percent={100} />
            </div>
            <CodeBlock language="tsx" title="Basic Progress">
              {`<Progress percent={30} />
<Progress percent={50} />
<Progress percent={70} />
<Progress percent={100} />`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">Progress States</h4>
            <div className="space-y-4 mb-4">
              <Progress percent={50} status="active" />
              <Progress percent={70} status="exception" />
              <Progress percent={100} status="success" />
            </div>
            <CodeBlock language="tsx" title="Progress States">
              {`<Progress percent={50} status="active" />
<Progress percent={70} status="exception" />
<Progress percent={100} status="success" />`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">Progress with Text</h4>
            <div className="space-y-4 mb-4">
              <Progress percent={75} showInfo />
              <Progress percent={100} showInfo />
            </div>
            <CodeBlock language="tsx" title="Progress with Text">
              {`<Progress percent={75} showInfo />
<Progress percent={100} showInfo />`}
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
                  percent
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  number
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  0
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Progress percentage
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  status
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  'active' | 'exception' | 'success'
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  'active'
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Progress status
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  showInfo
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  boolean
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  false
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Whether to show progress text
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;
