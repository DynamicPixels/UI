import React from "react";
import { Breadcrumb } from "@dynamicpixels/dynamicui";
import CodeBlock from "../CodeBlock";

const BreadcrumbSection = () => {
  return (
    <section id="breadcrumb" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6">Breadcrumb</h2>
      <div className="border-b">
        <p className="text-gray-600 mb-6">
          A breadcrumb displays the current location within a hierarchy. It
          allows going back to states higher up in the hierarchy.
        </p>

        <h3 className="text-lg font-semibold mb-4">Examples</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-md font-medium mb-3">Basic Breadcrumb</h4>
            <div className="mb-4">
              <Breadcrumb
                items={[
                  { label: "Home", href: "/" },
                  { label: "Library", href: "/library" },
                  { label: "Data", current: true },
                ]}
              />
            </div>
            <CodeBlock language="tsx" title="Basic Breadcrumb">
              {`<Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Library", href: "/library" },
    { label: "Data", current: true }
  ]}
/>`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">With Custom Separator</h4>
            <div className="mb-4">
              <Breadcrumb
                items={[
                  { label: "Home", href: "/" },
                  { label: "Users", href: "/users" },
                  { label: "Profile", current: true },
                ]}
                separator=">"
              />
            </div>
            <CodeBlock language="tsx" title="With Custom Separator">
              {`<Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Users", href: "/users" },
    { label: "Profile", current: true }
  ]}
  separator=">"
/>`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">Longer Path</h4>
            <div className="mb-4">
              <Breadcrumb
                items={[
                  { label: "Home", href: "/" },
                  { label: "Dashboard", href: "/dashboard" },
                  { label: "Settings", href: "/settings" },
                  { label: "Profile", href: "/settings/profile" },
                  { label: "Security", current: true },
                ]}
              />
            </div>
            <CodeBlock language="tsx" title="Longer Path">
              {`<Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Settings", href: "/settings" },
    { label: "Profile", href: "/settings/profile" },
    { label: "Security", current: true }
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
                  items
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  BreadcrumbItem[]
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  []
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Array of breadcrumb items
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  separator
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  string | ReactNode
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  "/"
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Custom separator between items
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

        <h4 className="text-md font-medium mt-4 mb-3">
          BreadcrumbItem Interface
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
                  string | ReactNode
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  The breadcrumb item label
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  href
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  string
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  URL for navigation (optional)
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  current
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  boolean
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Whether this is the current page
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbSection;
