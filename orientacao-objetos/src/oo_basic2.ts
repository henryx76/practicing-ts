class address{
    constructor(
    public address: string,
    public zipCode: string,
    public number?: number,
   ){}
}


export class user {
    name: string
    email: string
    active: boolean = false
    address: address


    constructor(name: string, email: string, address: address, active: boolean = false) {
        console.log('constructor called')
        this.name = name
        this.email = email
        this.address = address
        this.active = active

    }
}


const address1 = new address('rua y', '23494-050', 18)
const user1 = new user('user 1', 'user@email.com', address1)
console.log(user1)

const address2 = new address('rua x', '23494-051', 17)
const user2 = new user('user 2', 'user2@email.com', address2)
console.log(user2.address)