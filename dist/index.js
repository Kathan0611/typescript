"use strict";
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Jaipur";
        this.email = email;
        this.name = name;
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
const hitesh = new User("h@h.com", "hitesh");
let age = 20;
if (age < 50)
    age = 30;
;
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000, 2022);
let sayHello;
sayHello = (name) => {
    console.log(`hello ${name}`);
};
sayHello('Danny');
let Yellow;
Yellow = (name) => {
    console.log(name);
};
Yellow("kathan");
function getSpeedRatio(v) {
    if (v.type === "Train") {
        return v.topSpeed / v.carriages;
    }
    return v.topSpeed / v.wingSpan;
}
let bigTrain = {
    type: 'Plane',
    topSpeed: 100,
    wingSpan: 25,
};
console.log(getSpeedRatio(bigTrain));
//# sourceMappingURL=index.js.map