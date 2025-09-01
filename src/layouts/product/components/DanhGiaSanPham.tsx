import React from "react";
import { useState, useEffect } from "react";
import "../../../styles/product-card.css";
import { layToanBoDanhGiaCua1Sach } from "../../../api/DanhGiaAPI";
import danhGiaModels from "../../../models/DanhGiaModels";
import StarsXepHang from "../../utils/StarsXepHang";
interface DanhGiaSanPhamProps {
  maSach: number;
}
const DanhGiaSanPham: React.FC<DanhGiaSanPhamProps> = (props) => {
  const maSach: number = props.maSach;
  const [danhSachDanhGia, setdanhSachDanhGia] = useState<danhGiaModels[]>([]);
  const [dangTaiDuLieu, setDangTaiDuLieu] = useState(true);
  const [baoLoi, setBaoLoi] = useState(null);

  useEffect(() => {
    layToanBoDanhGiaCua1Sach(maSach)
      .then((danhSachDanhGia) => {
        setdanhSachDanhGia(danhSachDanhGia);
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
      {danhSachDanhGia.map((danhGia, index) => (
        <div key={index} className="card product-card mb-3">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="d-flex align-items-center gap-2">
                {StarsXepHang(Number(danhGia.diemXepHang))}
                <span className="fw-semibold text-dark">
                  {Number(danhGia.diemXepHang).toFixed(1)}
                </span>
              </div>
            </div>
            <p className="mb-0 text-secondary" style={{ lineHeight: 1.6 }}>
              {danhGia.nhanXet}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default DanhGiaSanPham;
