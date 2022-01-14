import Student from './student.mjs'

// список моделей студентов
const students = [
    new Student('John', 20, 10),
    new Student('Bill', 25, 11.5),
    new Student('Mary', 22, 10.5)
]
// заполнение представления списка данными моделей
students.forEach(s => {
    const student = document.createElement('div')

    const studentFirstDiv = document.createElement('div')
    const studentNameTitle = document.createElement('strong')
    studentNameTitle.innerText = 'Name: '
    studentFirstDiv.append(studentNameTitle)
    studentFirstDiv.append(s.name)

    // TODO сконструировать фрагмент поддерева, соответствующий разметке второго вложенного div в представлении студента:
    /*
    * <div>
            <strong>Age: </strong><span>{{age}}</span>&nbsp;&nbsp;<strong>AVG Score: </strong><span>{{score}}</span>
        </div>
    * */

    student.append(studentFirstDiv)
    // TODO вставить в корневой узел текущего студента сконструированный Вами выше узел второго вложенного div

    document.getElementById('root').append(student)
})
