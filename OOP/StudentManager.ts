class Student{
    id: number
    name: String
    age: number
    grades: number[]

    constructor(id: number, name: String, age: number, grades: number[]) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.grades = grades;
    }

    // Thêm điểm vào danh sách
    addGrade(grade: number): void{
        this.grades.push(grade)
        console.log(`Đã thêm điểm ${grade}`)
    }

    // Tính điểm trung bình
    getAvarageGrade(): number{
        let sum : number = 0;
        let count: number = 0;
        let result : number = 0;
        for (let i = 0; i < this.grades.length; i++) {
            sum += this.grades[i]
            count++
            result = sum/count
        }
        return result
    }

    // Trả về thông tin sinh viên dưới dạng chuỗi
    getDetail(): String {
        return `Mã số: ${this.id}
                Họ và tên: ${this.name}
                Tuổi: ${this.age}
                Điểm: ${this.grades}`
    }

    // Trả về điểm cao nhất
    getHighestGrade(): number{
        let highestGrade : number = 0;
        for (let i = 0; i < this.grades.length; i++) {
            if (this.grades[i] > highestGrade){
                highestGrade = this.grades[i]
            }
        }
        return highestGrade;
    }

    // Trả về danh sách điểm ở dạng chuỗi, phân tách bằng dấu phẩy.
    getGradesSummary(): string {
        return this.grades.join(", ");
    }
}

let arr : number[] = [8,9,10,5,6]
let student: Student[] = [new Student(12 ,"JukisYuri" ,19 ,arr)]
console.log(student[0].getAvarageGrade())
student[0].addGrade(8)
console.log(student[0])
console.log(student[0].getDetail())
console.log(student[0].getHighestGrade())
console.log(student[0].getGradesSummary())