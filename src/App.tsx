import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import AppLayout from "./pages/app/components/Applayout";
import Appointments from "./pages/app/routes/Appointments";
import Schedules from "./pages/app/routes/Schedules";
import Profile from "./pages/app/routes/Profilev2";
import Earnings from "./pages/app/routes/Earnings";
import Signup from "./pages/signup/Signup";
import ProtectedRoute from "./features/authentication/components/ProtectedRoute";
import Settings from "./pages/app/routes/Settings";
import Booking from "./pages/booking/Booking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="home" element={<Home />} />
          <Route index element={<Navigate replace to="login" />} />
          <Route path="login" element={<Login />} />
          <Route path="booking" element={<Booking />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route
          path="app"
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate replace to="profile" />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="schedules" element={<Schedules />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="earnings" element={<Earnings />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
