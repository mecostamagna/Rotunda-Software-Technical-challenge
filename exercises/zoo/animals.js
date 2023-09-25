class Animal {
    constructor(sound) {
        this.sound = sound;
    }

    speak(message) {
        let words = message.split(' ');
        return words.join(` ${this.sound} `) + ` ${this.sound}`;
    }
}

export class Lion extends Animal {
    constructor() {
        super('roar');
    }
}

export class Tiger extends Animal {
    constructor() {
        super('grrr');
    }
}

export class Duck extends Animal {
    constructor() {
        super('Cuak');
    }
}


export class Cow extends Animal {
    constructor() {
        super('Moo');
    }
}


export class Dog extends Animal {
    constructor() {
        super('Barf');
    }
}


export class Cat extends Animal {
    constructor() {
        super('Miau');
    }
}
