import React from "react";
import { Button, Dropdown } from "@dynamicpixels/dynamicui";
import CodeBlock from "../CodeBlock";

const DropdownSection = () => {
  return (
    <section id="dropdown" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6">Dropdown</h2>
      <div className="border-b">
        <p className="text-gray-600 mb-6">
          A dropdown list of actions or options triggered by a button.
        </p>

        <h3 className="text-lg font-semibold mb-4">Examples</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-md font-medium mb-3">Basic Dropdown</h4>
            <div className="mb-4">
              <Dropdown
                items={[
                  { label: "Edit", onClick: () => console.log("Edit clicked") },
                  {
                    label: "Duplicate",
                    onClick: () => console.log("Duplicate clicked"),
                  },
                  {
                    label: "Archive",
                    onClick: () => console.log("Archive clicked"),
                  },
                  {
                    label: "Delete",
                    onClick: () => console.log("Delete clicked"),
                  },
                ]}
                trigger={<Button variant="text">Actions</Button>}
              />
            </div>
            <CodeBlock language="tsx" title="Basic Dropdown">
              {`const items = [
  { label: "Edit", onClick: () => console.log("Edit") },
  { label: "Duplicate", onClick: () => console.log("Duplicate") },
  { label: "Archive", onClick: () => console.log("Archive") },
  { label: "Delete", onClick: () => console.log("Delete") },
];

<Dropdown
  items={items}
  trigger={<Button variant="default">Actions</Button>}
/>`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">
              Dropdown with Different Trigger
            </h4>
            <div className="mb-4">
              <Dropdown
                items={[
                  {
                    label: "Profile",
                    onClick: () => console.log("Profile clicked"),
                  },
                  {
                    label: "Settings",
                    onClick: () => console.log("Settings clicked"),
                  },
                  {
                    label: "Logout",
                    onClick: () => console.log("Logout clicked"),
                  },
                ]}
                trigger={<Button variant="primary">User Menu</Button>}
              />
            </div>
            <CodeBlock language="tsx" title="Dropdown with Different Trigger">
              {`<Dropdown
  items={[
    { label: "Profile", onClick: () => console.log("Profile") },
    { label: "Settings", onClick: () => console.log("Settings") },
    { label: "Logout", onClick: () => console.log("Logout") },
  ]}
  trigger={<Button variant="primary">User Menu</Button>}
/>`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">
              Dropdown with Disabled Items
            </h4>
            <div className="mb-4">
              <Dropdown
                items={[
                  {
                    label: "Available Action",
                    onClick: () => console.log("Available"),
                  },
                  {
                    label: "Disabled Action",
                    onClick: () => console.log("Disabled"),
                    disabled: true,
                  },
                  {
                    label: "Another Action",
                    onClick: () => console.log("Another"),
                  },
                ]}
                trigger={<Button variant="dashed">Options</Button>}
              />
            </div>
            <CodeBlock language="tsx" title="Dropdown with Disabled Items">
              {`<Dropdown
  items={[
    { label: "Available Action", onClick: () => console.log("Available") },
    { label: "Disabled Action", onClick: () => console.log("Disabled"), disabled: true },
    { label: "Another Action", onClick: () => console.log("Another") },
  ]}
  trigger={<Button variant="dashed">Options</Button>}
/>`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">Text Trigger</h4>
            <div className="mb-4">
              <Dropdown
                items={[
                  { label: "Action 1", onClick: () => console.log("Action 1") },
                  { label: "Action 2", onClick: () => console.log("Action 2") },
                ]}
                trigger={
                  <span className="text-blue-600 cursor-pointer hover:text-blue-800">
                    Click me
                  </span>
                }
              />
            </div>
            <CodeBlock language="tsx" title="Text Trigger">
              {`<Dropdown
  items={items}
  trigger={<span className="text-blue-600 cursor-pointer">Click me</span>}
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
                  items
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  DropdownItem[]
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  []
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Array of dropdown menu items
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  trigger
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ReactNode
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  -
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  The trigger element for the dropdown
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  className
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  string
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  -
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Additional CSS class
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className="text-lg font-semibold mt-6 mb-4">
          DropdownItem Interface
        </h4>
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
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  label
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  string
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  The display label of the menu item
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  onClick
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  function
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Callback when the item is clicked
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
                  Whether the item is disabled (optional)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DropdownSection;
