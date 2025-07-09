//Bài 127: Viết hàm sắp xếp mảng 1 chiều các số thực tăng dần
function arrangeNumbers(arr: number[]): number[]{
    let temp: number;
    for(let i = 0; i < arr.length-1; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }           
        }
    }
    return arr;
}