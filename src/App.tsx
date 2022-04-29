import React from 'react';
import logo from './logo.svg';
import {createGlobalStyle, ThemeProvider} from "styled-components";
import {BrowserRouter, Navigate, Outlet, Route, Routes} from "react-router-dom";
import StackLayout from "./components/atoms/layouts/StackLayout";
import HStackLayout from "./components/atoms/layouts/HStackLayout";
import VStackLayout from "./components/atoms/layouts/VStackLayout";
import RelativeLayout from "./components/atoms/layouts/RelativeLayout";
import StockContentList from "./pages/StockContentList";

const GlobalStyle =  createGlobalStyle`
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
  return <ThemeProvider theme={{ }}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/page1" />} />
        <Route path="/page1" element={<Layout />} >
          <Route index element={<StockContentList />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <GlobalStyle />
  </ThemeProvider>
}


//Header Layout Test code
function Layout() {
  return <div>
    <header style={{ backgroundColor: "green" }}>
      Header Layout Test
    </header>
    <Outlet />
  </div>
}