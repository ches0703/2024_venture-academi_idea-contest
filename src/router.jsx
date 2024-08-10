import { createHashRouter } from "react-router-dom";
import App from "./App";
import Home from "./page/Home";
import JobPost from "./page/JobPost";
import JobStack from "./page/JobStack";


const router = createHashRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: 'job-stack/:job',
        element: <JobStack></JobStack>
      },
      {
        path: 'job-post',
        element: <JobPost></JobPost>
      }
    ]
  }
])

export default router