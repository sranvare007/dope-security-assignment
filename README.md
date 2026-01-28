# Character Management Table

A performant React + TypeScript table application that efficiently renders and manages 1000+ character entries with advanced filtering, sorting, and selection capabilities.

## 🚀 Features

### Core Functionality

- ✅ **Efficient Rendering**: Handles 1000+ rows with optimized performance
- ✅ **Row Selection**: Multi-select with individual and "select all" checkboxes
- ✅ **Health Status Filtering**: Multi-select dropdown filter for Healthy/Injured/Critical
- ✅ **Power Level Sorting**: Ascending/Descending sort with visual indicators
- ✅ **Real-time Search**: Search by character name or location
- ✅ **Viewed/Unviewed Tracking**: Mark selected rows and log their IDs to console
- ✅ **Loading States**: Appropriate loading spinner during data fetch
- ✅ **Accessibility**: ARIA labels, keyboard navigation, and semantic HTML

### Technical Features

- 📝 **TypeScript**: Fully typed with strict type checking
- 🧪 **Test Coverage**: Comprehensive Vitest tests with @testing-library
- 🎨 **Clean UI/UX**: Modern, responsive design with smooth interactions
- ♿ **Accessible**: WCAG compliant with proper ARIA attributes
- 🏗️ **Maintainable**: Separation of concerns, reusable components
- ⚡ **Optimized**: useMemo, useCallback for performance

## 📋 Requirements Met

| Requirement                      | Status | Implementation                                |
| -------------------------------- | ------ | --------------------------------------------- |
| Render 1000 rows efficiently     | ✅     | Optimized rendering with React hooks          |
| Selection column with checkboxes | ✅     | Individual + Select All functionality         |
| Health filter dropdown           | ✅     | Multi-select filter with icon                 |
| Mark as viewed/unviewed          | ✅     | Console logs selected IDs, works with filters |
| Real-time search                 | ✅     | Searches name and location                    |
| Loading state                    | ✅     | Spinner with accessible label                 |
| Power level sorting              | ✅     | Chevron icon for asc/desc/none                |
| Jest tests                       | ✅     | Vitest with comprehensive test cases          |
| TypeScript                       | ✅     | Full type safety                              |
| Clean code                       | ✅     | Modular, maintainable architecture            |
| Accessibility                    | ✅     | ARIA labels, semantic HTML                    |
| README                           | ✅     | This document                                 |

## 🛠️ Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Vitest** - Unit testing
- **@testing-library/react** - Component testing
- **Storybook 10** - Component development and documentation
- **Tailwind CSS** - Utility-first styling (PostCSS, Autoprefixer)
- **react-window** - Virtualized list for efficient row rendering

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start Storybook (component development)
npm run storybook

# Build for production
npm run build

# Build Storybook
npm run build-storybook

# Preview production build
npm run preview

# Run tests
npm test

# Run tests in UI mode
npm run test:ui

# Run tests once (CI mode)
npm run test:run

# Lint
npm run lint
```

## 🎯 Usage

### Search

Type in the search box to filter characters by name or location in real-time.

### Filter by Health

1. Click the filter icon in the "Health" column header
2. Select one or more health statuses (Healthy, Injured, Critical)
3. Table updates automatically

### Sort by Power

Click the sort icon in the "Power" column header to cycle through:

- No sort (original order)
- Ascending (lowest to highest)
- Descending (highest to lowest)

### Select Rows

- Click individual checkboxes to select specific rows
- Use the header checkbox to select/deselect all visible rows
- Selected count shows in the action buttons

### Mark as Viewed/Unviewed

1. Select one or more rows
2. Click "Mark as Viewed" or "Mark as Unviewed"
3. Selected character IDs are logged to the browser console
4. Works correctly with active filters

## 📂 Project Structure

```
table-management/
├── .storybook/                # Storybook configuration
│   ├── main.ts
│   ├── preview.ts
│   └── vitest.setup.ts
├── public/
│   └── data.json              # Mock data (1000 characters)
├── src/
│   ├── components/
│   │   ├── ActionButtons/     # Action buttons component
│   │   ├── HealthBadge/       # Health status badge
│   │   ├── HealthFilter/      # Health filter dropdown
│   │   ├── SearchBox/         # Search input component
│   │   ├── SortButton/        # Sort toggle button
│   │   ├── Table/             # Main table component
│   │   ├── TableHeader/       # Table header component
│   │   └── TableRow/          # Table row component
│   ├── stories/               # Storybook example stories
│   ├── test/
│   │   └── setup.ts           # Test configuration
│   ├── types.ts               # TypeScript type definitions
│   ├── App.tsx                # Root component (Tailwind)
│   ├── index.css              # Global styles + Tailwind directives
│   └── main.tsx               # Entry point
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS (Tailwind, Autoprefixer)
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## 📚 Storybook

The project includes Storybook for component development and documentation. Each component has its own stories showcasing different variants and states.

### Available Component Stories

- **SearchBox** - Input states, placeholders, with/without values
- **ActionButtons** - Different selection counts, disabled states
- **HealthBadge** - All health status variants (Healthy, Injured, Critical)
- **HealthFilter** - Open/closed states, filter selections
- **SortButton** - Sort states (none, ascending, descending)
- **TableHeader** - Selection states, filters, sorting
- **TableRow** - Selected/unselected, different health statuses, alternate rows
- **Table** - Complete table with various data sizes (10, 100, 1000 rows)

### Running Storybook

```bash
npm run storybook
```

Storybook will start on http://localhost:6006/ where you can:

- Browse all components and their variants
- Interact with components in isolation
- View component documentation
- Test accessibility
- View component props

### Building Storybook

```bash
npm run build-storybook
```

This creates a static build in `storybook-static/` that can be deployed.

## 🧪 Testing

The project includes comprehensive tests covering:

- ✅ Loading state rendering
- ✅ Data display
- ✅ Search functionality (name and location)
- ✅ Row selection (individual and select all)
- ✅ Health status filtering
- ✅ Power level sorting
- ✅ Mark as viewed/unviewed with console logging
- ✅ Correct behavior with active filters
- ✅ No results message

Run tests with:

```bash
npm test          # Watch mode
npm run test:ui   # UI mode with browser
npm run test:run  # Single run (CI)
```

## 🎨 Design Decisions

### Performance Optimization

- **useMemo**: Memoized filtering and sorting operations
- **useCallback**: Stable function references to prevent re-renders
- **Efficient State**: Minimal re-renders with Set for selections

### Accessibility

- Semantic HTML (table, thead, tbody)
- ARIA labels on all interactive elements
- Keyboard navigation support
- Clear focus states
- Indeterminate checkbox state for partial selection

### UX Enhancements

- Visual feedback for selections (row highlighting)
- Color-coded health badges
- Disabled state for action buttons when no selection
- Responsive design for mobile devices
- Smooth transitions and hover states

### Styling

- **Tailwind CSS** for the app shell and utility-first styling (header, layout, responsive typography)
- Component-level CSS files for complex component styles (e.g. table, scrollbars, spinners)
- Base styles and Tailwind directives in `src/index.css`

### Code Quality

- TypeScript for type safety
- Separated concerns (components, types, styles)
- Clean, readable code with proper naming
- Comprehensive comments where needed
- Consistent code style

## 📱 Responsive Design

The application is fully responsive and works on:

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (<768px)

## 🚀 Deployment

Build the application for production:

```bash
npm run build
```

The optimized build will be in the `dist/` folder. Deploy to any static hosting service:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop `dist/` folder
- **GitHub Pages**: Push `dist/` to gh-pages branch

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## 🔧 Configuration

### Data Format

The application expects JSON data in the following format:

```json
{
  "id": "char_0001",
  "name": "Naruto",
  "location": "Konoha",
  "health": "Healthy",
  "power": 5000
}
```

- **id**: Unique identifier (string)
- **name**: Character name (string)
- **location**: One of: Konoha, Suna, Kiri, Iwa, Kumo
- **health**: One of: Healthy, Injured, Critical
- **power**: Number between 100 and 10,000

## 📝 License

MIT

## 👤 Author

Built as part of the DopeSecurity Frontend Assignment

---

**Note**: This project focuses on functionality, clean code, and performance over elaborate visual design, as specified in the requirements.

# Deployment

The application is deployed to Vercel.
https://dope-security-assignment.vercel.app/
