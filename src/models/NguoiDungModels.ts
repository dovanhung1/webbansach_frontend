class NguoiDungModels{
    maNguoiDung: number;
    hoDem?: string; // có thể bị null
    ten?: string; // có thể bị null
    matKhau?: string; // có thể bị null
    gioTinh?: string; // có thể bị null
    email?: string; // có thể bị null
    soDienThoai?: string; // có thể bị null
    diaChiMuaHang?: string; // có thể bị null
    diaChiGiaoHang?: string; // có thể bị null

    constructor(maNguoiDung: number, hoDem: string, ten: string, matKhau: string, gioTinh: string, email: string, soDienThoai: string, diaChiMuaHang: string, diaChiGiaoHang: string) {
        this.maNguoiDung = maNguoiDung;
        this.hoDem = hoDem;
        this.ten = ten;
        this.matKhau = matKhau;
        this.gioTinh = gioTinh;
        this.email = email;
        this.soDienThoai = soDienThoai;
        this.diaChiMuaHang = diaChiMuaHang;
        this.diaChiGiaoHang = diaChiGiaoHang;
    }

}
export default NguoiDungModels;