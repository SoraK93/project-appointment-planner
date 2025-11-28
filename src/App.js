import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [appointment, setAppointment] = useState([]);
  const [contacts, setContacts] = useState([]);

  const addNewContact = (name, phone, email) => {
    setContacts([...contacts, { name, phone, email }]);
  };

  const addNewAppointment = (name, contact, date, time) => {
    
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
        <Route
          path={ROUTES.CONTACTS}
          element={<ContactsPage /> /* Add props to ContactsPage */}
        />
        <Route
          path={ROUTES.APPOINTMENTS}
          element={<AppointmentsPage /> /* Add props to AppointmentsPage */}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
