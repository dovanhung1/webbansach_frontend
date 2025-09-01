import React from "react";
import SachModel from "../../../models/sachModels";
import hinhAnhModels from "../../../models/hinhAnhModels";
import { useState, useEffect } from "react";
import { layMotAnhCua1Sach, layToanBoAnh } from "../../../api/HinhAnhAPI";
import { Link } from "react-router-dom";
interface Carouselitem {
  Sach: SachModel;
}
const Carouselitem: React.FC<Carouselitem> = (props) => {
  const maSach: number = props.Sach.maSach;
  const [DanhSachHinhAnh, setDanhSachHinhAnh] = useState<hinhAnhModels[]>([]);
  const [dangTaiDuLieu, setDangTaiDuLieu] = useState(true);
  const [baoLoi, setBaoLoi] = useState(null);

  useEffect(
    () => {
      layMotAnhCua1Sach(maSach)
        .then((hinhAnhData) => {
          setDanhSachHinhAnh(hinhAnhData);
          setDangTaiDuLieu(false);
        })
        .catch((error) => {
          setBaoLoi(error.message);
        });
    },
    [] //chi goi 1 lan
  );
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
  let duLieuAnh: string = "";
  if (DanhSachHinhAnh[0] && DanhSachHinhAnh[0].duLieuAnh) {
    duLieuAnh = DanhSachHinhAnh[0].duLieuAnh;
  }

  return (
    <div className="row align-items-center g-4 carousel-item-3d-card p-4 p-md-5">
      <div className="col-md-6 carousel-item-3d-image-wrap">
        <Link to={`/sach/${props.Sach.maSach}`}>
        <img
          src={duLieuAnh}
          alt="Book Cover"
          className="img-fluid carousel-item-3d-image"
          style={{
            maxHeight: "400px",
            width: "100%",
            objectFit: "contain",
          }}
        />
        </Link>
      </div>
      <div className="col-md-6">
        <div className="d-flex align-items-center gap-2 mb-2">
          <span className="badge badge-soft rounded-pill px-3 py-2">Mới</span>
          <small className="text-secondary">Sách nổi bật</small>
        </div>
        <h3 className="carousel-item-3d-title fw-bold text-dark mb-3">
          {props.Sach.tenSach}
        </h3>        
        <div className="d-flex gap-3">
          <a
            href={`/sach/${props.Sach.maSach}`}
            className="btn btn-primary btn-cta-3d px-4"
          >
            Xem chi tiết
          </a>
          <a href="#sach-moi" className="btn btn-outline-primary px-4">
            Thêm vào giỏ
          </a>
        </div>
      </div>
    </div>
  );
};
export default Carouselitem;
