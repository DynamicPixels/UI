import React, { useState } from "react";
import { Transfer } from "@dynamicpixels/dynamicui";
import CodeBlock from "../CodeBlock";

const TransferSection = () => {
  const [targetKeys, setTargetKeys] = useState<string[]>(["1", "3"]);

  const mockData = [
    { key: "0", label: "Content 1" },
    { key: "1", label: "Content 2" },
    { key: "2", label: "Content 3" },
    { key: "3", label: "Content 4" },
    { key: "4", label: "Content 5" },
    { key: "5", label: "Content 6" },
    { key: "6", label: "Content 7" },
    { key: "7", label: "Content 8" },
    { key: "8", label: "Content 9" },
    { key: "9", label: "Content 10" },
  ];

  const largeData = Array.from({ length: 20 }, (_, i) => ({
    key: i.toString(),
    label: `Item ${i + 1}`,
    disabled: i % 4 === 0, // Disable every 4th item
  }));

  const [largeTargetKeys, setLargeTargetKeys] = useState<string[]>([
    "1",
    "3",
    "5",
  ]);

  return (
    <section id="transfer" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6">Transfer</h2>
      <div className="border-b">
        <p className="text-gray-600 mb-6">
          Double column transfer choice box for moving elements between two
          columns.
        </p>

        <h3 className="text-lg font-semibold mb-4">Examples</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-md font-medium mb-3">Basic Transfer</h4>
            <div className="mb-4">
              <Transfer
                dataSource={mockData}
                targetKeys={targetKeys}
                onChange={setTargetKeys}
                titles={["Source", "Target"]}
              />
            </div>
            <CodeBlock language="tsx" title="Basic Transfer">
              {`const [targetKeys, setTargetKeys] = useState(['1', '3']);

const mockData = [
  { key: '0', label: 'Content 1' },
  { key: '1', label: 'Content 2' },
  { key: '2', label: 'Content 3' },
  { key: '3', label: 'Content 4' },
  // ... more items
];

<Transfer
  dataSource={mockData}
  targetKeys={targetKeys}
  onChange={setTargetKeys}
  titles={['Source', 'Target']}
/>`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">One Way Transfer</h4>
            <div className="mb-4">
              <Transfer
                dataSource={mockData.slice(0, 6)}
                targetKeys={["2", "4"]}
                onChange={(keys) => console.log("One way transfer:", keys)}
                titles={["Available", "Selected"]}
                oneWay={true}
              />
            </div>
            <CodeBlock language="tsx" title="One Way Transfer">
              {`<Transfer
  dataSource={mockData}
  targetKeys={targetKeys}
  onChange={onChange}
  titles={['Available', 'Selected']}
  oneWay={true}
/>`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">
              Large Dataset with Disabled Items
            </h4>
            <div className="mb-4">
              <Transfer
                dataSource={largeData}
                targetKeys={largeTargetKeys}
                onChange={setLargeTargetKeys}
                titles={["All Items", "Selected Items"]}
              />
            </div>
            <CodeBlock language="tsx" title="Large Dataset">
              {`const largeData = Array.from({ length: 20 }, (_, i) => ({
  key: i.toString(),
  label: \`Item \${i + 1}\`,
  disabled: i % 4 === 0, // Disable every 4th item
}));

<Transfer
  dataSource={largeData}
  targetKeys={targetKeys}
  onChange={setTargetKeys}
  titles={['All Items', 'Selected Items']}
/>`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">Custom Titles</h4>
            <div className="mb-4">
              <Transfer
                dataSource={[
                  { key: "user1", label: "John Doe" },
                  { key: "user2", label: "Jane Smith" },
                  { key: "user3", label: "Bob Johnson" },
                  { key: "user4", label: "Alice Brown" },
                  { key: "user5", label: "Charlie Wilson" },
                ]}
                targetKeys={["user2", "user4"]}
                onChange={(keys) => console.log("User selection:", keys)}
                titles={["Available Users", "Project Members"]}
              />
            </div>
            <CodeBlock language="tsx" title="Custom Titles">
              {`<Transfer
  dataSource={users}
  targetKeys={selectedUsers}
  onChange={setSelectedUsers}
  titles={['Available Users', 'Project Members']}
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
                  dataSource
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  TransferItem[]
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  []
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Used for setting the source data
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  targetKeys
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  string[]
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  []
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  A set of keys of selected items
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
                  Callback function when target keys change
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  titles
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  [string, string]
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ['', '']
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Titles for source and target columns
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  oneWay
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  boolean
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  false
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Hide the move back button
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
          TransferItem Interface
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
                  key
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  string
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Unique identifier for the item
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  label
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  string
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Display label for the item
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

export default TransferSection;
