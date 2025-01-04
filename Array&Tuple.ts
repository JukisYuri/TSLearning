/*
Array và Tuple
Đề bài:
    Khai báo một mảng chứa các số kiểu number và tính tổng các phần tử trong mảng.
    Khai báo một tuple chứa thông tin: tên (string), tuổi (number), trạng thái học sinh (boolean). In từng phần tử của tuple ra console.
*/

function sumArray(n : number[]) : number{
    let sumResult : number = 0;
    for (let i = 0; i < n.length; i++) {
        sumResult += n[i];
    }
    return sumResult;
}

let arr : number[] = [1,2,3,4];
let student: [string, number, boolean] = ["Yuri", 18, true];
console.log(sumArray(arr));
console.log(student);