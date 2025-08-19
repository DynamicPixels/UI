# Contributing to DynamicUI

Thank you for your interest in contributing to DynamicUI! We welcome contributions from the community and are excited to see what you can help us build.

## 🤝 Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please be respectful, inclusive, and professional in all interactions.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm 7+ (for workspaces support)
- Git

### Development Setup

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:

   ```bash
   git clone https://github.com/YOUR_USERNAME/dynamicui.git
   cd dynamicui
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Build the library**:

   ```bash
   npm run build:lib
   ```

5. **Start the development server**:

   ```bash
   npm run dev
   ```

6. **Create a new branch** for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📁 Project Structure

```
dynamic-ui/
├── packages/
│   ├── dynamicui/          # Main UI library
│   │   ├── src/
│   │   │   ├── components/ # React components
│   │   │   ├── utils/      # Utility functions
│   │   │   └── index.ts    # Main exports
│   │   └── package.json
│   │
│   └── showcase/           # Documentation website
│       ├── src/app/        # Next.js pages
│       └── package.json
│
└── package.json            # Root workspace
```

## 🧩 Adding New Components

### 1. Create the Component

Create a new file in `packages/dynamicui/src/components/YourComponent.tsx`:

```tsx
import React from "react";
import { cn } from "../utils/cn";

export interface YourComponentProps {
  children?: React.ReactNode;
  variant?: "default" | "primary";
  className?: string;
}

const YourComponent: React.FC<YourComponentProps> = ({
  children,
  variant = "default",
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "base-styles",
        variant === "primary" && "primary-styles",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

YourComponent.displayName = "YourComponent";

export default YourComponent;
```

### 2. Export the Component

Add exports to `packages/dynamicui/src/index.ts`:

```typescript
export { default as YourComponent } from "./components/YourComponent";
export type { YourComponentProps } from "./components/YourComponent";
```

### 3. Add Documentation

Create examples in the showcase website at `packages/showcase/src/app/components/page.tsx`.

### 4. Build and Test

```bash
npm run build:lib
npm run dev
```

## 🎨 Design Guidelines

### Component Principles

- **Accessible**: Follow WCAG guidelines
- **Composable**: Components should work well together
- **Customizable**: Support className and style props
- **Consistent**: Follow established patterns
- **TypeScript**: Full type safety

### Styling

- Use Tailwind CSS classes
- Use the `cn` utility for class merging
- Support dark/light themes
- Follow responsive design principles

### Props API

- Use descriptive prop names
- Provide sensible defaults
- Support standard HTML attributes via spread props
- Include proper TypeScript definitions

## 🧪 Testing

Currently, we're focusing on manual testing via the showcase website. Automated testing will be added in the future.

### Manual Testing

1. Add your component to the showcase website
2. Test all variants and props
3. Verify responsive behavior
4. Check accessibility with screen readers

## 📝 Documentation

### Component Documentation

Each component should include:

- Clear description of purpose
- Props table with types and descriptions
- Usage examples (basic and advanced)
- Accessibility notes
- Styling customization examples

### Code Comments

- Use JSDoc comments for component props
- Comment complex logic
- Include examples in comments where helpful

## 🚀 Submitting Changes

### Pull Request Process

1. **Create a clear PR title** describing the change
2. **Fill out the PR template** (if available)
3. **Include screenshots** for UI changes
4. **Update documentation** as needed
5. **Ensure builds pass** locally

### PR Requirements

- [ ] Code builds successfully
- [ ] Component works in showcase website
- [ ] TypeScript types are correct
- [ ] Documentation is updated
- [ ] Follows existing code style

### Commit Message Format

Use clear, descriptive commit messages:

```
feat(Button): add loading state support
fix(Input): resolve focus ring issue
docs(Card): update examples and props table
```

## 🐛 Reporting Issues

### Bug Reports

When reporting bugs, please include:

- **Description**: Clear description of the issue
- **Steps to reproduce**: Detailed steps
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happens
- **Environment**: Browser, OS, Node.js version
- **Screenshots**: If applicable

### Feature Requests

For feature requests, please include:

- **Use case**: Why is this feature needed?
- **Proposed API**: How should it work?
- **Examples**: Mockups or examples from other libraries
- **Priority**: How important is this feature?

## 📋 Development Guidelines

### Code Style

- Use TypeScript for all new code
- Follow existing patterns and conventions
- Use meaningful variable and function names
- Keep components focused and single-purpose

### File Organization

- One component per file
- Use PascalCase for component files
- Group related utilities together
- Keep exports organized in index files

### Performance

- Minimize bundle size impact
- Avoid unnecessary re-renders
- Use React best practices
- Consider tree-shaking implications

## 🎯 Roadmap

### Current Priorities

1. **Complete Core Components** - Button, Input, Card, Select, etc.
2. **Theming System** - Dark/light mode support
3. **Testing Framework** - Automated component testing
4. **Accessibility** - Full WCAG compliance
5. **Documentation** - Comprehensive guides and examples

### Future Goals

- Storybook integration
- Figma design tokens
- Animation system
- Advanced theming
- Component composition patterns

## 🙋‍♀️ Getting Help

- **Questions**: Open a GitHub Discussion
- **Bugs**: Create a GitHub Issue
- **Chat**: Join our community (link coming soon)
- **Email**: Contact us at hello@dynamicpixels.dev

## 🏆 Recognition

Contributors will be recognized in our README and changelog. We appreciate all contributions, no matter how small!

## 📄 License

By contributing to DynamicUI, you agree that your contributions will be licensed under the MIT License.

---

Thank you for helping make DynamicUI better! 🚀
