# DynamicUI

A modern, comprehensive React UI component library by **DynamicPixels**.

## ✨ Features

- 🎨 **Modern Design**: Clean, professional components with thoughtful design
- 🔧 **TypeScript**: Full TypeScript support with comprehensive type definitions
- 🎯 **Tree Shakeable**: Import only what you need for optimal bundle size
- 🖌️ **Customizable**: Built with Tailwind CSS for easy customization
- ♿ **Accessible**: WCAG compliant components with proper ARIA support
- 📱 **Responsive**: Mobile-first design approach
- ⚡ **Performant**: Optimized for speed and bundle size

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
import { Button, Input } from "@dynamicpixels/dynamicui";

function App() {
  return (
    <div>
      <Button variant="primary" size="large">
        Get Started
      </Button>
      <Input placeholder="Enter your email" />
    </div>
  );
}
```

## 📚 Components

DynamicUI includes a comprehensive set of components:

### Basic Components

- **Button** - Various styles and sizes
- **Input** - Text inputs with icons and validation
- **Tag** - Labels and badges
- **Badge** - Status indicators
- **Divider** - Content separators

### Data Display

- **Card** - Content containers
- **Table** - Data tables
- **Empty** - Empty states
- **Progress** - Progress indicators
- **Timeline** - Event timelines

### Navigation

- **Breadcrumb** - Navigation breadcrumbs
- **Navigation** - Pagination component
- **Steps** - Step indicators
- **Tabs** - Tab navigation

### Data Entry

- **CheckBox** - Checkboxes
- **Select** - Dropdown selections
- **Slider** - Range sliders
- **Switch** - Toggle switches
- **Cascader** - Cascading selections
- **UploadArea** - File upload areas

### Feedback

- **Modal** - Modal dialogs
- **Spin** - Loading spinners

### Other

- **Icons** - Icon collection
- **Transfer** - Transfer lists

## 🎨 Styling

DynamicUI is built with Tailwind CSS. Make sure to include Tailwind CSS in your project:

```bash
npm install tailwindcss
```

Add the DynamicUI components to your Tailwind config:

```js
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@dynamicpixels/dynamicui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## 📖 Documentation

For detailed documentation, examples, and API reference, visit:

**[https://dynamicui.dynamicpixels.dev](https://dynamicui.dynamicpixels.dev)**

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

MIT © [DynamicPixels](https://dynamicpixels.dev)

## 🏢 About DynamicPixels

DynamicPixels is a technology company focused on creating innovative digital solutions. Learn more at [dynamicpixels.dev](https://dynamicpixels.dev).

---

Made with ❤️ by the DynamicPixels team
