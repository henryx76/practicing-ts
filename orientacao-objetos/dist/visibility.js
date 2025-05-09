"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
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
    changeName(newName) {
        if (newName.length < 3) {
            throw new Error('invalid name');
        }
    }
    getName() {
        return this.name;
    }
}
exports.user = user;
const user1 = new user('user 1', 'user1@email.com');
console.log(user1.getName());
user1.changeName('new Name');
console.log(user1.getName());
