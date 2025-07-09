//Bài 126: Viết hàm tính tổng các giá trị âm trong mảng 1 chiều các số thực
function sumNumbers(arr: number[]){
    let s: number = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            s += arr[i];
        }
    }
    return s;
}
