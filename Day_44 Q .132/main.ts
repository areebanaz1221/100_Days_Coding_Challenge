// Default Export

export default class Fruity {
    [x: string]: any;
    constructor(type: any) {
        this.type = type;
    }

    getType() {
        console.log(this.type)
        return this.type;
    }
}

// Named Exports

export const sayHello = () => console.log("Hello")

export const sayHello2 = () => console.log("something")