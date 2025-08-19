import React, { useState } from "react";
import { Modal, Button } from "@dynamicpixels/dynamicui";
import CodeBlock from "../CodeBlock";

const ModalSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="modal" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6">Modal</h2>
      <div className="border-b">
        <p className="text-gray-600 mb-6">
          Modals display content in an overlay, requiring user interaction to
          dismiss.
        </p>

        <h3 className="text-lg font-semibold mb-4">Examples</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-md font-medium mb-3">Basic Modal</h4>
            <div className="mb-4">
              <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
              <Modal
                open={isModalOpen}
                title="Basic Modal"
                onClose={() => setIsModalOpen(false)}
                onOk={() => setIsModalOpen(false)}
              >
                <p>
                  This is a basic modal with title, content, and footer buttons.
                </p>
                <p>
                  You can place any content here including forms, images, or
                  other components.
                </p>
              </Modal>
            </div>
            <CodeBlock language="tsx" title="Basic Modal">
              {`const [isOpen, setIsOpen] = useState(false);

<Button onClick={() => setIsOpen(true)}>Open Modal</Button>
<Modal
  open={isOpen}
  title="Basic Modal"
  onClose={() => setIsOpen(false)}
  onOk={() => setIsOpen(false)}
>
  <p>Modal content goes here.</p>
</Modal>`}
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
                  open
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  boolean
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  -
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Whether the modal is visible
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  title
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ReactNode
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  -
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Modal title
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  onOk
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  () =&gt; void
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  -
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  OK button click handler
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  onClose
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  () =&gt; void
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  -
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Close button click handler
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  okText
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  string
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  "OK"
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Text for OK button
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  cancelText
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  string
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  "Cancel"
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Text for Cancel button
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ModalSection;
