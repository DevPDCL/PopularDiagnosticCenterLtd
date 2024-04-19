import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  Branch,
  Layout,
  Sample,
  Contact,
  Health,
  DoctorDetail,
  DoctorSearch,
  Technology,
  Details,
  About,
  Complain,
  Chairman,
  Goals,
  Login,
  Notice,
  Sign,
  Patient,
  Director,
} from "./components";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sample" element={<Sample />} />
          <Route path="/doctordetail" element={<DoctorDetail />} />
          <Route path="/doctorsearch" element={<DoctorSearch />} />
          <Route path="/tech" element={<Technology />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/complain" element={<Complain />} />
          <Route path="/branch" element={<Branch />} />
          <Route path="/director" element={<Director />} />
          <Route path="/chairman" element={<Chairman />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/health" element={<Health />} />
          <Route path="/details" element={<Details />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
