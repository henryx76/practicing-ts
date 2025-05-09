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

    public addAddress(newAddress: Address): void{
        this.address.push(newAddress)
    
    }
    public changeName(newName: string): void {
        if (newName.length < 3) {
            throw new Error('invalid name')
        }
    }
    public getName(): string {
        return this.name
    }
}

const user1 = new user('user 1', 'user1@email.com')
console.log(user1.getName())
user1.changeName('new Name')
console.log(user1.getName())