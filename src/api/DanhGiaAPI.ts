// cspell:words duong DanhGia danhGia nhanXet maSach maDanhGia nguoiDung xepHang
import my_request from "./request";
import danhGiaModels from "../models/DanhGiaModels";
async function layDanhGiaCua1Sach(duongDan: string): Promise<danhGiaModels[]> {
  const ketQua: danhGiaModels[] = [];

  // gọi hàm request để lấy dữ liệu
  const response = await my_request(duongDan);

  // lấy ra json sách
  const responseData = response._embedded.suDanhGias;
  for (const key in responseData) {
    ketQua.push({
      maDanhGia: responseData[key].maDanhGia,
      diemXepHang: responseData[key].diemXepHang,
      nhanXet: responseData[key].nhanXet,
    });
  }
  return ketQua;
}
export async function layToanBoDanhGiaCua1Sach(
  maSach: number
): Promise<danhGiaModels[]> {
  const duongDan: string = `http://localhost:8080/sach/${maSach}/danhSachDanhGia`; //đường dẫn đến API
  return layDanhGiaCua1Sach(duongDan);
}
export async function layMotDanhGiaCua1Sach(
  maSach: number
): Promise<danhGiaModels[]> {
  const duongDan: string = `http://localhost:8080/sach/${maSach}/danhSachDanhGia?sort=maDanhGia,asc?page=0&size=1`; //đường dẫn đến API
  return layDanhGiaCua1Sach(duongDan);
}
