import * as readlineSync from 'readline-sync';

//Bài 128 + 130: Viết hàm nhập, xuất mảng 1 chiều các số thực
function inputAray(): number[]{
    let n = parseInt(readlineSync.question("Enter number of element: "));
    let arr: number[] = [];
    
    for(let i = 0; i< n; i++){
        let elm = parseInt(readlineSync.question(`Nhap phan tu thu ${i}: `));
        arr.push(elm);
    }
    return arr;
}

function printArray(arr: number[]): void{
    for(let i = 0; i < arr.length; i++){
            console.log(arr[i]);       
    }
}