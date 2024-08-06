import { createHashRouter } from "react-router-dom";
import App from "./App";
import Home from "./page/Home";


const router = createHashRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>
      }
    ]
  }
])

export default router