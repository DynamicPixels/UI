import React, { useState } from "react";
import { Steps } from "@dynamicpixels/dynamicui";
import CodeBlock from "../CodeBlock";

const StepsSection = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const basicSteps = [
    { title: "Finished", description: "This is a description" },
    { title: "In Progress", description: "This is a description" },
    { title: "Waiting", description: "This is a description" },
  ];

  const detailedSteps = [
    {
      title: "Login",
      description: "Sign in to your account to continue",
    },
    {
      title: "Verification",
      description: "Verify your identity for security",
    },
    {
      title: "Personalization",
      description: "Customize your experience",
    },
    {
      title: "Completion",
      description: "Setup complete! Start using the app",
    },
  ];

  return (
    <section id="steps" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6">Steps</h2>
      <div className="border-b">
        <p className="text-gray-600 mb-6">
          Steps is a guide for users to complete tasks in a specific order.
        </p>

        <h3 className="text-lg font-semibold mb-4">Examples</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-md font-medium mb-3">Basic Steps</h4>
            <div className="mb-4">
              <Steps steps={basicSteps} current={1} />
            </div>
            <CodeBlock language="tsx" title="Basic Steps">
              {`const steps = [
  { title: "Finished", description: "This is a description" },
  { title: "In Progress", description: "This is a description" },
  { title: "Waiting", description: "This is a description" },
];

<Steps
  steps={steps}
  current={1}
/>`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">Interactive Steps</h4>
            <div className="mb-4">
              <Steps
                steps={detailedSteps}
                current={currentStep}
                onChange={setCurrentStep}
              />
              <div className="mt-4 text-center">
                <span className="text-sm text-gray-600">
                  Current step: {currentStep + 1} -{" "}
                  {detailedSteps[currentStep]?.title}
                </span>
              </div>
            </div>
            <CodeBlock language="tsx" title="Interactive Steps">
              {`const [current, setCurrent] = useState(1);

<Steps
  steps={steps}
  current={current}
  onChange={setCurrent}
/>`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">Small Size Steps</h4>
            <div className="mb-4">
              <Steps steps={basicSteps} current={0} size="small" />
            </div>
            <CodeBlock language="tsx" title="Small Size Steps">
              {`<Steps
  steps={steps}
  current={0}
  size="small"
/>`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">Vertical Steps</h4>
            <div className="mb-4">
              <Steps
                steps={[
                  {
                    title: "Planning",
                    description: "Define project scope and requirements",
                  },
                  {
                    title: "Development",
                    description: "Code implementation and testing",
                  },
                  {
                    title: "Review",
                    description: "Code review and quality assurance",
                  },
                  {
                    title: "Deploy",
                    description: "Release to production environment",
                  },
                ]}
                current={2}
                direction="vertical"
              />
            </div>
            <CodeBlock language="tsx" title="Vertical Steps">
              {`<Steps
  steps={steps}
  current={2}
  direction="vertical"
/>`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">Dot Type Steps</h4>
            <div className="mb-4">
              <Steps steps={basicSteps} current={1} type="dot" />
            </div>
            <CodeBlock language="tsx" title="Dot Type Steps">
              {`<Steps
  steps={steps}
  current={1}
  type="dot"
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
                  steps
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Step[]
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  []
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  An array of step items
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  current
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  number
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  0
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Current step index
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  direction
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  'horizontal' | 'vertical'
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  'horizontal'
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Display direction of the steps
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  type
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  'default' | 'dot' | 'icon'
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  'default'
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Type of steps
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  size
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  'default' | 'small'
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  'default'
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Size of steps
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  onChange
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  function
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  -
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Callback when step changes
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className="text-lg font-semibold mt-6 mb-4">Step Interface</h4>
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
                  title
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ReactNode
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Title of the step
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  description
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ReactNode
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Description of the step (optional)
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
                  Icon for the step (optional)
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  status
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  'wait' | 'process' | 'finish'
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Status of the step (optional)
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
                  Whether the step is disabled (optional)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
