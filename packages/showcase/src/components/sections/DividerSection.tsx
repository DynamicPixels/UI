import React from "react";
import { Divider } from "@dynamicpixels/dynamicui";
import CodeBlock from "../CodeBlock";

const DividerSection = () => {
  return (
    <section id="divider" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6">Divider</h2>
      <div className="border-b">
        <p className="text-gray-600 mb-6">
          Dividers are used to separate content and create visual hierarchy.
        </p>

        <h3 className="text-lg font-semibold mb-4">Examples</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-md font-medium mb-3">Horizontal Divider</h4>
            <div className="space-y-4 mb-4">
              <p>Content above</p>
              <Divider />
              <p>Content below</p>
              <Divider dashed />
              <p>Content below dashed divider</p>
            </div>
            <CodeBlock language="tsx" title="Horizontal Divider">
              {`<p>Content above</p>
<Divider />
<p>Content below</p>
<Divider dashed />
<p>Content below dashed divider</p>`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">Divider with Text</h4>
            <div className="space-y-4 mb-4">
              <p>Content above</p>
              <Divider label="Middle" />
              <p>Content below</p>
              <Divider label="Left Text" labelPosition="left" />
              <p>Content below</p>
              <Divider label="Right Text" labelPosition="right" />
              <p>Content below</p>
            </div>
            <CodeBlock language="tsx" title="Divider with Text">
              {`<p>Content above</p>
<Divider label="Middle" />
<p>Content below</p>
<Divider label="Left Text" labelPosition="left" />
<p>Content below</p>
<Divider label="Right Text" labelPosition="right" />
<p>Content below</p>`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">Vertical Divider</h4>
            <div className="flex items-center gap-4 mb-4">
              <span>Text</span>
              <Divider orientation="vertical" />
              <span>Text</span>
              <Divider orientation="vertical" />
              <span>Text</span>
            </div>
            <CodeBlock language="tsx" title="Vertical Divider">
              {`<div className="flex items-center gap-4">
  <span>Text</span>
  <Divider orientation="vertical" />
  <span>Text</span>
  <Divider orientation="vertical" />
  <span>Text</span>
</div>`}
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
                  orientation
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  'horizontal' | 'vertical'
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  'horizontal'
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Direction of divider
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  dashed
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  boolean
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  false
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Whether line is dashed
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  label
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ReactNode
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  -
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Label content inside divider
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  labelPosition
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  'left' | 'center' | 'right'
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  'center'
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Position of label inside divider
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DividerSection;
