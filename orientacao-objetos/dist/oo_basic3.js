"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
class Address {
    constructor(address, zipCode, number) {
        this.address = address;
        this.zipCode = zipCode;
        this.number = number;
    }
}
class user {
    constructor(name, email, active = false) {
        this.active = false;
        this.address = [];
        console.log('constructor called');
        this.name = name;
        this.email = email;
        this.active = active;
    }
    addAddress(newAddress) {
        this.address.push(newAddress);
    }
    getAddress() {
        return this.address;
    }
}
exports.user = user;
const address1 = new Address('rua y', '23494-050', 18);
const user1 = new user('user 1', 'user@email.com');
console.log(user1);
user1.addAddress(address1);
user1.addAddress(address1);
user1.addAddress(address1);
console.log(user1);
