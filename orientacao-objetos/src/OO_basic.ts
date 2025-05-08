class user {
    name: string
    email: string
    active: boolean = false


    constructor(name: string, email: string, active: boolean = false) {
        console.log('constructor called')
        this.name = name
        this.email = email
        this.active = active

    }
}


const harry = new user('harry', 'harry@gmail.com')
console.log(harry)
const haki = new user('haki', 'harry@gmail.com', true)
console.log(haki)
const hai = new user('hai', 'harry@gmail.com')
console.log(hai)