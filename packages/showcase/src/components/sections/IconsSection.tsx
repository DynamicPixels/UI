import React from "react";
import {
  MailIcon,
  LockIcon,
  XIcon,
  SearchOutlined,
  LeftOutlined,
  RightOutlined,
  DeleteOutlined,
  InboxOutlined,
  PaperClipOutlined,
} from "@dynamicpixels/dynamicui";
import CodeBlock from "../CodeBlock";

const IconsSection = () => {
  return (
    <section id="icons" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6">Icons</h2>
      <div className="border-b">
        <p className="text-gray-600 mb-6">
          A collection of commonly used icons for your applications. Icons are
          provided as React components for easy customization and styling.
        </p>

        <h3 className="text-lg font-semibold mb-4">Examples</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-md font-medium mb-3">Basic Icons</h4>
            <div className="mb-4">
              <div className="flex flex-wrap gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm">
                  <span className="text-2xl mb-2">🏠</span>
                  <span className="text-xs text-gray-600">Home</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm">
                  <span className="text-2xl mb-2">👤</span>
                  <span className="text-xs text-gray-600">User</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm">
                  <span className="text-2xl mb-2">⚙️</span>
                  <span className="text-xs text-gray-600">Settings</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm">
                  <span className="text-2xl mb-2">📧</span>
                  <span className="text-xs text-gray-600">Mail</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm">
                  <span className="text-2xl mb-2">🔔</span>
                  <span className="text-xs text-gray-600">Bell</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm">
                  <span className="text-2xl mb-2">❤️</span>
                  <span className="text-xs text-gray-600">Heart</span>
                </div>
              </div>
            </div>
            <CodeBlock language="tsx" title="Basic Icons">
              {`import { HomeIcon, UserIcon, SettingsIcon } from '@dynamicpixels/dynamicui';

<HomeIcon />
<UserIcon />
<SettingsIcon />
<MailIcon />
<BellIcon />
<HeartIcon />`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">Icon Sizes</h4>
            <div className="mb-4">
              <div className="flex items-center gap-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex flex-col items-center">
                  <span className="text-sm mb-2">🏠</span>
                  <span className="text-xs text-gray-600">Small (16px)</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-lg mb-2">🏠</span>
                  <span className="text-xs text-gray-600">Medium (24px)</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl mb-2">🏠</span>
                  <span className="text-xs text-gray-600">Large (32px)</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl mb-2">🏠</span>
                  <span className="text-xs text-gray-600">XLarge (48px)</span>
                </div>
              </div>
            </div>
            <CodeBlock language="tsx" title="Icon Sizes">
              {`<HomeIcon size="small" />    // 16px
<HomeIcon size="medium" />   // 24px (default)
<HomeIcon size="large" />    // 32px
<HomeIcon size="xlarge" />   // 48px

// Or custom size
<HomeIcon size={20} />`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">Icon Colors</h4>
            <div className="mb-4">
              <div className="flex items-center gap-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex flex-col items-center">
                  <span className="text-2xl mb-2 text-gray-600">❤️</span>
                  <span className="text-xs text-gray-600">Default</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl mb-2 text-blue-600">❤️</span>
                  <span className="text-xs text-gray-600">Primary</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl mb-2 text-green-600">❤️</span>
                  <span className="text-xs text-gray-600">Success</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl mb-2 text-yellow-600">❤️</span>
                  <span className="text-xs text-gray-600">Warning</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl mb-2 text-red-600">❤️</span>
                  <span className="text-xs text-gray-600">Danger</span>
                </div>
              </div>
            </div>
            <CodeBlock language="tsx" title="Icon Colors">
              {`<HeartIcon color="default" />
<HeartIcon color="primary" />
<HeartIcon color="success" />
<HeartIcon color="warning" />
<HeartIcon color="danger" />

// Custom color
<HeartIcon style={{ color: '#ff6b6b' }} />`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">Icon Library</h4>
            <div className="mb-4">
              <div className="grid grid-cols-6 gap-4 p-4 bg-gray-50 rounded-lg">
                {[
                  "🏠",
                  "👤",
                  "⚙️",
                  "📧",
                  "🔔",
                  "❤️",
                  "⭐",
                  "🔍",
                  "➕",
                  "❌",
                  "✏️",
                  "🗑️",
                  "📁",
                  "📄",
                  "📊",
                  "🔒",
                  "🔓",
                  "👁️",
                  "📱",
                  "💻",
                  "🌐",
                  "📷",
                  "🎵",
                  "🎬",
                ].map((icon, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <span className="text-2xl mb-2">{icon}</span>
                  </div>
                ))}
              </div>
            </div>
            <CodeBlock language="tsx" title="Available Icons">
              {`// Common Icons
<HomeIcon />
<UserIcon />
<SettingsIcon />
<MailIcon />
<BellIcon />
<HeartIcon />
<StarIcon />
<SearchIcon />
<PlusIcon />
<CloseIcon />
<EditIcon />
<DeleteIcon />

// File Icons
<FolderIcon />
<FileIcon />
<ChartIcon />

// Security Icons
<LockIcon />
<UnlockIcon />
<EyeIcon />

// Device Icons
<PhoneIcon />
<LaptopIcon />
<GlobeIcon />

// Media Icons
<CameraIcon />
<MusicIcon />
<VideoIcon />`}
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
                  size
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  'small' | 'medium' | 'large' | 'xlarge' | number
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  'medium'
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Size of the icon
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  color
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  'default' | 'primary' | 'success' | 'warning' | 'danger'
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  'default'
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Color theme of the icon
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
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  style
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  CSSProperties
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  -
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Inline styles for custom styling
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default IconsSection;
