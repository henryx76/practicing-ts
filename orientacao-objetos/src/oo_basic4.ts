class Address{
    isCepValid(arg0: string): any {
        throw new Error("Method not implemented.")
    }
    constructor(
    public address: string,
    public readonly zipCode: string,
    public number?: number,
   ){}

   changezipCode(newzipCode: string): void{
    //this.zipCode = newZipCode
   }
}


const address1 = new Address('rua y', '23494-050', 18)
console.log(address1.zipCode)
