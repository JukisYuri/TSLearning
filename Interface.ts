/*
Interface
Đề bài: Tạo interface Person có các thuộc tính:
    name (string)
    age (number)
    isStudent (boolean)
Tạo một đối tượng kiểu Person và in thông tin ra console.
 */

interface Person {
    name: String
    age: number
    isStudent: boolean
}

let person: Person = {
    name: "Jukis Yuri",
    age: 19,
    isStudent: true
}

console.log(person)