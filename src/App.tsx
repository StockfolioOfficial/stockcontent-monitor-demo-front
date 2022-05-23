import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import ConfirmContentsPage from './pages/Main';
import theme from './styles/theme';
import GlobalStyle from './styles/globlaStyles';
import HeaderSection from './components/organisms/HeaderSection';
import ConfirmContentDetailPage from './pages/Detail';

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
            <Route
              path="/confirm-contents/:contentId"
              element={<ConfirmContentDetailPage />}
            >
              <Route
                path="/confirm-contents/:contentId/report"
                element={<ConfirmContentDetailPage />}
              />
            </Route>
          </Route>

          <Route path="*" element={<Navigate to="/not-found" />} />
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
