class hinhAnhModels {
    maHinhAnh : number;
    tenHinhAnh?: string; // có thể bị null
    laIcon?: boolean; // có thể bị null
    duongDan?: string; // có thể bị null
    duLieuAnh?: string; // có thể bị null
    constructor(maHinhAnh: number, tenHinhAnh: string, laIcon: boolean, duongDan: string, duLieuAnh: string) {
        this.maHinhAnh = maHinhAnh;
        this.tenHinhAnh = tenHinhAnh;
        this.laIcon = laIcon;
        this.duongDan = duongDan;
        this.duLieuAnh = duLieuAnh;
    }
}
export default hinhAnhModels;