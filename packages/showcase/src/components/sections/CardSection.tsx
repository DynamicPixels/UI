"use client";

import React from "react";
import { Card, Button } from "@dynamicpixels/dynamicui";
import CodeBlock from "../CodeBlock";

export default function CardSection() {
  return (
    <section id="card" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6">Card</h2>
      <div className="">
        <p className="text-gray-600 mb-6">
          A card container for grouping related content.
        </p>

        <h3 className="text-lg font-semibold mb-4">Examples</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-md font-medium mb-3">Basic Card</h4>
            <div className="mb-4">
              <Card title="Card Title" className="max-w-md">
                <p>This is a basic card with a title and some content.</p>
              </Card>
            </div>
            <CodeBlock language="tsx" title="Basic Card">
              {`<Card title="Card Title">
  <p>This is a basic card with a title and some content.</p>
</Card>`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">Card without Title</h4>
            <div className="mb-4">
              <Card className="max-w-md">
                <p>This card doesn't have a title, just content.</p>
              </Card>
            </div>
            <CodeBlock language="tsx" title="Card without Title">
              {`<Card>
  <p>This card doesn't have a title, just content.</p>
</Card>`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">Card with Actions</h4>
            <div className="mb-4">
              <Card
                title="Actions Card"
                actions={[
                  <Button key="cancel" variant="text">
                    Cancel
                  </Button>,
                  <Button key="save" variant="primary">
                    Save
                  </Button>,
                ]}
                className="max-w-md"
              >
                <p>This card has action buttons.</p>
              </Card>
            </div>
            <CodeBlock language="tsx" title="Card with Actions">
              {`<Card 
  title="Actions Card" 
  actions={[
    <Button key="cancel" variant="text">Cancel</Button>,
    <Button key="save" variant="primary">Save</Button>
  ]}
>
  <p>This card has action buttons.</p>
</Card>`}
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
                  title
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  string | ReactNode
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  -
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Card title
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  actions
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ReactNode[]
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  -
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Action buttons
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
                  Additional CSS classes
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
