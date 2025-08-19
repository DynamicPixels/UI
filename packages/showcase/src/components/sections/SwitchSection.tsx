import React from "react";
import { Switch } from "@dynamicpixels/dynamicui";
import CodeBlock from "../CodeBlock";

const SwitchSection = () => {
  return (
    <section id="switch" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6">Switch</h2>
      <div className="border-b">
        <p className="text-gray-600 mb-6">
          A switch component for toggling between two states.
        </p>

        <h3 className="text-lg font-semibold mb-4">Examples</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-md font-medium mb-3">Basic Switch</h4>
            <div className="flex flex-wrap gap-4 mb-4">
              <Switch />
              <Switch defaultChecked />
              <Switch disabled />
              <Switch disabled defaultChecked />
            </div>
            <CodeBlock language="tsx" title="Basic Switch">
              {`<Switch />
<Switch defaultChecked />
<Switch disabled />
<Switch disabled defaultChecked />`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">Switch Sizes</h4>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <Switch size="small" />
              <Switch size="default" />
            </div>
            <CodeBlock language="tsx" title="Switch Sizes">
              {`<Switch size="small" />
<Switch size="default" />`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">Switch with Label</h4>
            <div className="space-y-3 mb-4">
              <Switch label="Enable notifications" />
              <Switch label="Dark mode" defaultChecked />
              <Switch label="Auto-save" disabled />
            </div>
            <CodeBlock language="tsx" title="Switch with Label">
              {`<Switch label="Enable notifications" />
<Switch label="Dark mode" defaultChecked />
<Switch label="Auto-save" disabled />`}
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
                  Whether the switch is checked (controlled)
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
                  onChange
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  (checked: boolean) =&gt; void
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  -
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Callback when switch state changes
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
                  Whether the switch is disabled
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  size
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  "default" | "small"
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  "default"
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Size of the switch
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  label
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  string
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  -
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Label text for the switch
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  loading
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  boolean
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  false
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Show loading state
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default SwitchSection;
