export class user {
    protected name: string // public| protected| private
    private email: string
    private active: boolean = false
    private address: Address [] = []


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

        this.name = newName
    }
    public getName(): string {
        return this.name
    }
}

class manager {
    
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
    public getNumber(): number {
        return 123
    }
}
class Manager extends user {
    public getName(): string{
        return 'manager; ${this.name}'
    }
}
class Admin extends user {
      public getName(): string{
        return 'adm; ${this.name}'
      }
}

const manager1 = new manager('manager1', 'manager@gmail.com', true)
console.log(manager1)