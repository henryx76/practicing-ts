export class Address{
    private address: string = '';
    private zipCode: string = '';
    private numberA?: number
    private static defaultCepValidation = 990000
    

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
     public static isCepValid(zipCode: string): boolean {
        return parseInt(zipCode.replace(/\d/g, '')) > Address.defaultCepValidation
     }
    
 




}

console.log(address1.isCepValid('9999000'))