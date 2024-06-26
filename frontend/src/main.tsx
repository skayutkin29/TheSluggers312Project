import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginPage from './Pages/loginPage.tsx'
import HomePage from './Pages/homePage.tsx'
import { GameStateProvider } from './Components/gameContext.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <HomePage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GameStateProvider>
      <RouterProvider router={router} />
    </ GameStateProvider>
  </React.StrictMode>,
)
