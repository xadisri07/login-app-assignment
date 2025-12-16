# Login App Assignment

A modern, production-ready authentication application built with React Native, Expo Router, and TypeScript. This app provides secure login functionality with persistent authentication state and a beautiful user interface.

## 🚀 Features

- 🔐 **Secure Authentication** - Login with email and password
- 💾 **Persistent Sessions** - Authentication state persists across app refreshes using AsyncStorage
- 🛡️ **Protected Routes** - Automatic route protection based on authentication status
- 🎨 **Modern UI** - Clean, responsive design with custom fonts and Tailwind CSS
- 📅 **Calendar Component** - Interactive calendar for date selection
- 📱 **Cross-Platform** - Works on iOS, Android, and Web
- ✅ **Type Safety** - Full TypeScript support with strict type checking
- 🎯 **Toast Notifications** - User-friendly feedback with react-native-toast-message

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI (installed globally or via npx)
- iOS Simulator (for iOS development) or Android Emulator (for Android development)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd login-app-assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   EXPO_PUBLIC_AUTH_URL=https://your-api-url.com/auth/login
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Run on your preferred platform**
   ```bash
   npm run ios      # iOS Simulator
   npm run android  # Android Emulator
   npm run web      # Web browser
   ```

## 📁 Project Structure

## 🔧 Configuration

### API Setup

The app requires an authentication API endpoint. Configure it in your `.env` file:

```env
EXPO_PUBLIC_AUTH_URL=https://your-api-url.com/auth/login
```

### API Requirements

The authentication API should:

- **Endpoint**: POST request to the configured URL
- **Headers**: `Content-Type: application/json`
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "password123",
    "type": "customer"
  }
  ```
- **Success Response**:
  ```json
  {
    "status": 200,
    "message": "Login successful",
    "data": {
      "token": "auth-token-here",
      "user": {
        "id": "user-id",
        "email": "user@example.com",
        "account": {
          "firstName": "John",
          "organization": {
            "companyName": "Company Name",
            "city": "City",
            "country": "Country"
          }
        },
        "createdAt": "2024-01-15T10:30:00Z"
      }
    }
  }
  ```

## 🎯 Usage

### Login Flow

1. Enter your email and password on the login screen
2. Click the "Login" button
3. Upon successful authentication, you'll be redirected to the home screen
4. Your session will persist even after closing and reopening the app

### Home Screen

The home screen displays:
- Personalized greeting with user's first name
- User email address
- Account creation date (formatted)
- Organization information
- Address information
- Interactive calendar component

### Logout

Logout functionality can be implemented by calling:
```typescript
import { authService } from '@/service/authService';
await authService.logout();
```

## 🏗️ Architecture

### Authentication Flow

1. **Login**: User enters credentials → API call → Token stored in AsyncStorage
2. **Session Check**: On app start, `checkToken()` retrieves stored auth data
3. **Route Protection**: Protected routes check for valid token before rendering
4. **Persistence**: Auth state persists across app refreshes using AsyncStorage

### State Management

- **Redux Toolkit**: Used for global state management (if needed)
- **Local State**: React hooks for component-level state
- **AsyncStorage**: Persistent storage for authentication tokens and user data

### Routing

- **Expo Router**: File-based routing with route groups
- **Route Groups**: 
  - `(auth)` - Public routes (login)
  - `(protected)` - Protected routes requiring authentication

## 🎨 Styling

The app uses:
- **Tailwind CSS** (via NativeWind) for utility-first styling
- **Custom Fonts** (Bagel Fat One) for headings
- **StyleSheet** for component-specific styles
- **Responsive Design** that works across all platforms

## 📦 Key Dependencies

- **expo-router**: File-based routing
- **@react-native-async-storage/async-storage**: Persistent storage
- **moment**: Date formatting and manipulation
- **react-native-toast-message**: Toast notifications
- **nativewind**: Tailwind CSS for React Native
- **@reduxjs/toolkit**: State management (optional)
- **typescript**: Type safety

## 🧪 Development

### Available Scripts

```bash
npm start          # Start Expo development server
npm run ios        # Run on iOS simulator
npm run android    # Run on Android emulator
npm run web        # Run on web browser
npm run lint       # Run ESLint
npm run format     # Format code with Prettier
```

### Code Formatting

The project uses Prettier for code formatting:
```bash
npm run format
```

### Type Checking

TypeScript will automatically check types during development. Ensure your IDE is configured to show TypeScript errors.

## 🔒 Security Considerations

- Authentication tokens are stored securely using AsyncStorage
- Protected routes automatically redirect unauthenticated users
- API errors are handled gracefully with user-friendly messages
- Sensitive data is not logged in production

## 🐛 Troubleshooting

### Common Issues

1. **"AUTH_URL is not configured"**
   - Ensure `.env` file exists with `EXPO_PUBLIC_AUTH_URL` set
   - Restart the Expo development server after adding environment variables

2. **Authentication not persisting**
   - Check that AsyncStorage is working correctly
   - Verify the token is being stored after login

3. **Routes not redirecting**
   - Clear the app cache: `npx expo start --clear`
   - Check that route groups are properly configured

4. **Build errors**
   - Clear node_modules and reinstall: `rm -rf node_modules && npm install`
   - Clear Expo cache: `npx expo start --clear`

## 📝 License

This project is for educational/demonstration purposes.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues and questions, please open an issue on the repository.

---

Built with ❤️ using React Native and Expo

## UI
![Login Screen](https://drive.google.com/file/d/1lgnpRA1te528gRt1uFv1299ZpfGDEXjU/view?usp=sharing)

![Home Screen](https://drive.google.com/file/d/1Zu1FMXO9ob0PXEuFoG9vFOzIDwP5cvbu/view?usp=sharing)
