import React from "react";
import "./App.css";
import Navbar from "./layouts/header-footer/navbar";
import Footer from "./layouts/header-footer/Footer";
import Homepage from "./layouts/home/homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./layouts/about/About";
import ChiTietSanPham from "./layouts/product/ChiTietSanPham";

function App() {
  const [tuKhoaTimKiem, setTuKhoaTimKiem] = React.useState("");

  return (
    <div>
      <BrowserRouter>
        <Navbar
          tuKhoaTimKiem={tuKhoaTimKiem}
          setTuKhoaTimKiem={setTuKhoaTimKiem}
        />
        <Routes>
          <Route
            path="/"
            element={<Homepage tuKhoaTimKiem={tuKhoaTimKiem} />}
          />
          <Route
            path="/:maTheLoai"
            element={<Homepage tuKhoaTimKiem={tuKhoaTimKiem} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/sach/:maSach" element={<ChiTietSanPham />} />
        </Routes>
        <div className="mt-5">
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
