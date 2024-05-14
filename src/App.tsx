import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import AppLayout from "./pages/app/components/Applayout";
import Appointments from "./pages/app/routes/Appointments";
import Schedules from "./pages/app/routes/Schedules";
import Profile from "./pages/app/routes/Profile";
import Earnings from "./pages/app/routes/Earnings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route index path="/" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="profile" />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="schedules" element={<Schedules />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="earnings" element={<Earnings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
