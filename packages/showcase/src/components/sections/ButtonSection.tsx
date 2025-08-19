"use client";

import React from "react";
import { Button } from "@dynamicpixels/dynamicui";
import CodeBlock from "../CodeBlock";

export default function ButtonSection() {
  return (
    <section id="button" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6">Button</h2>
      <div className="">
        <p className="text-gray-600 mb-6">
          Buttons trigger actions and operations when clicked.
        </p>

        <h3 className="text-lg font-semibold mb-4">Examples</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-md font-medium mb-3">Basic Buttons</h4>
            <div className="flex flex-wrap gap-3 mb-4">
              <Button variant="primary">Primary</Button>
              <Button variant="default">Default</Button>
              <Button variant="dashed">Dashed</Button>
              <Button variant="text">Text</Button>
              <Button variant="link">Link</Button>
            </div>
            <CodeBlock language="tsx" title="Button Variants">
              {`<Button variant="primary">Primary</Button>
<Button variant="default">Default</Button>
<Button variant="dashed">Dashed</Button>`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">Button Sizes</h4>
            <div className="flex flex-wrap gap-3 mb-4 items-center">
              <Button size="small">Small</Button>
              <Button size="default">Default</Button>
              <Button size="large">Large</Button>
            </div>
            <CodeBlock language="tsx" title="Button Sizes">
              {`<Button size="small">Small</Button>
<Button size="default">Default</Button>
<Button size="large">Large</Button>`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">
              Disabled & Loading States
            </h4>
            <div className="flex flex-wrap gap-3 mb-4">
              <Button disabled>Disabled</Button>
              <Button loading>Loading</Button>
              <Button variant="primary" loading>
                Primary Loading
              </Button>
            </div>
            <CodeBlock language="tsx" title="Button States">
              {`<Button disabled>Disabled</Button>
<Button loading>Loading</Button>`}
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
                  variant
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  'primary' | 'default' | 'dashed' | 'text' | 'link' | 'danger'
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  'default'
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Button variant style
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  size
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  'small' | 'default' | 'large'
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  'default'
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Button size
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
                  Disable the button
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
