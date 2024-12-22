import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { RootLayout } from "../layout/RootLayout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      children:[
        { 
          path:"",
          element:<HomePage/>

        }
      ]
    },
  ]);

  export default router