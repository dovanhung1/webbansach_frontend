import React from "react";
import { useState, useEffect } from "react";
import SachMole from "../../models/sachModels";
import SachProps from "./components/SachProps";
import { layToanBoSach, timKiemSach } from "./../../api/SachAPI";
import { PhanTrang } from "../../layouts/utils/PhanTrang";

interface DanhSachSanPhamProps {
  tuKhoaTimKiem: string;
  maTheLoai: number;
}
function DanhSachSanPham({tuKhoaTimKiem,maTheLoai}:DanhSachSanPhamProps){
  const [DanhSachQuenSach, setDanhSachQuenSach] = useState<SachMole[]>([]);
  const [dangTaiDuLieu, setDangTaiDuLieu] = useState(true);
  const [baoLoi, setBaoLoi] = useState(null);
  const [trangHienTai, setTrangHienTai] = useState(1);
  const [tongSoTrang, setTongSoTrang] = useState(0);

  useEffect(() => {
      if (tuKhoaTimKiem===""&& maTheLoai == 0) {
      layToanBoSach(trangHienTai-1)
        .then((kq) => {
          setDanhSachQuenSach(kq.ketQua);
          setTongSoTrang(kq.tongSoTrang);
          setDangTaiDuLieu(false);
        })
        .catch((error) => {
          setBaoLoi(error.message);
        });
      }else{
        timKiemSach(tuKhoaTimKiem,maTheLoai)
        .then((kq) => {
          setDanhSachQuenSach(kq.ketQua);
          setTongSoTrang(kq.tongSoTrang);
          setDangTaiDuLieu(false);
        })
        .catch((error) => {
          setBaoLoi(error.message);
        });
      }
    },      
    [trangHienTai,tuKhoaTimKiem,maTheLoai] //chi goi 1 lan
  );

  const phanTrang = (trang: number) => setTrangHienTai(trang);
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
  if(DanhSachQuenSach.length === 0){
     return (
    <div className="container">
      <div className="row mt-4 mb-4 d-flex justify-content-center-align-items-center">
        <h1>Hiện không Tim Thấy Sách Theo Yêu Cầu!</h1>
      </div>
    </div>
  );
  }
  return (
    <div className="container">
      <div className="row mt-4 mb-4">
        {DanhSachQuenSach.map((Sach) => (
          <SachProps Sach={Sach} key={Sach.maSach} />
        ))}
      </div>
      <PhanTrang
        trangHienTai={trangHienTai}
        tongSoTrang={tongSoTrang}
        phanTrang={phanTrang}
      />
    </div>
  );
};
export default DanhSachSanPham;
