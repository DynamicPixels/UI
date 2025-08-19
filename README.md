# 🚀 DynamicUI - React Component Library

[![NPM Version](https://img.shields.io/npm/v/@dynamicpixels/dynamicui)](https://www.npmjs.com/package/@dynamicpixels/dynamicui)
[![License](https://img.shields.io/npm/l/@dynamicpixels/dynamicui)](https://github.com/dynamicpixels/dynamicui/blob/main/LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18+-61dafb)](https://reactjs.org/)

A modern, comprehensive React UI component library by **DynamicPixels**. Build beautiful applications with our collection of high-quality, accessible components featuring a custom design system and dark/light theme support.

<div align="center">
  <img src="https://via.placeholder.com/800x400/3b82f6/ffffff?text=DynamicUI+Component+Library" alt="DynamicUI Preview" />
</div>

## ✨ Features

- 🎨 **Modern Design**: Clean, professional components with custom DynamicUI design system
- 🌓 **Dark/Light Theme**: Built-in theme switching with system preference detection
- 🔧 **TypeScript**: Full TypeScript support with comprehensive type definitions
- 🎯 **Tree Shakeable**: Import only what you need for optimal bundle size
- 🖌️ **Customizable**: Built with Tailwind CSS for easy theme customization
- ♿ **Accessible**: WCAG compliant components with proper ARIA support
- 📱 **Responsive**: Mobile-first design approach with responsive breakpoints
- ⚡ **Performant**: Optimized for speed and minimal bundle size
- 🎭 **Rich Components**: 25+ production-ready components
- 🔄 **Consistent API**: Uniform props interface across all components

## 📦 Installation

```bash
npm install @dynamicpixels/dynamicui
# or
yarn add @dynamicpixels/dynamicui
# or
pnpm add @dynamicpixels/dynamicui
```

## 🚀 Quick Start

```tsx
import { Button, Input, Card, Switch } from "@dynamicpixels/dynamicui";

function App() {
  return (
    <div className="p-6 space-y-4">
      <Card title="Welcome to DynamicUI" variant="elevated">
        <div className="space-y-4">
          <Input 
            placeholder="Enter your email" 
            size="large" 
            variant="filled"
          />
          <div className="flex items-center gap-4">
            <Switch checked={true} />
            <span>Enable notifications</span>
          </div>
          <Button variant="primary" size="large" block>
            Get Started
          </Button>
        </div>
      </Card>
    </div>
  );
}
```

## 📚 Documentation & Examples

Visit our comprehensive documentation and live examples:

**[🌐 Live Showcase](http://localhost:3000)** - Interactive component demos with code examples

## 🧩 Complete Component Library

### ✅ Available Components (25+)

#### Form & Input Components
- **Button** - Various styles, sizes, loading states, and icons
- **Input** - Text inputs with validation, icons, and different variants
- **CheckBox** - Customizable checkboxes with indeterminate state
- **Switch** - Toggle switches with multiple sizes
- **Select** - Dropdown selections with search and multi-select
- **Slider** - Range sliders with marks and tooltips
- **Cascader** - Hierarchical data selection
- **UploadArea** - Drag & drop file upload with progress

#### Display Components
- **Card** - Content containers with headers and actions
- **Badge** - Status indicators and counters
- **Tag** - Labels, categories, and removable tags
- **Empty** - Empty state illustrations
- **Divider** - Content separators with text
- **Progress** - Linear and circular progress indicators
- **Spin** - Loading spinners with different sizes

#### Navigation Components
- **Tabs** - Tab navigation with different styles
- **Breadcrumb** - Navigation breadcrumbs
- **Navigation** - Pagination component
- **Steps** - Step-by-step process indicators
- **Anchor** - Smooth scrolling anchor navigation

#### Data Display
- **Table** - Advanced data tables with sorting and pagination
- **Timeline** - Event timelines with customizable content
- **Transfer** - Dual-list transfer component

#### Feedback Components
- **Modal** - Dialog modals with different sizes
- **Dropdown** - Context menus and action dropdowns

#### Utility Components
- **Icons** - Comprehensive icon library integration

## 🎨 Styling & Theme Setup

DynamicUI is built with Tailwind CSS and includes built-in dark/light theme support.

### Tailwind Configuration

Add the library to your Tailwind configuration:

```js
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@dynamicpixels/dynamicui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      // DynamicUI theme extensions will be applied automatically
    },
  },
  plugins: [],
};
```

### Theme Setup

DynamicUI automatically handles theme switching with system preference detection:

```tsx
// The theme is managed automatically, but you can control it manually:
import { Switch } from "@dynamicpixels/dynamicui";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <Switch 
      checked={isDark} 
      onChange={toggleTheme}
      size="small"
    />
  );
}
```

### CSS Variables

DynamicUI uses CSS custom properties for consistent theming:

```css
/* globals.css */
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  /* ... more variables */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... dark mode variables */
}
```

## 🏗️ Project Structure

This is a monorepo containing:

```
dynamic-ui/
├── packages/
│   ├── dynamicui/          # Main UI library package
│   │   ├── src/
│   │   │   ├── components/  # React components
│   │   │   ├── utils/       # Utility functions
│   │   │   └── index.ts     # Main exports
│   │   └── package.json
│   │
│   └── showcase/            # Documentation website
│       ├── src/
│       │   └── app/         # Next.js app pages
│       └── package.json
│
└── package.json             # Root workspace config
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm 7+ (for workspaces support)

### Setup

```bash
# Clone the repository
git clone https://github.com/dynamicpixels/dynamicui.git
cd dynamicui

# Install dependencies
npm install

# Build the library
npm run build:lib

# Start the showcase website
npm run dev
```

### Available Scripts

#### Root Level Commands

```bash
# Development
npm run dev                 # Start showcase website in development mode
npm run build              # Build both library and showcase
npm run build:lib          # Build only the DynamicUI library  
npm run build:showcase     # Build only the showcase website

# Library Development
npm run dev:lib            # Build library in watch mode
npm run type-check         # Run TypeScript type checking
npm run lint               # Lint all packages
```

#### Library Package (`packages/dynamicui`)

```bash
cd packages/dynamicui

npm run build              # Build the library for production
npm run build:watch        # Build in watch mode for development
npm run type-check         # TypeScript type checking
npm run lint              # ESLint code checking
```

#### Showcase Package (`packages/showcase`)

```bash
cd packages/showcase

npm run dev               # Start Next.js development server
npm run build             # Build for production
npm run start             # Start production server
npm run lint              # Lint showcase code
```

## 📖 Component Examples

### Button Component

```tsx
import { Button } from '@dynamicpixels/dynamicui';

// Different variants
<Button variant="primary">Primary Action</Button>
<Button variant="default">Default</Button>
<Button variant="danger">Delete</Button>
<Button variant="text">Text Button</Button>

// Different sizes
<Button size="small">Small</Button>
<Button size="default">Default</Button>
<Button size="large">Large</Button>

// States and features
<Button loading>Loading...</Button>
<Button disabled>Disabled</Button>
<Button block>Full Width</Button>
<Button icon={<PlusIcon />}>With Icon</Button>
```

### Input Component

```tsx
import { Input } from '@dynamicpixels/dynamicui';

// Different variants
<Input placeholder="Default input" />
<Input variant="filled" placeholder="Filled style" />
<Input variant="borderless" placeholder="Borderless" />

// Sizes and states
<Input size="small" placeholder="Small input" />
<Input size="large" placeholder="Large input" />
<Input error placeholder="Error state" />
<Input disabled placeholder="Disabled" />

// With icons and actions
<Input 
  placeholder="Search..." 
  prefix={<SearchIcon />}
  suffix={<Button size="small">Go</Button>}
/>
```

### Card Component

```tsx
import { Card, Button } from "@dynamicpixels/dynamicui";

<Card 
  title="Project Settings" 
  variant="elevated"
  extra={<Button variant="text" size="small">Edit</Button>}
>
  <div className="space-y-4">
    <p>Configure your project settings here.</p>
    <Button variant="primary">Save Changes</Button>
  </div>
</Card>
```

### Switch & Form Components

```tsx
import { Switch, CheckBox, Select } from "@dynamicpixels/dynamicui";

// Theme toggle switch
<div className="flex items-center gap-2">
  <SunIcon />
  <Switch size="small" />
  <MoonIcon />
</div>

// Checkbox with states
<CheckBox checked={true}>Enable notifications</CheckBox>
<CheckBox indeterminate={true}>Select all</CheckBox>

// Select dropdown
<Select 
  placeholder="Choose an option"
  options={[
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue.js' },
    { value: 'angular', label: 'Angular' }
  ]}
/>
```

### Advanced Components

```tsx
import { Table, Modal, Timeline, Progress } from "@dynamicpixels/dynamicui";

// Data table
<Table 
  columns={columns}
  dataSource={data}
  pagination={{ pageSize: 10 }}
  rowSelection={{ type: 'checkbox' }}
/>

// Modal dialog
<Modal 
  title="Confirm Action" 
  open={isOpen}
  onCancel={() => setIsOpen(false)}
  footer={[
    <Button key="cancel" onClick={() => setIsOpen(false)}>Cancel</Button>,
    <Button key="confirm" variant="primary">Confirm</Button>
  ]}
>
  <p>Are you sure you want to proceed?</p>
</Modal>

// Progress indicators
<Progress percent={75} status="active" />
<Progress 
  type="circle" 
  percent={90} 
  status="success"
  format={(percent) => `${percent}% Complete`}
/>
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details on:

- 📋 **Code of Conduct** - Guidelines for community interaction
- 🔄 **Development Process** - How to set up and work on the project
- 🚀 **Submitting Pull Requests** - PR guidelines and review process
- 🐛 **Issue Reporting** - How to report bugs and request features
- 💡 **Component Guidelines** - Standards for creating new components

### Quick Contribution Setup

```bash
# Fork and clone the repository
git clone https://github.com/yourusername/dynamicui.git
cd dynamicui

# Install dependencies
npm install

# Start development
npm run dev

# Make your changes and create a PR!
```

## 🌟 Why Choose DynamicUI?

### For Developers
- **Consistent API** - All components follow the same prop patterns
- **TypeScript First** - Built with TypeScript for better DX
- **Zero Config** - Works out of the box with sensible defaults
- **Tree Shakeable** - Only bundle what you use
- **Modern Stack** - Built with latest React patterns and best practices

### For Designers
- **Design System** - Consistent visual language across all components
- **Theme Support** - Easy customization with CSS variables
- **Responsive** - Mobile-first approach with responsive breakpoints
- **Accessible** - WCAG 2.1 AA compliant components

### For Teams
- **Documentation** - Comprehensive docs with interactive examples
- **Reliable** - Thoroughly tested and production-ready
- **Community** - Active community and regular updates
- **Support** - Professional support available from DynamicPixels

## 📊 Bundle Size

DynamicUI is optimized for minimal bundle impact:

- **Core Library**: ~45KB gzipped
- **Individual Components**: 2-8KB each
- **Tree Shaking**: Import only what you need
- **Zero Dependencies**: No external runtime dependencies

```bash
# Analyze bundle impact
npm run build:lib
npm run analyze
```

## 📄 License

MIT © [DynamicPixels](https://dynamicpixels.dev) - see the [LICENSE](LICENSE) file for details.

## 🏢 About DynamicPixels

DynamicPixels is a technology company focused on creating innovative digital solutions and developer tools. We believe in building high-quality, accessible software that empowers developers to create exceptional user experiences.

### Our Mission
To provide developers with the tools they need to build beautiful, accessible, and performant applications without compromising on design quality or developer experience.

### Connect With Us
- **🌐 Website**: [dynamicpixels.dev](https://dynamicpixels.dev)
- **📧 Email**: hello@dynamicpixels.dev  
- **🐙 GitHub**: [@DynamicPixels](https://github.com/DynamicPixels)
- **🐦 Twitter**: [@dynamicpixels](https://twitter.com/dynamicpixels)

## 🙏 Acknowledgments

DynamicUI is built on the shoulders of giants. We'd like to thank:

- **[React](https://reactjs.org/)** - The foundation of our component library
- **[Tailwind CSS](https://tailwindcss.com/)** - For the incredible styling system
- **[Rollup](https://rollupjs.org/)** - For efficient bundling and tree-shaking
- **[Next.js](https://nextjs.org/)** - Powering our documentation and showcase
- **[TypeScript](https://www.typescriptlang.org/)** - For type safety and better DX
- **[Lucide](https://lucide.dev/)** - For the beautiful icon system

Special thanks to the open-source community for inspiration and feedback that helps make DynamicUI better every day.

## 🚀 What's Next?

We're constantly improving DynamicUI. Here's what's coming:

- 📱 **React Native Support** - Mobile component library
- 🎨 **Figma Design System** - Complete design tokens and components
- 🔌 **Plugin System** - Extensible architecture for custom components
- 📚 **Storybook Integration** - Enhanced component documentation
- 🌍 **i18n Support** - Built-in internationalization

---

<div align="center">

**Made with ❤️ by the DynamicPixels team**

[⭐ Star us on GitHub](https://github.com/DynamicPixels/dynamicui) • [📖 Read the Docs](http://localhost:3000) • [🐛 Report Issues](https://github.com/DynamicPixels/dynamicui/issues)

</div>
