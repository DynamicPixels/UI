import React from "react";
import { Select } from "@dynamicpixels/dynamicui";
import CodeBlock from "../CodeBlock";

const SelectSection = () => {
  return (
    <section id="select" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6">Select</h2>
      <div className="border-b">
        <p className="text-gray-600 mb-6">
          Select components allow users to choose one option from a list.
        </p>

        <h3 className="text-lg font-semibold mb-4">Examples</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-md font-medium mb-3">Basic Select</h4>
            <div className="max-w-md space-y-3 mb-4">
              <Select
                placeholder="Choose an option"
                options={[
                  { value: "option1", label: "Option 1" },
                  { value: "option2", label: "Option 2" },
                  { value: "option3", label: "Option 3" },
                ]}
              />
              <Select
                placeholder="With default value"
                defaultValue="option2"
                options={[
                  { value: "option1", label: "Option 1" },
                  { value: "option2", label: "Option 2" },
                  { value: "option3", label: "Option 3" },
                ]}
              />
            </div>
            <CodeBlock language="tsx" title="Basic Select">
              {`<Select 
  placeholder="Choose an option"
  options={[
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ]}
/>
<Select 
  placeholder="With default value"
  defaultValue="option2"
  options={options}
/>`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">Select States</h4>
            <div className="max-w-md space-y-3 mb-4">
              <Select
                placeholder="Disabled select"
                disabled
                options={[
                  { value: "option1", label: "Option 1" },
                  { value: "option2", label: "Option 2" },
                ]}
              />
              <Select
                placeholder="With disabled option"
                options={[
                  { value: "option1", label: "Option 1" },
                  {
                    value: "option2",
                    label: "Option 2 (disabled)",
                    disabled: true,
                  },
                  { value: "option3", label: "Option 3" },
                ]}
              />
            </div>
            <CodeBlock language="tsx" title="Select States">
              {`<Select 
  placeholder="Disabled select"
  disabled
  options={options}
/>
<Select 
  placeholder="With disabled option"
  options={[
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2 (disabled)", disabled: true },
    { value: "option3", label: "Option 3" },
  ]}
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
                  options
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  SelectOption[]
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  -
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  List of options to display
                </td>
              </tr>
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
                  Selected value (controlled)
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  defaultValue
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  string
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  -
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Initial selected value (uncontrolled)
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  placeholder
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  string
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  -
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Placeholder text
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
                  Whether the select is disabled
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  onChange
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  (value: string) =&gt; void
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  -
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Callback when selection changes
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default SelectSection;
