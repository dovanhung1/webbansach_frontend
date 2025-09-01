import React from "react";
import hinhAnhModels from "../../../models/hinhAnhModels";
import { useState, useEffect, useRef } from "react";
import { layToanBoAnh } from "../../../api/HinhAnhAPI";
import "../../../styles/product-card.css";
interface HinhAnhSanPhamProps {
  maSach: number;
}
const HinhAnhSanPham: React.FC<HinhAnhSanPhamProps> = (props) => {
  const maSach: number = props.maSach;
  const [DanhSachHinhAnh, setDanhSachHinhAnh] = useState<hinhAnhModels[]>([]);
  const [dangTaiDuLieu, setDangTaiDuLieu] = useState(true);
  const [baoLoi, setBaoLoi] = useState(null);
  const [hinhAnhDangChon, setHinhAnhDangChon] = useState<hinhAnhModels | null>(
    null
  );
  const thanhThumbRef = useRef<HTMLDivElement | null>(null);

  const chonAnh = (img: hinhAnhModels) => {
    setHinhAnhDangChon(img);
  };

  const cuonThanhThumb = (huong: "left" | "right") => {
    const element = thanhThumbRef.current;
    if (!element) return;
    const delta = 200;
    element.scrollBy({
      left: huong === "left" ? -delta : delta,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    layToanBoAnh(maSach)
      .then((danhSach) => {
        setDanhSachHinhAnh(danhSach);
        if (danhSach.length > 0) {
          setHinhAnhDangChon(danhSach[0]);
        }
        setDangTaiDuLieu(false);
      })
      .catch((error) => {
        setBaoLoi(error.message);
      });
  }, [maSach]);
  if (dangTaiDuLieu) {
    return (
      <div>
        <h2>Đang tải dữ liệu...</h2>
      </div>
    );
  }
  if (baoLoi) {
    return (
      <div>
        <h2>Đã xảy ra lỗi: {baoLoi}</h2>
      </div>
    );
  }
  return (
    <div className="col-md-4 col-sm-6 mt-2 product-col">
      <div
        style={{
          background: "#fff",
          border: "1px solid #eef2f7",
          borderRadius: 12,
          padding: 12,
          width: 300,
        }}
      >
        {hinhAnhDangChon && (
          <img
            key={hinhAnhDangChon.duLieuAnh}
            src={hinhAnhDangChon.duLieuAnh}
            className="product-main-image fade-slide-in"
            style={{
              width: "100%",
              height: 420,
              objectFit: "contain",
              borderRadius: 8,
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
            }}
            alt="Hình ảnh sách"
          />
        )}
      </div>
      <div style={{ marginTop: 12, position: "relative" }}>
        <button
          type="button"
          onClick={() => cuonThanhThumb("left")}
          style={{
            position: "absolute",
            left: -8,
            top: "50%",
            transform: "translateY(-50%)",
            border: "none",
            background: "#ffffff",
            boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
            width: 28,
            height: 28,
            borderRadius: 14,
            cursor: "pointer",
            zIndex: 1,
          }}
          aria-label="Cuộn trái"
        >
          ‹
        </button>
        <div
          ref={thanhThumbRef}
          style={{
            display: "flex",
            gap: 12,
            overflowX: "auto",
            padding: "8px 6px",
            background: "#fff",
            border: "1px solid #eef2f7",
            borderRadius: 12,
          }}
        >
          {DanhSachHinhAnh.map((img, index) => {
            const duocChon =
              !!hinhAnhDangChon && hinhAnhDangChon.duLieuAnh === img.duLieuAnh;
            return (
              <div
                key={index}
                onClick={() => chonAnh(img)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={img.duLieuAnh}
                  style={{
                    width: 200,
                    height: 56,
                    objectFit: "cover",
                    borderRadius: 8,
                    border: duocChon
                      ? "2px solid #2563eb"
                      : "1px solid #e2e8f0",
                    boxShadow: duocChon
                      ? "0 2px 10px rgba(37,99,235,0.25)"
                      : "0 1px 6px rgba(0,0,0,0.06)",
                  }}
                  alt="Ảnh thu nhỏ sách"
                />
              </div>
            );
          })}
        </div>
        <button
          type="button"
          onClick={() => cuonThanhThumb("right")}
          style={{
            position: "absolute",
            right: -8,
            top: "50%",
            transform: "translateY(-50%)",
            border: "none",
            background: "#ffffff",
            boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
            width: 28,
            height: 28,
            borderRadius: 14,
            cursor: "pointer",
          }}
          aria-label="Cuộn phải"
        >
          ›
        </button>
      </div>
    </div>
  );
};
export default HinhAnhSanPham;
