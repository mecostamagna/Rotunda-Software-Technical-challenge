import { Cat, Cow, Dog, Duck, Lion, Tiger } from "./animals.js";

const lion = new Lion();
console.log(lion.speak("I'm a lion")); 


const tiger = new Tiger();
console.log(tiger.speak("Lions suck")); 

const dog = new Dog();
console.log(dog.speak("I'm a dog"));

const duck = new Duck();
console.log(duck.speak("I'm a duck"));

const cow = new Cow();
console.log(cow.speak("I'm a cow"));

const cat = new Cat();
console.log(cat.speak("I'm a cat"));