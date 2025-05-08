class Address{
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
    address: Address [] = []


    constructor(name: string, email: string, active: boolean = false) {
        console.log('constructor called')
        this.name = name
        this.email = email
        this.active = active

    }


    addAddress(newAddress: Address): void{
        this.address.push(newAddress)
    }

    getAddress(): Address[] {
        return this.address
    }
}

const address1 = new Address('rua y', '23494-050', 18)
const user1 = new user('user 1', 'user@email.com')
console.log(user1)
user1.addAddress(address1)
user1.addAddress(address1)
user1.addAddress(address1)
console.log(user1)