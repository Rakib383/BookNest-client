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
import { BorrowedBooksPage } from "../pages/BorrowedBooksPage";
import { ErrorPage } from "../pages/ErrorPage";
import { PrivateRoute } from "./PrivateRoute";


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
        element: <PrivateRoute><AllBooksPage /></PrivateRoute>,
      },
      {
        path: "books/:category",
        element: <CategoryBooks />,
        loader: ({ params }) => fetch(`https://book-nest-server-zeta.vercel.app/books/${params.category}`)
      },
      {
        path: "bookDetails/:id",
        element: <PrivateRoute><DetailsPage /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://book-nest-server-zeta.vercel.app/bookDetails/${params.id}`)
      },
      {
        path: "updateBook/:id",
        element: <PrivateRoute><UpdateBookPage /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://book-nest-server-zeta.vercel.app/bookDetails/${params.id}`)
      },
      {
        path: "addBook",
        element: <PrivateRoute><AddBookPage /></PrivateRoute>,
      },
      {
        path: "borrowedBooks",
        element: <PrivateRoute><BorrowedBooksPage /></PrivateRoute>,
      },

    ]
  },
  {
    path: "*",
    element: <ErrorPage />
  }
]);

export default router