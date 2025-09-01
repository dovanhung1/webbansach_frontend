import React from "react";

function Banner() {
  return (
    <div
      className="banner-3d mb-4"
      style={{
        backgroundImage: `linear-gradient(135deg, #f8f9fa 0%, #e3f2fd 30%, #bbdefb 70%, #90caf9 100%), url(${process.env.PUBLIC_URL}/images/books/home-hero-bg-1.jpg)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Floating decorative elements */}
      <div className="floating-element">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="currentColor">
          <circle cx="30" cy="30" r="25" fill="rgba(255,255,255,0.1)" />
        </svg>
      </div>
      <div className="floating-element">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="currentColor">
          <polygon points="40,10 70,70 10,70" fill="rgba(255,255,255,0.1)" />
        </svg>
      </div>
      <div className="floating-element">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="currentColor">
          <rect
            x="10"
            y="10"
            width="30"
            height="30"
            rx="5"
            fill="rgba(255,255,255,0.1)"
          />
        </svg>
      </div>

      <div
        className="container-fluid d-flex justify-content-center align-items-center text-center"
        style={{ minHeight: "420px" }}
      >
        <div
          className="banner-content-3d p-4 p-sm-5 rounded-4 shadow-lg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/books/home-hero-bg-1.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="banner-title-3d display-5 fw-bold text-white mb-3">
            Đọc sách là một trong những cách tốt nhất để mở rộng kiến thức và
            cải thiện kỹ năng của bạn.
          </h1>
          <p className="banner-author-3d lead text-light mb-4">— William Shakespeare</p>
          <button className="btn btn-primary btn-lg shadow-lg banner-btn-3d d-inline-flex align-items-center gap-2 px-4">
            <i className="fas fa-rocket"></i>
            Khám Phá Ngay
          </button>
        </div>
      </div>
    </div>
  );
}
export default Banner;
