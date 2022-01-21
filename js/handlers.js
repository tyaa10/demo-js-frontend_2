// обработчик события "отправка формы"
document.getElementsByTagName('form')[0].addEventListener(
    'submit',
    (event) => {
        event.preventDefault()
        event.stopPropagation()
        const errors = new Map()
        const nameInput = document.getElementById('studentName')
        const ageInput = document.getElementById('age')
        if (!/^[A-ZА-Я][a-zа-я]{1,255}$/.test(nameInput.value)) {
            errors.set(nameInput, '1 - 255 characters')
        } else {
            document.getElementById(nameInput.id + 'Error').style.display = 'none'
        }
        if (!/^[0-9]{1,3}$/.test(ageInput.value) || Number(ageInput.value) < 4 || Number(ageInput.value) > 100) {
            errors.set(ageInput, '4 - 100')
        } else {
            document.getElementById(ageInput.id + 'Error').style.display = 'none'
        }
        if (errors.size > 0) {
            errors.forEach((message, element) => {
                const errorDiv = document.getElementById(element.id + 'Error')
                errorDiv.innerText = message
                errorDiv.style.display = 'block'
            })
        } else {
            /* const errorDivs = document.getElementsByClassName('form-error')
            for (let i = 0; i < errorDivs.length; i++) {
                // errorDiv.style.display = 'none'
                console.log('error', errorDivs[i])
                errorDivs[i].style.display = 'none'
            } */
            // TODO send form data to the server
            /* students.unshift(new Student(
                nameInput.value,
                document.getElementById('age').value,
                document.getElementById('score').value,
                document.getElementById('email').value
            )) */
            fillStudentList()
        }
    }
)
