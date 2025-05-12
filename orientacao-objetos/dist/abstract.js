"use strict";
class person {
    constructor(name) {
        this.name = name;
    }
    setScore(score) {
        if (score < 0 || score > 900) {
            throw new Error('score invalid');
        }
    }
}
class Student extends person {
    constructor(name, score) {
        super(name);
        this.score = score;
    }
    calcStore() {
        return 800;
    }
}
class techer extends person {
    constructor(name, score) {
        super(name);
        this.score = score;
    }
    calcStore() {
        return 700;
    }
}
const student1 = new Student('jonas', 700);
