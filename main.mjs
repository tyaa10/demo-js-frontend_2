import Student from './student.mjs'
// document.getElementById('root').innerText = 'Hello DOM!'
// Шаблон разметки отображения сведений об одном студенте
const studentViewTemplate = `
    <div>
        <div><strong>Name: </strong>{{name}}</div>
        <div>
            <strong>Age: </strong><span>{{age}}</span>&nbsp;&nbsp;<strong>AVG Score: </strong><span>{{score}}</span>
        </div>
    </div>
`
// список моделей студентов
const students = [
    new Student('John', 20, 10),
    new Student('Bill', 25, 11.5),
    new Student('Mary', 22, 10.5)
]
// заполнение представления списка данными моделей
let studentsListView = ''
students.forEach(s => {
    const studentView = studentViewTemplate
    studentsListView += studentView
        .replace('{{name}}', s.name)
        .replace('{{age}}', s.age)
        .replace('{{score}}', s.avgScore)
})
// вставка заполненного предстваления списка на страницу
// document.getElementById('root').innerText += studentDiv
// document.getElementById('root').innerHTML += studentDiv
document.getElementById('root').innerHTML = studentsListView
