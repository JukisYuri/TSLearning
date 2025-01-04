/*
Generic
Đề bài:
    Viết một hàm identity<T>(arg: T): T trả về chính giá trị được truyền vào.
    Thử truyền vào các giá trị kiểu number, string, và boolean.
*/

function identity<T>(arg: T): T{
    return arg
}

console.log(identity(10))
console.log(identity("Hello"))
console.log(identity(true))
