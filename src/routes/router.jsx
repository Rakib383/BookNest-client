import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { RootLayout } from "../layout/RootLayout";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import { AllBooksPage } from "../pages/AllBooksPage";
import { CategoryBooks } from "../pages/CategoryBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <HomePage />

      },
      {
        path: "register",
        element: <RegisterPage />
      },
      {
        path: "login",
        element: <LoginPage />
      },
      {
        path: "allBooks",
        element: <AllBooksPage />,
        loader: () => fetch("http://localhost:5000/allBooks")
      },
      {
        path: "books/:category",
        element: <CategoryBooks />,
        loader: ({ params }) => fetch(`http://localhost:5000/books/${params.category}`)
      }

    ]
  },
]);

export default router