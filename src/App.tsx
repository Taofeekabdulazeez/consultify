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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route
          path="/"
          element={
            <div>
              <Outlet />
            </div>
          }
        >
          <Route index element={<Navigate replace to="login" />} />
          <Route path="login" element={<Login />} />
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
