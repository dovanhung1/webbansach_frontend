
async function my_request(duongDan:string) {
    //truy vấn đường đẫn
    const response =await fetch(duongDan); 
    //nếu bị lỗi
    if(!response.ok){
        throw new Error (`không thể truy cập ${duongDan}`);
    }  
    // nếu trả về oke thì trả về
    return response.json();
}
export default my_request;