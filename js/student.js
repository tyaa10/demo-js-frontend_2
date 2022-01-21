class Student {
    // закрытое свойство: запрещено его прямое чтение/запись вне кода класса StudentModel
    #email
    #id
    // параметры по умолчанию
    constructor(name = '', age = 0, avgScore = 0, email = '', id = 0) {
        // методы
        this.setEmail = function (email) {
            if (/^[a-z0-9]{1,25}@[a-z]{1,16}(\.[a-z]{2,3}){1,2}$/.test(email)) {
                this.#email = email
            } else {
                throw new Error("Incorrect email!")
            }
        }
        this.getEmail = function () {
            return this.#email
        }
        /* this.toString = function () {
            return `StudentModel: {name: ${this.name}, email: ${this.#email}}`
        } */
        // свойства
        this.name = name
        this.age = age
        this.avgScore = avgScore
        if(email !== ''){
            this.setEmail(email)
        }
        this.#id
    }
    getId () {
        return this.#id
    }
    // статический метод для создания экземпляров (объектов) данного типа
    static createInstance (name, age, avgScore, email) {
        const sm = new StudentModel(name, age, avgScore, email)
        // запрет расширять объект новыми свойствами
        Object.preventExtensions(sm)
        return sm
    }
}
