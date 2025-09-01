import React, { useState } from "react";
import { Search } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";


interface NavbarProps {
  tuKhoaTimKiem: string;
  setTuKhoaTimKiem: (tuKhoa: string) => void;
}
function Navbar({tuKhoaTimKiem ,setTuKhoaTimKiem}: NavbarProps) {
  const [tuKhoaTam,setKhoatam] = useState("");
    const onSearchInputChange =(e: React.ChangeEvent<HTMLInputElement>) => {// Hàm xử lý khi người dùng nhập vào ô tìm kiếm
      setKhoatam(e.target.value); // Cập nhật từ khóa tìm kiếm khi người dùng nhập
    }
const handleSearch = () => {//khi người dùng nhấn nút tìm kiếm
  setTuKhoaTimKiem(tuKhoaTam); // Xử lý tìm kiếm khi người dùng nhấn nút
}

    return(
         <nav className="navbar navbar-expand-lg navbar-3d">
        <div className="container-fluid">
          <a className="navbar-brand navbar-brand-3d" href="#">
           <i className="fas fa-book me-2 icon-3d"></i>
            Bookstore
          </a>
          <button className="navbar-toggler navbar-toggler-3d" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon navbar-toggler-icon-3d"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link nav-link-3d active" aria-current="page" to="/">
                    <i className="fa-solid fa-house icon-3d"></i>
                    Trang Chủ</NavLink>
              </li>              
              <li className="nav-item dropdown">
                <NavLink  className="nav-link nav-link-3d dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa-solid fa-book-bible icon-3d"></i>
                  Thể Loại Sách
                </NavLink>
                <ul className="dropdown-menu dropdown-menu-3d">
                  <li><NavLink className="dropdown-item dropdown-item-3d" to="/1">Thể loại 1</NavLink></li>
                  <li><NavLink className="dropdown-item dropdown-item-3d" to="/2">Thể Loại 2</NavLink></li>
                  <li><NavLink className="dropdown-item dropdown-item-3d" to="/3">Thể loại 3</NavLink></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link nav-link-3d dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fa-solid fa-circle-exclamation icon-3d"></i>
                  Quy Định Bán Hàng
                </a>
                <ul className="dropdown-menu dropdown-menu-3d">
                  <li><a className="dropdown-item dropdown-item-3d" href="#">Quy Định 1</a></li>
                  <li><a className="dropdown-item dropdown-item-3d" href="#">Quy Định 2</a></li>
                  <li><a className="dropdown-item dropdown-item-3d" href="#">Quy Định 3</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-3d" href="#">
                    <i className="fa-solid fa-phone-volume icon-3d"></i>
                    Liên Hệ</a>
              </li>
            </ul>
            <div className="d-flex search-container-3d"> 
              <input className="form-control me-2 search-input-3d" type="search" placeholder="Tìm Kiếm" aria-label="Search" onChange={onSearchInputChange} value={tuKhoaTam}/>
              <button className="btn search-btn-3d" type="submit" onClick={handleSearch}>
                <Search />
              </button>
            </div>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                  <a className="nav-link cart-icon-3d" href="#">
                      <i className="fa-solid fa-cart-shopping"></i>
                  </a>
              </li>
              <li className="nav-item">
                  <a className="nav-link user-icon-3d" href="#">
                      <i className="fas fa-user"></i>
                  </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}
export default Navbar;