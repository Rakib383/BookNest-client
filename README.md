# :star: BookNest

![Project Banner](https://i.ibb.co/7K3z5CM/BookNest.png)

---

## Live site :- [BookNest](https://booknest-9061c.web.app/)

## :book: About the Project

Booknest is a comprehensive Library Management System developed for a well-renowned school. The web-based system streamlines the management of library resources by enabling:

- **Book Addition & Categorization:** Easily add new books to the library collection and organize them into categories.
- **Book Information Updates:** Update and maintain detailed information on each book.
- **Transaction Tracking:** Keep track of borrowed and returned books to ensure smooth library operations.
- **User-Friendly Interface:** A modern and intuitive interface that provides hassle-free access to the library’s resources for students and staff.

This project is designed to improve the efficiency of library management and enhance the overall user experience for both library administrators and users.

## :rocket: Key Features

- **Book Management:**
  - Add new books with detailed data.
  - Update existing book details.
  - Categorize books for easy navigation.
- **Transaction Handling:**
  - Track the borrowing and returning of books.
  - Monitor overdue items.
- **Responsive Design:**
  - Fully responsive layout ensuring accessibility on all devices.

## 🛠 Tech Stack

This project leverages modern web technologies and libraries to ensure a robust and efficient system:

- **Frontend:**
  - React
  - React Router DOM
  - React Toastify
  - React Icons
  - React Helmet Async
- **Styling & UI:**
  - Tailwind CSS
  - DaisyUI
  - Flowbite
  - AOS (Animate on Scroll)
- **Backend & Data Management:**
  - Firebase (for authentication )
  - jwt(for generate token)
  - Axios (for API calls)
- **Utilities:**
  - Moment (for date and time manipulation)
  - Match-sorter (for sorting and filtering data)
  - SweetAlert2 (for beautiful alerts)
  - Swiper (for creating responsive sliders)
- **Build Tools:**
  - Vite

## ⚙️ Installation & Setup

Follow these steps to set up the Booknest project locally:

### Prerequisites

Ensure you have **Node.js** and **npm** installed on your system.

### Clone the Repository

```sh
git clone https://github.com/Rakib383/BookNest-client.git
cd tourist-guide
```

### Install Dependencies

```sh
npm install
```

### Set Up Environment Variables

Create a `.env` file in the root directory and add the following variables:

```sh
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_firebase_auth_domain
VITE_projectId=your_firebase_project_id
VITE_storageBucket=your_firebase_storage_bucket
VITE_messagingSenderId=your_firebase_messaging_sender_id
VITE_appId=your_firebase_app_id
```

### Run the Development Server

```sh
npm run dev
```

This will start the application in development mode.

### Build for Production

```sh
npm run build
```
