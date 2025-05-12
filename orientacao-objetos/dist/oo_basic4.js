"use strict";
class Address {
    isCepValid(arg0) {
        throw new Error("Method not implemented.");
    }
    constructor(address, zipCode, number) {
        this.address = address;
        this.zipCode = zipCode;
        this.number = number;
    }
    changezipCode(newzipCode) {
        //this.zipCode = newZipCode
    }
}
const address1 = new Address('rua y', '23494-050', 18);
console.log(address1.zipCode);
