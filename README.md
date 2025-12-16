# Login App Assignment

A modern, production-ready login application built with React Native, Expo Router, and TypeScript following best practices.

## Features

- 🔐 **Authentication Flow**: Login screen with form validation
- 🛡️ **Protected Routes**: Automatic route protection based on authentication status
- 💾 **Secure Storage**: Tokens stored securely using Expo SecureStore
- 🎨 **Modern UI**: Clean, responsive design with reusable components
- ✅ **Form Validation**: Client-side validation with helpful error messages
- 🔄 **State Management**: Context API for global authentication state
- 📱 **Cross-Platform**: Works on iOS, Android, and Web

## Project Structure

```
login-app-assignment/
├── app/                      # Expo Router screens
│   ├── (auth)/              # Authentication screens (public)
│   │   ├── login.tsx       # Login screen
│   │   └── _layout.tsx     # Auth layout
│   ├── (protected)/        # Protected screens (require auth)
│   │   ├── home.tsx        # Home/Dashboard screen
│   │   └── _layout.tsx     # Protected layout
│   ├── _layout.tsx         # Root layout with AuthProvider
│   └── index.tsx           # Entry point with redirect logic
├── components/              # Reusable UI components
│   └── ui/
│       ├── Button.tsx      # Button component
│       ├── Input.tsx       # Input component with validation
│       └── LoadingScreen.tsx
├── context/                 # React Context providers
│   └── AuthContext.tsx     # Authentication context
├── hooks/                   # Custom React hooks
│   └── useAuthGuard.tsx    # Route protection hook
├── services/                # Business logic & API calls
│   └── auth.service.ts     # Authentication service
├── types/                   # TypeScript type definitions
│   └── auth.ts             # Auth-related types
├── utils/                   # Utility functions
│   └── validation.ts       # Form validation helpers
└── constants/              # App constants
    └── colors.ts           # Color palette
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI (installed globally or via npx)

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Run on your preferred platform:

```bash
npm run ios      # iOS Simulator
npm run android  # Android Emulator
npm run web      # Web browser
```

## Demo Credentials

For testing purposes, you can use:

- **Email**: `demo@example.com`
- **Password**: `demo123`

## Architecture & Best Practices

### 1. **Folder Structure**

- Organized by feature/domain (auth, protected routes)
- Separation of concerns (components, services, context, utils)
- Clear naming conventions

### 2. **TypeScript**

- Strict type checking enabled
- Type definitions for all data structures
- Type-safe API calls and state management

### 3. **State Management**

- Context API for global authentication state
- Local state for form inputs
- Proper error handling and loading states

### 4. **Security**

- Secure token storage using Expo SecureStore
- Password validation
- Protected routes with automatic redirects

### 5. **Code Quality**

- Reusable UI components
- Custom hooks for shared logic
- Form validation utilities
- Consistent error handling

### 6. **User Experience**

- Loading states during API calls
- Clear error messages
- Keyboard-aware forms
- Smooth navigation transitions

## Customization

### Adding New Screens

1. **Public Screen**: Add to `app/(auth)/` directory
2. **Protected Screen**: Add to `app/(protected)/` directory

### Styling

Colors and theme can be customized in `constants/colors.ts`. The app uses a consistent color palette throughout.

### API Integration

Replace the mock authentication in `services/auth.service.ts` with your actual API endpoints:

```typescript
async login(credentials: LoginCredentials) {
  const response = await fetch('YOUR_API_URL/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  // Handle response...
}
```

## Development

### Linting

```bash
npm run lint
```

### Type Checking

TypeScript will automatically check types during development.

## License

This project is for educational/demonstration purposes.
