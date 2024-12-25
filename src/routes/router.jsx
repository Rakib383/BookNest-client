import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { RootLayout } from "../layout/RootLayout";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import { AllBooksPage } from "../pages/AllBooksPage";
import { CategoryBooks } from "../pages/CategoryBooks";
import { DetailsPage } from "../pages/DetailsPage";
import { UpdateBookPage } from "../pages/UpdateBookPage";
import { AddBookPage } from "../pages/AddbookPage";


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
      },
      {
        path: "bookDetails/:id",
        element: <DetailsPage />,
        loader: ({ params }) => fetch(`http://localhost:5000/bookDetails/${params.id}`)
      },
      {
        path: "updateBook/:id",
        element: <UpdateBookPage />,
        loader: ({ params }) => fetch(`http://localhost:5000/bookDetails/${params.id}`)
      },
      {
        path: "addBook",
        element: <AddBookPage />,
      }

    ]
  },
]);

export default router