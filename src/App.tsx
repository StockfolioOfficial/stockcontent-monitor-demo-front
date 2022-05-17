import React from 'react';
import logo from './logo.svg';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import ConfirmContentsPage from './pages/ConfirmContents';
import ConfirmContentDetailPage from './pages/ConfirmContents/ConfirmContentDetail';
import theme from './styles/theme';
import GlobalStyle from './styles/globlaStyles';
import HeaderSection from './components/organisms/HeaderSection';

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
      <HeaderSection />
      <Outlet />
    </div>
  );
}
