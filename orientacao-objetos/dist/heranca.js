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
class manager {
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
class Manager extends user {
    getName() {
        return 'manager; ${this.name}';
    }
}
class Admin extends user {
    getName() {
        return 'adm; ${this.name}';
    }
}
const manager1 = new manager('manager1', 'manager@gmail.com', true);
console.log(manager1);
