// список моделей студентов
const students = [
    /* new Student('John', 20, 10),
    new Student('Bill', 25, 11.5),
    new Student('Mary', 22, 10.5) */
]
// заполнение представления списка данными моделей
function fillStudentList () {
    document.getElementById('root').innerHTML = ''
    fetch('http://localhost:4000/api/students')
        .then(response => response.json())
        .then(body => {
            students.length = 0 // удаление всех элементов массива
            body.data.forEach(s => students.push(
                new Student(s.name, s.age, s.avgScore, s.email, s.id)
            )) // наполнение массива актуальным списком моделей, полученных с сервера
            // формирование поддерева списка студентов и вставка его в DOM текущего документа
            students.forEach(s => {
                const student = document.createElement('div')

                const studentFirstDiv = document.createElement('div')
                const studentNameTitle = document.createElement('strong')
                studentNameTitle.innerText = 'Name: '
                studentFirstDiv.append(studentNameTitle)
                studentFirstDiv.append(s.name)

                const studentAgeDiv = document.createElement('div')
                const studentAgeTitle = document.createElement('strong')
                studentAgeTitle.innerText = 'Age: '
                studentAgeDiv.append(studentAgeTitle)
                studentAgeDiv.append(s.age)

                // TODO сконструировать фрагмент поддерева, соответствующий разметке второго вложенного div в представлении студента:
                /*
                * <div>
                        <strong>Age: </strong><span>{{age}}</span>&nbsp;&nbsp;<strong>AVG Score: </strong><span>{{score}}</span>
                    </div>
                * */

                student.append(studentFirstDiv)
                student.append(studentAgeDiv)
                student.append(document.createElement('hr'))
                // TODO вставить в корневой узел текущего студента сконструированный Вами выше узел второго вложенного div

                document.getElementById('root').append(student)
            })
        })
        .catch(error => alert(error.message))
}
fillStudentList()
