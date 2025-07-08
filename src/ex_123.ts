//Bài 123: Viết hàm tìm 1 vị trí mà giá trị tại vị trí đó là giá trị nhỏ nhất trong mảng 1 chiều các số nguyên
function findIndex(arr: number[]){
let min: number = arr[0];
let index = 0;
for(let i = 0; i < arr. length; i++){
    if(arr[i] < min){
        min = arr[i];
        index = i;
    }
}
return index;
}