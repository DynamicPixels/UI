import React from "react";
import { Timeline } from "@dynamicpixels/dynamicui";
import CodeBlock from "../CodeBlock";

const TimelineSection = () => {
  const basicItems = [
    {
      content: "Create a services site 2015-09-01",
      label: "2015-09-01",
    },
    {
      content: "Solve initial network problems 2015-09-01",
      label: "2015-09-01",
    },
    {
      content: "Technical testing 2015-09-01",
      label: "2015-09-01",
    },
    {
      content: "Network problems being solved 2015-09-01",
      label: "2015-09-01",
    },
  ];

  const coloredItems = [
    {
      content: "Create a services site 2015-09-01",
      color: "green" as const,
    },
    {
      content: "Solve initial network problems 2015-09-01",
      color: "red" as const,
    },
    {
      content: "Technical testing 2015-09-01",
      color: "blue" as const,
    },
    {
      content: "Network problems being solved 2015-09-01",
      color: "gray" as const,
    },
  ];

  const detailedItems = [
    {
      label: "Step 1: Planning",
      content: (
        <div>
          <p className="font-medium">Project Planning Phase</p>
          <p className="text-sm text-gray-600 mt-1">
            Define project scope, requirements, and timeline. Gather all
            necessary resources and create detailed project plan.
          </p>
        </div>
      ),
      color: "green" as const,
    },
    {
      label: "Step 2: Development",
      content: (
        <div>
          <p className="font-medium">Development Phase</p>
          <p className="text-sm text-gray-600 mt-1">
            Code implementation, feature development, and initial testing.
            Regular code reviews and quality assurance.
          </p>
        </div>
      ),
      color: "blue" as const,
    },
    {
      label: "Step 3: Testing",
      content: (
        <div>
          <p className="font-medium">Testing Phase</p>
          <p className="text-sm text-gray-600 mt-1">
            Comprehensive testing including unit tests, integration tests, and
            user acceptance testing.
          </p>
        </div>
      ),
      color: "red" as const,
    },
    {
      label: "Step 4: Deployment",
      content: (
        <div>
          <p className="font-medium">Deployment Phase</p>
          <p className="text-sm text-gray-600 mt-1">
            Final deployment to production environment with monitoring and
            maintenance setup.
          </p>
        </div>
      ),
      color: "gray" as const,
    },
  ];

  return (
    <section id="timeline" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6">Timeline</h2>
      <div className="border-b">
        <p className="text-gray-600 mb-6">
          Vertical display timeline for showing chronological information.
        </p>

        <h3 className="text-lg font-semibold mb-4">Examples</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-md font-medium mb-3">Basic Timeline</h4>
            <div className="mb-4">
              <Timeline items={basicItems} />
            </div>
            <CodeBlock language="tsx" title="Basic Timeline">
              {`const items = [
  {
    content: "Create a services site 2015-09-01",
    label: "2015-09-01"
  },
  {
    content: "Solve initial network problems 2015-09-01", 
    label: "2015-09-01"
  },
  {
    content: "Technical testing 2015-09-01",
    label: "2015-09-01"
  }
];

<Timeline items={items} />`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">Colored Timeline</h4>
            <div className="mb-4">
              <Timeline items={coloredItems} />
            </div>
            <CodeBlock language="tsx" title="Colored Timeline">
              {`const items = [
  {
    content: "Create a services site 2015-09-01",
    color: "green"
  },
  {
    content: "Solve initial network problems 2015-09-01",
    color: "red" 
  },
  {
    content: "Technical testing 2015-09-01",
    color: "blue"
  }
];

<Timeline items={items} />`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">
              Timeline with Rich Content
            </h4>
            <div className="mb-4">
              <Timeline items={detailedItems} />
            </div>
            <CodeBlock language="tsx" title="Rich Content Timeline">
              {`const items = [
  {
    label: "Step 1: Planning",
    content: (
      <div>
        <p className="font-medium">Project Planning Phase</p>
        <p className="text-sm text-gray-600 mt-1">
          Define project scope and requirements...
        </p>
      </div>
    ),
    color: "green"
  }
];

<Timeline items={items} />`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">Alternate Timeline</h4>
            <div className="mb-4">
              <Timeline items={detailedItems} type="alternate" />
            </div>
            <CodeBlock language="tsx" title="Alternate Timeline">
              {`<Timeline 
  items={items} 
  type="alternate"
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
                  TimelineItem[]
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  []
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Timeline item content
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  type
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  'left' | 'right' | 'alternate'
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  'left'
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Timeline type
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
          TimelineItem Interface
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
                  content
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ReactNode
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  The content of timeline item
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
                  The label of timeline item (optional)
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  color
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  'blue' | 'red' | 'green' | 'gray'
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Set the color of circle (optional)
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  icon
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ReactNode
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Custom icon for the timeline dot (optional)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
