import React from "react";
import SachModel from "../../../models/sachModels";
import hinhAnhModels from "../../../models/hinhAnhModels";
import { useState, useEffect } from "react";
import { layMotAnhCua1Sach, layToanBoAnh } from "../../../api/HinhAnhAPI";
import { Link } from "react-router-dom";
import "../../../styles/product-card.css";
import StarsXepHang from "../../utils/StarsXepHang";
import numberformat from "../../utils/Numberformat";
interface SachPropsInterface {
  Sach: SachModel;
}
const SachProps: React.FC<SachPropsInterface> = (props) => {
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
    <div className="col-md-3 mt-2 product-col">
      <div className="card product-card">
        <Link to={`/sach/${props.Sach.maSach}`}>
          <img
            src={duLieuAnh}
            className="card-img-top product-card-img"
            alt={props.Sach.tenSach}
          />
        </Link>
        <div className="card-body">
          <Link
            to={`/sach/${props.Sach.maSach}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <h5 className="card-title product-title">{props.Sach.tenSach}</h5>
          </Link>
          <del>{StarsXepHang(Number(props.Sach.trungBinhXepHang))}</del>
          <div className="product-price">
            <span className="original-price">
              <del>{numberformat( props.Sach.giaNiemYet)}</del>
            </span>
            <span className="discounted-price">
              <strong>{numberformat(props.Sach.giaBan)}đ</strong>
            </span>
          </div>
          <div className="row mt-3 product-actions" role="group">
            <div className="col-6">
              <a href="#" className="btn btn-outline-secondary">
                <i className="fas fa-heart"></i>
              </a>
            </div>
            <div className="col-6">
              <button className="btn btn-danger">
                <i className="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SachProps;
