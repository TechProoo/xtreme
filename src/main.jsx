import React from 'react'
import ReactDOM from 'react-dom/client'
import Form from './components/Form';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";import './index.css'
import Modal from './components/Modal';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Form />,
  },
  {
    path: "/submitted",
    element: <Modal />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
