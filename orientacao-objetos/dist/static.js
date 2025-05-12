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
    static isCepValid(zipCode) {
        return parseInt(zipCode.replace(/\d/g, '')) > Address.defaultCepValidation;
    }
}
exports.Address = Address;
Address.defaultCepValidation = 990000;
console.log(address1.isCepValid('9999000'));
