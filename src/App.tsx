import React from 'react';
import logo from './logo.svg';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import ConfirmContentsPage from './pages/ConfirmContents';
import ConfirmContentDetailPage from './pages/ConfirmContents/ConfirmContentDetail';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body, #root {
    height: 100%;
    overflow-y: hidden;
  } 
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Navigate replace to="/confirm-contents" />}
          />
          <Route path="/confirm-contents" element={<Layout />}>
            <Route index element={<ConfirmContentsPage />} />
            <Route path=":contentId" element={<ConfirmContentDetailPage />} />
            <Route path=":contentId/report" element={<h1>report page</h1>} />
          </Route>

          <Route path="*" element={<Navigate to="/not-found" />} />
          <Route path="/not-found" element={<h1>NotFound Page</h1>} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

//Header Layout Test code
function Layout() {
  return (
    <div>
      <header style={{ backgroundColor: 'green' }}>Header Layout Test</header>
      <Outlet />
    </div>
  );
}
