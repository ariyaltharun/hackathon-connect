import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './global.css'
import { NextUIProvider } from '@nextui-org/system'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        {/* <BrowserRouter>
          <Router />
          </BrowserRouter> */}
        <App />
      </NextThemesProvider>
    </NextUIProvider>
  </React.StrictMode>
)
