"use strict";
// Default Export
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayHello2 = exports.sayHello = void 0;
class Fruit {
    constructor(type) {
        this.type = type;
    }
    getType() {
        console.log(this.type);
        return this.type;
    }
}
exports.default = Fruit;
// Named Exports
const sayHello = () => console.log("Hello");
exports.sayHello = sayHello;
const sayHello2 = () => console.log("something");
exports.sayHello2 = sayHello2;
