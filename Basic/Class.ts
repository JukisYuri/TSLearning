/*
Class
Đề bài:
Tạo class Rectangle có các thuộc tính:
    width (number)
    height (number)
Tạo phương thức getArea() trả về diện tích của hình chữ nhật.
Tạo phương thức getPerimeter() trả về chu vi của hình chữ nhật.
*/

class Rectangle {
    width: number
    height: number

    constructor(width: number, height: number) {
        this.width = width
        this.height = height
    }

    getArea(): number{
        return this.width * this.height
    }

    getPerimeter(): number{
        return 2*(this.width + this.height)
    }
}

let rectangle = new Rectangle(10,5)
console.log(rectangle.getArea())
console.log(rectangle.getPerimeter())
console.log("Phương thức trả về nửa diện tích hình chữ nhật: " + rectangle.getArea()/2)
console.log("Phương thức trả về nửa chu vi hình chữ nhật: " + rectangle.getPerimeter()/2)
