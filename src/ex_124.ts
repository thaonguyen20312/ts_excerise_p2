//Bài 124: Viết hàm kiểm tra trong mảng các số nguyên có tồn tại giá trị chẵn nhỏ hơn 2004 hay không
               
function checkValue(arr: number[]): boolean{
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 2004){
            return true;
        }
    }
    return false;
}
