import React from "react";
import hinhAnhModels from "../models/hinhAnhModels";
import my_request from "./request";


async function layAnhCuaMotSach(duongDan:string, maSach:number):Promise<hinhAnhModels[]> {
    const ketQua: hinhAnhModels[] = [];

    // gọi hàm request để lấy dữ liệu
    const response = await my_request(duongDan);

    // lấy ra json sách
    const responseData = response._embedded.hinhAnhs;
    for(const key in responseData){
        ketQua.push({
            maHinhAnh: responseData[key].maHinhAnh,
            tenHinhAnh: responseData[key].tenHinhAnh, 
            laIcon: responseData[key].laIcon, 
            duongDan: responseData[key].duongDan, 
            duLieuAnh: responseData[key].duLieuAnh        
        })
    }
    return ketQua;

}
export async function layToanBoAnh(maSach:number):Promise<hinhAnhModels[]> {

    const duongDan: string = `http://localhost:8080/sach/${maSach}/danhSachHinhAnh`; //đường dẫn đến API
    return layAnhCuaMotSach(duongDan, maSach);
    
}
export async function layMotAnhCua1Sach(maSach:number):Promise<hinhAnhModels[]> {

    const duongDan: string = `http://localhost:8080/sach/${maSach}/danhSachHinhAnh?sort=maHinhAnh,asc?page=0&size=1`; //đường dẫn đến API
    return layAnhCuaMotSach(duongDan, maSach);
    
}



