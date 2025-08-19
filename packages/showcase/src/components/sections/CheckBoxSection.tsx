import React from "react";
import { CheckBox } from "@dynamicpixels/dynamicui";
import CodeBlock from "../CodeBlock";

const CheckBoxSection = () => {
  return (
    <section id="checkbox" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6">CheckBox</h2>
      <div className="border-b">
        <p className="text-gray-600 mb-6">
          Checkboxes allow users to select one or more items from a set.
        </p>

        <h3 className="text-lg font-semibold mb-4">Examples</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-md font-medium mb-3">Basic CheckBox</h4>
            <div className="space-y-3 mb-4">
              <CheckBox />
              <CheckBox defaultChecked />
              <CheckBox disabled />
              <CheckBox disabled defaultChecked />
            </div>
            <CodeBlock language="tsx" title="Basic CheckBox">
              {`<CheckBox />
<CheckBox defaultChecked />
<CheckBox disabled />
<CheckBox disabled defaultChecked />`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">CheckBox with Labels</h4>
            <div className="space-y-3 mb-4">
              <CheckBox label="Accept terms and conditions" />
              <CheckBox label="Subscribe to newsletter" defaultChecked />
              <CheckBox label="Enable notifications" />
              <CheckBox label="Remember me" />
            </div>
            <CodeBlock language="tsx" title="CheckBox with Labels">
              {`<CheckBox label="Accept terms and conditions" />
<CheckBox label="Subscribe to newsletter" defaultChecked />
<CheckBox label="Enable notifications" />
<CheckBox label="Remember me" />`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">Indeterminate State</h4>
            <div className="space-y-3 mb-4">
              <CheckBox indeterminate label="Select all items" />
              <div className="ml-6 space-y-2">
                <CheckBox label="Item 1" defaultChecked />
                <CheckBox label="Item 2" />
                <CheckBox label="Item 3" defaultChecked />
              </div>
            </div>
            <CodeBlock language="tsx" title="Indeterminate State">
              {`<CheckBox indeterminate label="Select all items" />
<div className="ml-6 space-y-2">
  <CheckBox label="Item 1" defaultChecked />
  <CheckBox label="Item 2" />
  <CheckBox label="Item 3" defaultChecked />
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
                  checked
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  boolean
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  -
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Whether the checkbox is checked (controlled)
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  defaultChecked
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  boolean
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  false
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Initial checked state (uncontrolled)
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  indeterminate
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  boolean
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  false
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Whether to show indeterminate state
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
                  Label for the checkbox
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  disabled
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  boolean
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  false
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Whether the checkbox is disabled
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  onChange
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ChangeEventHandler
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  -
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Callback when checkbox state changes
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CheckBoxSection;
