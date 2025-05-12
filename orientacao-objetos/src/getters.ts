export class Address{
    private address: string = '';
    private zipCode: string = '';
    private number?: number
    

    public setAddress(address: string): void{
        if (address.length < 3 ){
            throw new Error('invalid address')
        }
        this.address = address
    }
    public getAddress(): string{
        return this.address
    }

     public getZipCode(): any {
        return this.zipCode.replace(/\D/g, '')
     }





}

const address1 = new Address()
address1.setAddress('91929312')
console.log(address1.getZipCode())