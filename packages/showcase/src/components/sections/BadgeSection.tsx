"use client";

import React from "react";
import {
  Badge,
  BadgeStatus,
  BadgeRibbon,
  Button,
  Card,
} from "@dynamicpixels/dynamicui";
import CodeBlock from "../CodeBlock";

export default function BadgeSection() {
  return (
    <section id="badge" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6">Badge</h2>
      <div className="">
        <p className="text-gray-600 mb-6">
          Badges are used to display notification counts, status indicators, and
          tags.
        </p>

        <h3 className="text-lg font-semibold mb-4">Examples</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-md font-medium mb-3">Status Badges</h4>
            <div className="flex flex-wrap gap-4 mb-4">
              <BadgeStatus status="default" text="Default" />
              <BadgeStatus status="success" text="Success" />
              <BadgeStatus status="error" text="Error" />
              <BadgeStatus status="warning" text="Warning" />
              <BadgeStatus status="processing" text="Processing" />
            </div>
            <CodeBlock language="tsx" title="Status Badges">
              {`<BadgeStatus status="default" text="Default" />
<BadgeStatus status="success" text="Success" />
<BadgeStatus status="error" text="Error" />
<BadgeStatus status="warning" text="Warning" />
<BadgeStatus status="processing" text="Processing" />`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">Notification Badges</h4>
            <div className="flex flex-wrap gap-6 mb-4">
              <Badge count={5}>
                <Button>Messages</Button>
              </Badge>
              <Badge count={25}>
                <Button>Notifications</Button>
              </Badge>
              <Badge count={100} overflowCount={99}>
                <Button>Inbox</Button>
              </Badge>
              <Badge dot>
                <Button>Updates</Button>
              </Badge>
            </div>
            <CodeBlock language="tsx" title="Notification Badges">
              {`<Badge count={5}>
  <Button>Messages</Button>
</Badge>
<Badge count={25}>
  <Button>Notifications</Button>
</Badge>
<Badge count={100} overflowCount={99}>
  <Button>Inbox</Button>
</Badge>
<Badge dot>
  <Button>Updates</Button>
</Badge>`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">Ribbon Badges</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <BadgeRibbon text="NEW" color="red">
                <Card title="New Feature">
                  <p>This card has a ribbon badge to highlight it's new.</p>
                </Card>
              </BadgeRibbon>
              <BadgeRibbon text="FEATURED" color="purple">
                <Card title="Featured Item">
                  <p>This card is marked as featured with a purple ribbon.</p>
                </Card>
              </BadgeRibbon>
            </div>
            <CodeBlock language="tsx" title="Ribbon Badges">
              {`<BadgeRibbon text="NEW" color="red">
  <Card title="New Feature">
    <p>This card has a ribbon badge.</p>
  </Card>
</BadgeRibbon>
<BadgeRibbon text="FEATURED" color="purple">
  <Card title="Featured Item">
    <p>This card is marked as featured.</p>
  </Card>
</BadgeRibbon>`}
            </CodeBlock>
          </div>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-4">API</h3>

        <div className="mb-6">
          <h4 className="text-md font-medium mb-3">Badge (Notification)</h4>
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
                    count
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    number
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    -
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Number to display in badge
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    overflowCount
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    number
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    10
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Max count to display before showing overflow
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    dot
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    boolean
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    false
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Show as dot instead of count
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-md font-medium mb-3">BadgeStatus</h4>
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
                    status
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    "default" | "success" | "error" | "warning" | "processing"
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    -
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Status type
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    text
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    string
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    "Status"
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Status text to display
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h4 className="text-md font-medium mb-3">BadgeRibbon</h4>
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
                    color
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    "default" | "pink" | "red" | "cyan" | "green" | "purple" |
                    "volcano" | "magenta"
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    "default"
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Ribbon color
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    text
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    string
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    "Ribbon"
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Text to display on ribbon
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
