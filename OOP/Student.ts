class Student{
    private readonly _id: number
    private readonly _name: String
    private readonly _age: number
    private readonly _grades: number[]

    constructor(id: number, name: String, age: number, grades: number[]) {
        this._id = id;
        this._name = name;
        this._age = age;
        this._grades = grades;
    }

    get id(): number {
        return this._id;
    }

    get name(): String {
        return this._name;
    }

    get age(): number {
        return this._age;
    }

    get grades(): number[] {
        return this._grades;
    }

// Thêm điểm vào danh sách
    addGrade(grade: number): void{
        this._grades.push(grade)
        console.log(`Đã thêm điểm ${grade}`)
    }

    // Tính điểm trung bình
    getAvarageGrade(): number{
        let sum : number = 0;
        let count: number = 0;
        let result : number = 0;
        for (let i = 0; i < this._grades.length; i++) {
            sum += this._grades[i]
            count++
            result = sum/count
        }
        return result
    }

    // Trả về thông tin sinh viên dưới dạng chuỗi
    getDetail(): String {
        return `Mã số: ${this._id}
                Họ và tên: ${this._name}
                Tuổi: ${this._age}
                Điểm: ${this._grades}`
    }

    // Trả về điểm cao nhất
    getHighestGrade(): number{
        let highestGrade : number = 0;
        for (let i = 0; i < this._grades.length; i++) {
            if (this._grades[i] > highestGrade){
                highestGrade = this._grades[i]
            }
        }
        return highestGrade;
    }

    // Trả về danh sách điểm ở dạng chuỗi, phân tách bằng dấu phẩy.
    getGradesSummary(): string {
        return this._grades.join(", ");
    }
}

class StudentManager{
    private readonly listStudent: Student[]

    constructor(listStudent: Student[]) {
        this.listStudent = listStudent;
    }

    // Phương thức thêm sinh viên vào danh sách
    addStudent(student: Student[]): void{
        this.listStudent.push(...student)
    }

    // Xoá sinh viên dựa vào id
    removeStudent(supposeId: number): void{
        this.listStudent.filter(student => student.id !== supposeId)
    }

    // Tìm sinh viên theo id
    findStudentById(id: number) : void{
        return this.listStudent.forEach(student => {console.log(student.getDetail())})
    }
}

let arr : number[] = [8,9,10,5,6]
let arr2: number[] = [10,5,7,8,8]
let student: Student[] = [new Student(12 ,"JukisYuri" ,19 ,arr)]
let student2: Student[] = [new Student(15, "PilosYukis", 19, arr2)]
console.log(student[0].getAvarageGrade())
student[0].addGrade(8)
console.log(student[0])
console.log(student[0].getDetail())
console.log(student[0].getHighestGrade())
console.log(student[0].getGradesSummary())
let studentManager = new StudentManager([])
studentManager.addStudent(student)
studentManager.addStudent(student2)
console.log(studentManager)