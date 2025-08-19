"use client";

import React from "react";
import { Input } from "@dynamicpixels/dynamicui";
import CodeBlock from "../CodeBlock";

export default function InputSection() {
  return (
    <section id="input" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6">Input</h2>
      <div className="">
        <p className="text-gray-600 mb-6">
          Input component for user text input.
        </p>

        <h3 className="text-lg font-semibold mb-4">Examples</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-md font-medium mb-3">Basic Input</h4>
            <div className="max-w-md space-y-3 mb-4">
              <Input placeholder="Basic input" />
              <Input
                placeholder="With default value"
                defaultValue="Default value"
              />
            </div>
            <CodeBlock language="tsx" title="Basic Input">
              {`<Input placeholder="Basic input" />
<Input placeholder="With default value" defaultValue="Default value" />`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">Input States</h4>
            <div className="max-w-md space-y-3 mb-4">
              <Input placeholder="Disabled input" disabled />
              <Input placeholder="Readonly input" readOnly />
            </div>
            <CodeBlock language="tsx" title="Input States">
              {`<Input placeholder="Disabled input" disabled />
<Input placeholder="Readonly input" readOnly />`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">Input Types</h4>
            <div className="max-w-md space-y-3 mb-4">
              <Input type="email" placeholder="Email input" />
              <Input type="password" placeholder="Password input" />
              <Input type="number" placeholder="Number input" />
            </div>
            <CodeBlock language="tsx" title="Input Types">
              {`<Input type="email" placeholder="Email input" />
<Input type="password" placeholder="Password input" />
<Input type="number" placeholder="Number input" />`}
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
                  value
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  string
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  -
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Input value (controlled)
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
                  Initial value (uncontrolled)
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
                  Disable the input
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
