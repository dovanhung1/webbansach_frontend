import React from "react";
import { useState, useEffect } from "react";
import { layBaSachMoiNhat } from "../../../api/SachAPI";
import SachModel from "../../../models/sachModels";
import Carouselitem from "./Carouselitem";
const Carousel:React.FC=()=>{
   const [DanhSachQuenSach, setDanhSachQuenSach] = useState<SachModel[]>([]);
    const[dangTaiDuLieu, setDangTaiDuLieu] = useState(true);
    const[baoLoi, setBaoLoi] = useState(null);

    useEffect(()=>{
        layBaSachMoiNhat().then(
            kq =>{
                setDanhSachQuenSach(kq.ketQua);
                setDangTaiDuLieu(false);
            }
        ).catch(
            error => {
                setBaoLoi(error.message);
            }
        );

    },[]//chi goi 1 lan
    )
    if(dangTaiDuLieu){
        return(
            <div>
                <h2>Đang tải dữ liệu...</h2>
            </div>
        )
    }
    if(baoLoi){
        return(
            <div>
                <h2>Đã xảy ra lỗi: {baoLoi}</h2>
            </div>
        )
    }




  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <style>
        {`
          .carousel-indicators [data-bs-target] {
            background-color: #000 !important;
            border: 2px solid #000 !important;
            width: 12px !important;
            height: 12px !important;
            border-radius: 50% !important;
          }
          .carousel-indicators .active {
            background-color: #333 !important;
            border: 2px solid #333 !important;
          }
        `}
      </style>
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div
            className="container-fluid"
            style={{
              backgroundColor: "#f8f9fa",
              minHeight: "500px",
              padding: "60px 0",
            }}
          >
            <div className="container">
              <Carouselitem Sach={DanhSachQuenSach[0]} />
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div
            className="container-fluid"
            style={{
              backgroundColor: "#f8f9fa",
              minHeight: "500px",
              padding: "60px 0",
            }}
          >
            <div className="container">
              <Carouselitem Sach={DanhSachQuenSach[1]} />
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div
            className="container-fluid"
            style={{
              backgroundColor: "#f8f9fa",
              minHeight: "500px",
              padding: "60px 0",
            }}
          >
            <div className="container">
              <Carouselitem Sach={DanhSachQuenSach[2]} />
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
export default Carousel;
