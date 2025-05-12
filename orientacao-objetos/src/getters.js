"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
class Address {
    constructor() {
        this.address = '';
        this.zipCode = '';
    }
    setAddress(address) {
        if (address.length < 3) {
            throw new Error('invalid address');
        }
        this.address = address;
    }
    getAddress() {
        return this.address;
    }
    getZipCode() {
        return this.zipCode.replace(/\D/g, '');
    }
}
exports.Address = Address;
const address1 = new Address();
address1.setAddress('91929312');
console.log(address1.getZipCode());
