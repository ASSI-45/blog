import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './main.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutPage from './pages/AboutPage.tsx'

const router = createBrowserRouter([
  { path: "/", element:<App></App>},
  { path: '/about', element: <AboutPage></AboutPage>}
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
