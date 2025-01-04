/*
Hàm trong TypeScript
Đề bài:
    Viết hàm sum(a: number, b: number): number trả về tổng của hai số a và b.
    Viết hàm isPrime(n: number): boolean để kiểm tra xem n có phải số nguyên tố không.
    Viết hàm isPrimeArray(n: number[]): number[] để trả về 1 mảng gồm các số nguyên.
*/

function sum(a: number, b: number): number{
    return a + b;
}

function isPrime(n: number): boolean{
    return n % 2 == 0;
}

function isPrimeArray(n: number[]): number[]{ // Khác logic so với java
    let result : number[] = [];
    for (let i = 0; i < n.length; i++) {
        if(n[i] % 2 === 0){
            result[i] = n[i];
        }
    }
    return result;
}

console.log(sum(2,3));
console.log(isPrime(2));
let arr : number[] = [1,2,3,4,5,6];
console.log(isPrimeArray(arr));