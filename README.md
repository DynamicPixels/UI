# 🚀 DynamicUI - React Component Library

[![NPM Version](https://img.shields.io/npm/v/@dynamicpixels/dynamicui)](https://www.npmjs.com/package/@dynamicpixels/dynamicui)
[![License](https://img.shields.io/npm/l/@dynamicpixels/dynamicui)](https://github.com/dynamicpixels/dynamicui/blob/main/LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue)](https://www.typescriptlang.org/)

A modern, comprehensive React UI component library by **DynamicPixels**. Build beautiful applications with our collection of high-quality, accessible components.

![DynamicUI Preview](https://via.placeholder.com/800x400/3b82f6/ffffff?text=DynamicUI+Component+Library)

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
import { Button, Input, Card } from "@dynamicpixels/dynamicui";

function App() {
  return (
    <div>
      <Card title="Welcome to DynamicUI" variant="elevated">
        <Input placeholder="Enter your email" size="large" />
        <Button variant="primary" size="large" block>
          Get Started
        </Button>
      </Card>
    </div>
  );
}
```

## 📚 Documentation & Examples

Visit our comprehensive documentation and live examples:

**[https://dynamicui.dynamicpixels.dev](http://localhost:3000)**

## 🧩 Available Components

### Basic Components

- **Button** - Various styles, sizes, and states
- **Input** - Text inputs with icons and validation
- **Card** - Content containers with multiple variants

### Coming Soon

- **Badge** - Status indicators
- **Tag** - Labels and categories
- **Divider** - Content separators
- **Progress** - Progress indicators
- **Table** - Data tables
- **Empty** - Empty states
- **Timeline** - Event timelines
- **Breadcrumb** - Navigation breadcrumbs
- **Navigation** - Pagination component
- **Steps** - Step indicators
- **Tabs** - Tab navigation
- **CheckBox** - Checkboxes
- **Select** - Dropdown selections
- **Slider** - Range sliders
- **Switch** - Toggle switches
- **Cascader** - Cascading selections
- **UploadArea** - File upload areas
- **Modal** - Modal dialogs
- **Spin** - Loading spinners
- **Transfer** - Transfer lists

## 🎨 Styling Setup

DynamicUI is built with Tailwind CSS. Add the library to your Tailwind configuration:

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

#### Root Level

- `npm run dev` - Start showcase website in development
- `npm run build` - Build both library and website
- `npm run build:lib` - Build only the library
- `npm run build:showcase` - Build only the website

#### Library (`packages/dynamicui`)

- `npm run build` - Build the library
- `npm run build:watch` - Build in watch mode
- `npm run type-check` - Type checking
- `npm run lint` - Lint the code

#### Showcase (`packages/showcase`)

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

## 📖 Component Examples

### Button Component

```tsx
import { Button } from '@dynamicpixels/dynamicui';

// Different variants
<Button variant="primary">Primary</Button>
<Button variant="default">Default</Button>
<Button variant="danger">Danger</Button>

// Different sizes
<Button size="small">Small</Button>
<Button size="default">Default</Button>
<Button size="large">Large</Button>

// With loading state
<Button loading>Loading...</Button>

// Disabled state
<Button disabled>Disabled</Button>
```

### Input Component

```tsx
import { Input } from '@dynamicpixels/dynamicui';

// Different variants
<Input placeholder="Default input" />
<Input variant="filled" placeholder="Filled input" />
<Input variant="borderless" placeholder="Borderless" />

// Different sizes
<Input size="small" placeholder="Small" />
<Input size="large" placeholder="Large" />

// With error state
<Input error placeholder="Error state" />
```

### Card Component

```tsx
import { Card } from "@dynamicpixels/dynamicui";

<Card title="Card Title" variant="elevated" extra={<span>Extra content</span>}>
  <p>Your content here</p>
</Card>;
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details on:

- Code of Conduct
- Development Process
- Submitting Pull Requests
- Issue Reporting

## 📄 License

MIT © [DynamicPixels](https://dynamicpixels.dev)

## 🏢 About DynamicPixels

DynamicPixels is a technology company focused on creating innovative digital solutions. We build tools and libraries that help developers create better user experiences.

**Website**: [dynamicpixels.dev](https://dynamicpixels.dev)  
**Email**: hello@dynamicpixels.dev

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Bundled with [Rollup](https://rollupjs.org/)
- Documentation powered by [Next.js](https://nextjs.org/)

---

Made with ❤️ by the DynamicPixels team
