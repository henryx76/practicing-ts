var user = /** @class */ (function () {
    function user(name, email, active) {
        if (active === void 0) { active = false; }
        this.active = false;
        console.log('constructor called');
        this.name = name;
        this.email = email;
        this.active = active;
    }
    return user;
}());
var harry = new user('harry', 'harry@gmail.com');
console.log(harry);
var haki = new user('haki', 'harry@gmail.com', true);
console.log(haki);
var hai = new user('hai', 'harry@gmail.com');
console.log(hai);
