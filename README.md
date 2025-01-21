# inZOI Guide - The Ultimate Resource for inZOI Players

Welcome to inZOI Guide! This is an open-source guide website for inZOI game, built with Docusaurus V3, TailwindCSS and Shadcn/UI, providing a modern, beautiful and accessible platform for players.

[**Visit Website →**](https://inzoiguide.com)

## About

inZOI Guide aims to provide:
- 📚 Comprehensive gameplay guides
- 🎮 Detailed game mechanics explanations
- 🛠 Useful tips and strategies
- 🔧 MOD installation and usage guides
- 👥 Active player community

## Quick Start

### Local Development

1. Clone the repository:

```bash
git clone https://github.com/namnguyenthanhwork/docusaurus-tailwind-shadcn-template.git
cd docusaurus-tailwind-shadcn-template
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Build for production:

```bash
npm run build
```

## Project Structure

```
docusaurus-tailwind-shadcn-template/
├── blog/
├── docs/
├── src/
│   ├── components/
│   │   └── ui/           # Shadcn/UI components
│   ├── css/
│   │   └── custom.css    # TailwindCSS and custom styles
│   ├── lib/
│   │   └── utils.ts      # Utility functions
│   └── pages/            # React pages
├── static/
├── tailwind.config.js    # TailwindCSS configuration
├── postcss.config.js     # PostCSS configuration
└── docusaurus.config.js  # Docusaurus configuration
```

## Configuration

### TailwindCSS Setup

The project includes a custom TailwindCSS configuration optimized for Docusaurus:

```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./docs/**/*.{js,jsx,ts,tsx}",
    "./blog/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'], // Support Docusaurus dark mode
  // ... rest of the configuration
}
```

### Shadcn/UI Components

All Shadcn/UI components are located in `src/components/ui/`. To use a component:

```tsx
import { Button } from '../components/ui/button';

function MyComponent() {
  return (
    <Button variant="outline">
      Click me
    </Button>
  );
}
```

**Note:** You can't install Shadcn/UI via CLI, so you need to copy the components (manual) and change the import path.

### Search Configuration

The local search is configured in `docusaurus.config.js`:

```javascript
themes: [
  [
    require.resolve('@easyops-cn/docusaurus-search-local'),
    {
      indexPages: true,
      docsRouteBasePath: '/docs',
      hashed: true,
      language: ['vi'],
      highlightSearchTermsOnTargetPage: false,
      searchResultContextMaxLength: 50,
      searchResultLimits: 8,
      searchBarShortcut: true,
      searchBarShortcutHint: true
    }
  ]
],
```

## Customization

### Theming

1. Modify colors in `tailwind.config.js`
2. Update CSS variables in `src/css/custom.css`
3. Customize Shadcn/UI components in `src/components/ui/`

### Adding New Components

1. Create component in `src/components/ui/` or `src/components/`
2. Import and use in your pages/docs

Example:

```tsx
// src/components/ui/custom-button.tsx
import { Button } from './button';

export function CustomButton({ children }) {
  return (
    <Button className="custom-styles">
      {children}
    </Button>
  );
}
```
## Support

- 📚 [Docusaurus Documentation](https://docusaurus.io/)
- 🎨 [Shadcn/UI Documentation](https://ui.shadcn.com/)
- 🌈 [TailwindCSS Documentation](https://tailwindcss.com/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

This project is derived from [docusaurus-tailwind-shadcn-template](https://github.com/namnguyenthanhwork/docusaurus-tailwind-shadcn-template)