
function numberformat(x :number|undefined){
    if(x===undefined){
        return 0;
    }
    if(isNaN(x)){
        return 0;
    }
    //su dung ham tolocaleString de dinh rang so
    return x.toLocaleString('Vi-VN');
}
export default numberformat;