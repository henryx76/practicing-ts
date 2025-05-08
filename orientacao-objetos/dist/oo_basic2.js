"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
var address = /** @class */ (function () {
    function address(address, zipCode, number) {
        this.address = address;
        this.zipCode = zipCode;
        this.number = number;
    }
    return address;
}());
var user = /** @class */ (function () {
    function user(name, email, address, active) {
        if (active === void 0) { active = false; }
        this.active = false;
        console.log('constructor called');
        this.name = name;
        this.email = email;
        this.address = address;
        this.active = active;
    }
    return user;
}());
exports.user = user;
var address1 = new address('rua y', '23494-050', 18);
var user1 = new user('user 1', 'user@email.com', address1);
console.log(user1);
var address2 = new address('rua x', '23494-051', 17);
var user2 = new user('user 2', 'user2@email.com', address2);
console.log(user2.address);
