import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import EmployeesPage from "./pages/EmployeesPage";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import { ROUTE } from "./routes";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useState } from "react";


export function App() {
  const [user, setUser] = useState(false)
  const router = createBrowserRouter([{
    path: '/',
    element: <Layout />,
    children: [{
      path: ROUTE.CONTACT,
      element: <ContactPage />

    },

    {
      path: ROUTE.ABOUT,
      element: <AboutPage />
    },
    {
      path: ROUTE.EMPLOYEES,
      element: <ProtectedRoute user={user} element = {<EmployeesPage />} />
    },
    {
      path: ROUTE.HOME,
      element: <HomePage />
    },
    {
      path: ROUTE.REGISTRATION,
      element: <RegistrationPage />
    }
    ]
  }])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
