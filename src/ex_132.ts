import * as readlineSync from 'readline-sync';

//Bài 132: Viết hàm liệt kê các giá trị chẵn trong mảng 1 chiều các số nguyên
function inputArray(): number[]{
    let n = parseInt(readlineSync.question("Input number of element: "));
    let arr: number[] = [];

    for(let i = 0; i < n; i++){
        let elm = parseInt(readlineSync.question(`Input element ${i}: `));
        arr.push(elm);
    }
    return arr;
}

function printArray(arr: number[]): void{
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

function showEvenumbers(arr: number[]): number[]{
    let evenElm: number[] = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            evenElm.push(arr[i]);
        }
    }
    return evenElm;
}