import React from "react";
import { Slider } from "@dynamicpixels/dynamicui";
import CodeBlock from "../CodeBlock";

const SliderSection = () => {
  return (
    <section id="slider" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6">Slider</h2>
      <div className="border-b">
        <p className="text-gray-600 mb-6">
          A slider component for displaying current value and intervals in
          range.
        </p>

        <h3 className="text-lg font-semibold mb-4">Examples</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-md font-medium mb-3">Basic Slider</h4>
            <div className="mb-4 space-y-6">
              <div className="px-4">
                <Slider defaultValue={30} />
              </div>
              <div className="px-4">
                <Slider defaultValue={60} disabled />
              </div>
            </div>
            <CodeBlock language="tsx" title="Basic Slider">
              {`<Slider defaultValue={30} />
<Slider defaultValue={60} disabled />`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">Range Slider</h4>
            <div className="mb-4 px-4">
              <div className="relative flex felx-col">
                <input
                  type="range"
                  min="0"
                  max="100"
                  defaultValue="20"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <input
                  type="range"
                  min="0"
                  max="100"
                  defaultValue="80"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer absolute top-0"
                />
              </div>
            </div>
            <CodeBlock language="tsx" title="Range Slider">
              {`<Slider range defaultValue={[20, 80]} />`}
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
                  min
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  number
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  0
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  The minimum value the slider can slide to
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  max
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  number
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  100
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  The maximum value the slider can slide to
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  step
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  number
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  1
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  The granularity the slider can step through values
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  range
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  boolean
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  false
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Dual thumb mode for range selection
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
