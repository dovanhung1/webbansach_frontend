import React from "react";

const Footer = () => {
  return (
    <footer className="position-relative text-white overflow-hidden border-top border-3 border-primary footer-root">
      {/* Background book image */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 opacity-10 footer-bg"
        style={{ backgroundImage: "url(/images/books/banner/6886055.jpg)" }}
      />
      {/* Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100 footer-overlay" />

      <div className="position-relative container py-5">
        <div className="row g-4">
          {/* Logo & Slogan */}
          <div className="col-12 col-md-4 d-flex flex-column align-items-start gap-3">
            <img
              src={"/images/books/banner/6886055.jpg"}
              alt="Bookstore Logo"
              className="rounded-3 shadow border border-info bg-white p-1"
              style={{ width: 64, height: 64 }}
            />
            <span className="fw-bold fs-4 text-info">Bookstore</span>
            <span className="text-light-50 fst-italic">
              Nơi tri thức hội tụ
            </span>
          </div>

          {/* Danh mục */}
          <div className="col-6 col-md-2">
            <h5 className="fw-bold mb-3">Danh mục</h5>
            <ul className="list-unstyled m-0 p-0">
              <li className="mb-2">
                <a
                  href="#"
                  className="link-light text-decoration-none d-flex align-items-center gap-2"
                >
                  Trang chủ
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="link-light text-decoration-none d-flex align-items-center gap-2"
                >
                  Thể loại
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="link-light text-decoration-none d-flex align-items-center gap-2"
                >
                  Sách mới
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="link-light text-decoration-none d-flex align-items-center gap-2"
                >
                  Khuyến mãi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="link-light text-decoration-none d-flex align-items-center gap-2"
                >
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Hỗ trợ */}
          <div className="col-6 col-md-3">
            <h5 className="fw-bold mb-3">Hỗ trợ</h5>
            <ul className="list-unstyled m-0 p-0">
              <li className="mb-2">
                <a href="#" className="link-light text-decoration-none">
                  Hướng dẫn mua hàng
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="link-light text-decoration-none">
                  Chính sách đổi trả
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="link-light text-decoration-none">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a href="#" className="link-light text-decoration-none">
                  Điều khoản sử dụng
                </a>
              </li>
            </ul>
          </div>

          {/* Kết nối */}
          <div className="col-12 col-md-3">
            <h5 className="fw-bold mb-3">Kết nối</h5>
            <div className="d-flex gap-3 fs-4">
              <a href="#" className="link-light">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="link-light">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="link-light">
                <i className="bi bi-twitter-x"></i>
              </a>
            </div>
            <h6 className="fw-bold mt-4 mb-2">Đăng ký nhận tin</h6>
            <form className="d-flex flex-column gap-2">
              <input
                type="email"
                placeholder="Email của bạn"
                className="form-control form-control-sm bg-white"
              />
              <button
                type="submit"
                className="btn btn-primary btn-sm fw-semibold"
              >
                Đăng ký
              </button>
            </form>
          </div>
        </div>

        {/* Glow blobs */}
        <div className="position-absolute top-0 start-0 w-100 h-100 footer-glow">
          <div className="position-absolute rounded-circle glow-blob-1" />
          <div className="position-absolute rounded-circle glow-blob-2" />
        </div>

        {/* Copyright */}
        <div className="position-relative mt-4 pt-3 border-top border-secondary text-center small fw-semibold text-light">
          © 2025 Bookstore. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
