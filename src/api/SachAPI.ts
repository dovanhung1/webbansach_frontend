import React from "react";
import SachModel from "../models/sachModels";
import my_request from "./request";


interface ketQuaInterface {
    ketQua: SachModel[];
    tongSoTrang: number;
    tongSoSach : number;
}

async function laySach(duongDan:string):Promise<ketQuaInterface> {
    const ketQua: SachModel[] = [];
    // gọi hàm request để lấy dữ liệu
    const response = await my_request(duongDan);

    // lấy ra json sách
    const responseData = response._embedded.saches;
    console.log(responseData);

    // lấy ra thông tin trang
    const tongSoTrang:number = response.page.totalPages;    
 
    const tongSoSach:number = response.page.totalElements;


    for(const key in responseData){
        ketQua.push({
            maSach:responseData[key].maSach,
            tenSach:responseData[key].tenSach,
            giaBan:responseData[key].giaBan,
            giaNiemYet:responseData[key].giaNiemYet,
            moTa:responseData[key].moTa,
            soLuong:responseData[key].soLuong,
            tenTacGia:responseData[key].tenTacGia,
            trungBinhXepHang:responseData[key].trungBinhXepHang
           
        })
    }
    return {ketQua: ketQua, tongSoTrang: tongSoTrang, tongSoSach: tongSoSach};
}
export async function layToanBoSach(trangHienTai:number):Promise<ketQuaInterface> {

    const duongDan: string = `http://localhost:8080/sach?sort=maSach,desc&size=8&page=${trangHienTai}`; //đường dẫn đến API

    return laySach(duongDan);
}
export async function layBaSachMoiNhat():Promise<ketQuaInterface> {

    const duongDan: string = "http://localhost:8080/sach?sort=maSach,desc&page=0&size=3"; //đường dẫn đến API

    return laySach(duongDan);
}

export async function timKiemSach(tuKhoaTimKiem : String,maTheLoai:number):Promise<ketQuaInterface> {

    let duongDan: string = `http://localhost:8080/sach?sort=maSach,desc&size=8&page=0`; //đường dẫn đến API

    if(tuKhoaTimKiem !==''&& maTheLoai == 0){
        duongDan = `http://localhost:8080/sach/search/findByTenSachContaining?sort=maSach,desc&size=8&page=0&tenSach=${tuKhoaTimKiem}`; //đường dẫn đến API
    }else if(tuKhoaTimKiem ==='' && maTheLoai > 0){
         duongDan = `http://localhost:8080/sach/search/findByDanhSachTheLoai_MaTheLoai?sort=maSach,desc&size=8&page=0&maTheLoai=${maTheLoai}`;
    }else if(tuKhoaTimKiem !=='' && maTheLoai > 0){
         duongDan = `http://localhost:8080/sach/search/findByTenSachContainingAndDanhSachTheLoai_MaTheLoai?sort=maSach,desc&size=8&page=0&maTheLoai=${maTheLoai}&tenSach=${tuKhoaTimKiem}`;
    }
    return laySach(duongDan);

}

export async function laySachTheoMaSach(maSach : number):Promise<SachModel|null> {
    const duongDan: string = `http://localhost:8080/sach/${maSach}`; 

    try{
    // gọi hàm request để lấy dữ liệu
    const response = await fetch(duongDan);
    if(!response.ok){
        throw new Error("gap loi khi lay sach theo ma");
    }
    const sachData = await response.json();
    if(sachData){
        return {
            maSach:sachData.maSach,
            tenSach: sachData.tenSach,
            giaBan: sachData.giaBan,
            giaNiemYet: sachData.giaNiemYet,
            moTa: sachData.moTa,
            soLuong: sachData.soLuong,
            tenTacGia: sachData.tenTacGia,
            trungBinhXepHang: sachData.trungBinhXepHang
        }
        
    }else{
        throw new Error("sach khong ton tai");
    }
    }catch(error) {
        console.error("Lỗi khi lấy sách theo mã:", error);
        return null;
    }
}


