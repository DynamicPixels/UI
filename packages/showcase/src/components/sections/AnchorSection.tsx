import React from "react";
import { Anchor } from "@dynamicpixels/dynamicui";
import CodeBlock from "../CodeBlock";

const AnchorSection = () => {
  return (
    <section id="anchor" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6">Anchor</h2>
      <div className="border-b">
        <p className="text-gray-600 mb-6">
          Hyperlinks to scroll on one page. Often used for navigation with
          offsetTop.
        </p>

        <h3 className="text-lg font-semibold mb-4">Examples</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-md font-medium mb-3">Basic Anchor</h4>
            <div className="mb-4">
              <Anchor
                items={[
                  { label: "Introduction", href: "#introduction" },
                  { label: "Getting Started", href: "#getting-started" },
                  { label: "Installation", href: "#installation" },
                  { label: "Usage", href: "#usage" },
                  { label: "API Reference", href: "#api" },
                ]}
              />
            </div>
            <CodeBlock language="tsx" title="Basic Anchor">
              {`<Anchor>
  <Anchor.Link href="#introduction" title="Introduction" />
  <Anchor.Link href="#getting-started" title="Getting Started" />
  <Anchor.Link href="#installation" title="Installation" />
  <Anchor.Link href="#usage" title="Usage" />
  <Anchor.Link href="#api" title="API Reference" />
</Anchor>`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">Nested Anchor</h4>
            <div className="mb-4">
              <div className="flex space-x-6">
                <div className="w-48">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-3">Page Contents</h5>
                    <nav className="space-y-1">
                      <a
                        href="#components"
                        className="block text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        Components
                      </a>
                      <div className="ml-4 space-y-1">
                        <a
                          href="#button"
                          className="block text-blue-600 hover:text-blue-800 text-xs"
                        >
                          Button
                        </a>
                        <a
                          href="#input"
                          className="block text-blue-600 hover:text-blue-800 text-xs"
                        >
                          Input
                        </a>
                        <a
                          href="#form"
                          className="block text-blue-600 hover:text-blue-800 text-xs"
                        >
                          Form
                        </a>
                      </div>
                      <a
                        href="#guidelines"
                        className="block text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        Guidelines
                      </a>
                      <div className="ml-4 space-y-1">
                        <a
                          href="#design"
                          className="block text-blue-600 hover:text-blue-800 text-xs"
                        >
                          Design
                        </a>
                        <a
                          href="#accessibility"
                          className="block text-blue-600 hover:text-blue-800 text-xs"
                        >
                          Accessibility
                        </a>
                      </div>
                    </nav>
                  </div>
                </div>
                <div className="flex-1 bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    Nested anchor links with sub-sections.
                  </p>
                </div>
              </div>
            </div>
            <CodeBlock language="tsx" title="Nested Anchor">
              {`<Anchor>
  <Anchor.Link href="#components" title="Components">
    <Anchor.Link href="#button" title="Button" />
    <Anchor.Link href="#input" title="Input" />
    <Anchor.Link href="#form" title="Form" />
  </Anchor.Link>
  <Anchor.Link href="#guidelines" title="Guidelines">
    <Anchor.Link href="#design" title="Design" />
    <Anchor.Link href="#accessibility" title="Accessibility" />
  </Anchor.Link>
</Anchor>`}
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
                  affix
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  boolean
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  true
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Fixed mode of anchor
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  bounds
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  number
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  5
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Bounding distance of anchor area
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  offsetTop
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  number
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  0
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Pixels to offset from top when calculating position of scroll
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AnchorSection;
