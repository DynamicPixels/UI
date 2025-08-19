import React from "react";
import { Cascader } from "@dynamicpixels/dynamicui";
import CodeBlock from "../CodeBlock";

const CascaderSection = () => {
  const options = [
    {
      value: "zhejiang",
      label: "Zhejiang",
      children: [
        {
          value: "hangzhou",
          label: "Hangzhou",
          children: [
            { value: "xihu", label: "West Lake" },
            { value: "yuhang", label: "Yu Hang" },
          ],
        },
        {
          value: "wenzhou",
          label: "Wenzhou",
          children: [{ value: "lucheng", label: "Lu Cheng" }],
        },
      ],
    },
    {
      value: "jiangsu",
      label: "Jiangsu",
      children: [
        {
          value: "nanjing",
          label: "Nanjing",
          children: [
            { value: "zhonghuamen", label: "Zhong Hua Men" },
            { value: "gulou", label: "Gu Lou" },
          ],
        },
        {
          value: "suzhou",
          label: "Suzhou",
          children: [{ value: "gusu", label: "Gu Su" }],
        },
      ],
    },
  ];

  return (
    <section id="cascader" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6">Cascader</h2>
      <div className="border-b">
        <p className="text-gray-600 mb-6">
          Cascade selection box for selecting hierarchical data.
        </p>

        <h3 className="text-lg font-semibold mb-4">Examples</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-md font-medium mb-3">Basic Cascader</h4>
            <div className="max-w-md mb-4">
              <Cascader
                options={options}
                placeholder="Please select"
                onChange={(value) => console.log("Selected:", value)}
              />
            </div>
            <CodeBlock language="tsx" title="Basic Cascader">
              {`const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          { value: 'xihu', label: 'West Lake' },
        ],
      },
    ],
  },
];

<Cascader 
  options={options} 
  placeholder="Please select" 
  onChange={onChange}
/>`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">Multiple Selection</h4>
            <div className="max-w-md mb-4">
              <Cascader
                options={options}
                placeholder="Please select multiple"
                multiple
                onChange={(value) => console.log("Selected multiple:", value)}
              />
            </div>
            <CodeBlock language="tsx" title="Multiple Selection">
              {`<Cascader 
  options={options} 
  placeholder="Please select multiple" 
  multiple
  onChange={onChange}
/>`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">Different Sizes</h4>
            <div className="space-y-3 mb-4">
              <div className="max-w-md">
                <Cascader
                  options={options}
                  placeholder="Large size"
                  size="large"
                />
              </div>
              <div className="max-w-md">
                <Cascader
                  options={options}
                  placeholder="Default size"
                  size="default"
                />
              </div>
              <div className="max-w-md">
                <Cascader
                  options={options}
                  placeholder="Small size"
                  size="small"
                />
              </div>
            </div>
            <CodeBlock language="tsx" title="Different Sizes">
              {`<Cascader size="large" options={options} placeholder="Large" />
<Cascader size="default" options={options} placeholder="Default" />
<Cascader size="small" options={options} placeholder="Small" />`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">Disabled State</h4>
            <div className="max-w-md mb-4">
              <Cascader
                options={options}
                placeholder="Disabled cascader"
                disabled
              />
            </div>
            <CodeBlock language="tsx" title="Disabled State">
              {`<Cascader 
  options={options} 
  placeholder="Disabled cascader" 
  disabled
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
                  options
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  CascaderOption[]
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  []
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Data source for cascade options
                </td>
              </tr>
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
                  multiple
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  boolean
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  false
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Support multiple selection
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
                  Size of the input
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
                  Whether disabled select
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
                  Callback when selection changes
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className="text-lg font-semibold mt-6 mb-4">
          CascaderOption Interface
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
                  value
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  string
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  The option value
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
                  The option display label
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  children
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  CascaderOption[]
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Child options (optional)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CascaderSection;
