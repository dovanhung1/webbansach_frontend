import React from "react";
import SachModel from "../../models/sachModels";
import hinhAnhModels from "../../models/hinhAnhModels";
import { useState, useEffect } from "react";
import { layToanBoAnh } from "../../api/HinhAnhAPI";
import { Link, useParams } from "react-router-dom";
import { laySachTheoMaSach } from "../../api/SachAPI";
import { error } from "console";
import HinhAnhSanPham from "./components/HinhAnhSanPham";
import DanhGiaSanPham from "./components/DanhGiaSanPham";
import StarsXepHang from "./../utils/StarsXepHang";
import numberformat from "../utils/Numberformat";
const ChiTietSanPham: React.FC = () => {
  // Lấy mã sách từ URL
  const { maSach } = useParams();
  let maSachNumber = 0;
  try {
    maSachNumber = parseInt(maSach + "");
    if (Number.isNaN(maSachNumber)) {
      maSachNumber = 0;
    }
  } catch (error) {
    maSachNumber = 0;
    console.error("error parsing maSach:", error);
  }
  const [sach, setSach] = useState<SachModel | null>(null);
  const [dangTaiDuLieu, setDangTaiDuLieu] = useState(true);
  const [baoLoi, setBaoLoi] = useState(null);
  const [soLuong, setSoLuong] = useState(1);

  const tangSoLuong = () => {
    const soLuongHienTai = (sach&&sach.soLuong ? sach.soLuong : 0);
    if(soLuong <soLuongHienTai){
      setSoLuong(soLuong + 1);
    }
  }
  const giamSoLuong = () => {
    if(soLuong > 1){
      setSoLuong(soLuong - 1);
    }
  }
  const handleSoLuongChange  = (event: React.ChangeEvent<HTMLInputElement>) => {
    const soLuongMoi = parseInt(event.target.value);
    const soLuongTonKho = (sach&&sach.soLuong ? sach.soLuong : 0);
    if (!isNaN(soLuongMoi) && soLuongMoi >= 1 && soLuongMoi <= soLuongTonKho) {
      setSoLuong(soLuongMoi);
    }
  };
  const handleMuaNgay = () => {
  }
  const handleThemVaoGioHang = () => {
  }

  useEffect(() => {
    laySachTheoMaSach(maSachNumber)
      .then((sach) => {
        setSach(sach);
        setDangTaiDuLieu(false);
      })
      .catch((error) => {
        setBaoLoi(error.message);
        setDangTaiDuLieu(false);
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
  if (!sach) {
    return (
      <div>
        <h1>Sách Không Tồn Tại !</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row mt-4 mb-4">
        <div className=" col-4">
          <HinhAnhSanPham maSach={maSachNumber} />
        </div>
        <div className="col-8">
          <div className="row">
            <div className="col-8">
              <h1>{sach.tenSach}</h1>
              <h4>{StarsXepHang(Number(sach.trungBinhXepHang))}</h4>
              <h4>{numberformat( sach.giaBan)}đ</h4>
              <hr />
              <div dangerouslySetInnerHTML={{ __html: sach.moTa + "" }}></div>
              <hr />
            </div>
            <div className="col-4">
              Phần Dặt Hàng
              <div>
                <div className="mb-2">số lượng</div>
                <div className="d-flex align-items-center">
                  <button className="btn btn-outline-secondary me-2" onClick={giamSoLuong}>-</button>
                  <input className="form-control text-center" type="number"  value={soLuong}  min={1} onChange={handleSoLuongChange}/>
                  <button className="btn btn-outline-secondary ms-2" onClick={tangSoLuong}>+</button>
                </div>
                  {
                    sach.giaBan && (
                      <div className="mt-2 text-center">
                        Tổng Tiền <br/>
                        <h4>{numberformat(soLuong*sach.giaBan)}đ</h4>
                      </div>
                    )
                  }
                  <button type="button" className="btn btn-danger mt-3" onClick={handleMuaNgay}>Mua Ngay</button>
                  <button type="button" className="btn btn-outline-secondary mt-2" onClick={handleThemVaoGioHang}>Thêm Vào Giỏ Hàng</button>
                  
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4 mb-4">
          <DanhGiaSanPham maSach={maSachNumber} />
        </div>
      </div>
    </div>
  );
};

export default ChiTietSanPham;
