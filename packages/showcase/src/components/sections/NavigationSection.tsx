import React from "react";
import { Navigation } from "@dynamicpixels/dynamicui";
import CodeBlock from "../CodeBlock";

const NavigationSection = () => {
  return (
    <section id="navigation" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6">Navigation</h2>
      <div className="border-b">
        <p className="text-gray-600 mb-6">
          A navigation component providing a list of links with support for
          active states and sub-menus.
        </p>

        <h3 className="text-lg font-semibold mb-4">Examples</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-md font-medium mb-3">Horizontal Navigation</h4>
            <div className="mb-4">
              <nav className="flex space-x-8 border-b border-gray-200">
                <a
                  href="#"
                  className="border-b-2 border-blue-500 py-2 px-1 text-sm font-medium text-blue-600"
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  className="border-b-2 border-transparent py-2 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="border-b-2 border-transparent py-2 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
                >
                  Team
                </a>
                <a
                  href="#"
                  className="border-b-2 border-transparent py-2 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
                >
                  Settings
                </a>
              </nav>
            </div>
            <CodeBlock language="tsx" title="Horizontal Navigation">
              {`<Navigation mode="horizontal">
  <Navigation.Item key="dashboard" active>
    Dashboard
  </Navigation.Item>
  <Navigation.Item key="projects">
    Projects
  </Navigation.Item>
  <Navigation.Item key="team">
    Team
  </Navigation.Item>
  <Navigation.Item key="settings">
    Settings
  </Navigation.Item>
</Navigation>`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">Vertical Navigation</h4>
            <div className="mb-4">
              <nav className="space-y-1 w-64">
                <a
                  href="#"
                  className="bg-blue-100 text-blue-700 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                >
                  <span className="mr-3">📊</span>
                  Dashboard
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                >
                  <span className="mr-3">📁</span>
                  Projects
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                >
                  <span className="mr-3">👥</span>
                  Team
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                >
                  <span className="mr-3">⚙️</span>
                  Settings
                </a>
              </nav>
            </div>
            <CodeBlock language="tsx" title="Vertical Navigation">
              {`<Navigation mode="vertical">
  <Navigation.Item key="dashboard" icon={<DashboardIcon />} active>
    Dashboard
  </Navigation.Item>
  <Navigation.Item key="projects" icon={<ProjectIcon />}>
    Projects
  </Navigation.Item>
  <Navigation.Item key="team" icon={<TeamIcon />}>
    Team
  </Navigation.Item>
  <Navigation.Item key="settings" icon={<SettingsIcon />}>
    Settings
  </Navigation.Item>
</Navigation>`}
            </CodeBlock>
          </div>

          <div>
            <h4 className="text-md font-medium mb-3">
              Navigation with Sub-items
            </h4>
            <div className="mb-4">
              <nav className="space-y-1 w-64">
                <a
                  href="#"
                  className="bg-blue-100 text-blue-700 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                >
                  <span className="mr-3">📊</span>
                  Dashboard
                </a>
                <div>
                  <a
                    href="#"
                    className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                  >
                    <span className="mr-3">📁</span>
                    Projects
                    <span className="ml-auto">▼</span>
                  </a>
                  <div className="ml-6 space-y-1">
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 block px-2 py-1 text-sm rounded-md"
                    >
                      Web Projects
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 block px-2 py-1 text-sm rounded-md"
                    >
                      Mobile Apps
                    </a>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                >
                  <span className="mr-3">👥</span>
                  Team
                </a>
              </nav>
            </div>
            <CodeBlock language="tsx" title="Navigation with Sub-items">
              {`<Navigation mode="vertical">
  <Navigation.Item key="dashboard" icon={<DashboardIcon />} active>
    Dashboard
  </Navigation.Item>
  <Navigation.SubMenu key="projects" icon={<ProjectIcon />} title="Projects">
    <Navigation.Item key="web">Web Projects</Navigation.Item>
    <Navigation.Item key="mobile">Mobile Apps</Navigation.Item>
  </Navigation.SubMenu>
  <Navigation.Item key="team" icon={<TeamIcon />}>
    Team
  </Navigation.Item>
</Navigation>`}
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
                  mode
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  'horizontal' | 'vertical' | 'inline'
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  'vertical'
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Type of the navigation
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  theme
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  'light' | 'dark'
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  'light'
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Color theme of the navigation
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  defaultSelectedKeys
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  string[]
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  []
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Array of default selected item keys
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default NavigationSection;
