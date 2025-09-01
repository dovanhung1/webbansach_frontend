import React from "react";
import SachModel from "../models/sachModels";
import my_request from "./request";
import NguoiDungModels from "../models/NguoiDungModels";

export async function layToanBoNguoiDung():Promise<NguoiDungModels[]> {
    const ketQua: NguoiDungModels[] = [];

    const duongDan: string = "http://localhost:8080/nguoi-dung"; //đường dẫn đến API

    // gọi hàm request để lấy dữ liệu
    const response = await my_request(duongDan);

    // lấy ra json sách
    const responseData = response._embedded.nguoiDungs;
    for(const key in responseData){
        ketQua.push({
           maNguoiDung: responseData[key].maNguoiDung,
           hoDem:responseData[key].hoDem , // có thể bị null
           ten:responseData[key].ten, // có thể bị null
           matKhau:responseData[key].matKhau, // có thể bị null
           gioTinh: responseData[key].gioTinh, // có thể bị null
           email:responseData[key].email, // có thể bị null
           soDienThoai: responseData[key].soDienThoai, // có thể bị null
           diaChiMuaHang: responseData[key].diaChiMuaHang, // có thể bị null
           diaChiGiaoHang:responseData[key].diaChiGiaoHang, // có thể bị null
           
        })
    }
    return ketQua;
}