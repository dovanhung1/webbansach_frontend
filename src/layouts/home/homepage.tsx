
import React from "react";
import Banner from "./components/banner";
import Carousel from "./components/Carousel";
import DanhSachSanPham from "../product/danhSachSanPham";
import { useParams } from "react-router-dom";

interface HomepageProps {
    tuKhoaTimKiem: string;
}

function Homepage({ tuKhoaTimKiem }: HomepageProps) {
    const {maTheLoai} = useParams();
    let maTheLoaiNumber=0;
    try {
        maTheLoaiNumber = parseInt(maTheLoai+'');
    } catch (error) {
        maTheLoaiNumber = 0;
        console.error('error parsing maTheLoai:', error);        
    }
    if(Number.isNaN(maTheLoaiNumber)){
        maTheLoaiNumber = 0;
    }
    return(
        <div>
            <Banner />
            <Carousel /> 
            <DanhSachSanPham tuKhoaTimKiem={tuKhoaTimKiem} maTheLoai={maTheLoaiNumber}/>
        </div>
    );
}
export default Homepage;