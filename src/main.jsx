import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './RootLayout';
import About from './Ul/About';
import Product from './Ul/Product';
import Cart from './Ul/Cart';
import CardContext from './context/CardContext';
import Login from "./Ui/Login.jsx"



const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: App },
      { path: "product", Component: Product },
      { path: "about", Component: About },
       { path: "cart", Component: Cart },
    
    ],
  },
   {
    path: "/login",
    Component: Login,
   },
]);



createRoot(document.getElementById('root')).render(
  <CardContext>
 <RouterProvider router={router} />,
  
  </CardContext>,
)
