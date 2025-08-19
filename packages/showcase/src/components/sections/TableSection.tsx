import React from "react";
import { Table } from "@dynamicpixels/dynamicui";
import CodeBlock from "../CodeBlock";

const TableSection = () => {
  return (
    <section id="table" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6">Table</h2>
      <div className="border-b">
        <p className="text-gray-600 mb-6">
          Tables display tabular data with sorting, filtering, and pagination
          support.
        </p>

        <h3 className="text-lg font-semibold mb-4">Examples</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-md font-medium mb-3">Basic Table</h4>
            <div className="mb-4">
              <Table
                columns={[
                  { key: "name", title: "Name", dataIndex: "name" },
                  { key: "age", title: "Age", dataIndex: "age" },
                  { key: "city", title: "City", dataIndex: "city" },
                ]}
                data={[
                  { key: "1", name: "John Doe", age: 32, city: "New York" },
                  { key: "2", name: "Jane Smith", age: 28, city: "London" },
                  { key: "3", name: "Bob Johnson", age: 45, city: "Tokyo" },
                ]}
              />
            </div>
            <CodeBlock language="tsx" title="Basic Table">
              {`<Table
  columns={[
    { key: "name", title: "Name", dataIndex: "name" },
    { key: "age", title: "Age", dataIndex: "age" },
    { key: "city", title: "City", dataIndex: "city" },
  ]}
  data={[
    { key: "1", name: "John Doe", age: 32, city: "New York" },
    { key: "2", name: "Jane Smith", age: 28, city: "London" },
    { key: "3", name: "Bob Johnson", age: 45, city: "Tokyo" },
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
                  columns
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  TableColumn[]
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  -
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Table column definitions
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  data
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  any[]
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  -
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Data to display in table
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
                  pagination
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  boolean | object
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  true
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Pagination configuration
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TableSection;
