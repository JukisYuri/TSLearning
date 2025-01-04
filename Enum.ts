/*
Enum
Đề bài:
    Tạo một enum Color chứa các giá trị Red, Green, Blue.
    Viết hàm nhận tham số kiểu Color và in ra tên màu tương ứng.
*/

enum Color{
    Red,
    Green,
    Blue
}

function printColor(color: Color): void{
    console.log(Color[color])
}

printColor(Color.Red)
printColor(Color.Green)
printColor(Color.Blue)