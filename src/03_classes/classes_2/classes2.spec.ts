import { expect } from 'chai';


class Animal {

    protected distance = 0; 

    move(distanceInMeters: number = 0) {
        this.distance = this.distance + distanceInMeters; 
        return `Animal moved ${distanceInMeters}m.`;
    }
}

class Dog extends Animal {
    bark() {
        return ('Woof! Woof!');
    }

    getDistance() { 
        return this.distance;
    }
}

class Cat extends Animal { 
    static lives: number = 10; 

    getLives() {
        return Cat.lives;  
    }

    get catDistance(): number {
        return this.distance;
    }

    set catDistance(addDistance: number) {
        super.move(addDistance);
    }
}

describe('Class - inheritance', () => {

    // it('Dog - Animal inheritance', () => {
    //     var dog = new Dog();

    //     expect(dog.bark()).to.equal(/*Exercise*/);
    //     expect(dog.move(10)).to.equal(/*Exercise*/);
    //     expect(dog.getDistance()).to.equal(/*Exercise*/);
    // });

    // it('Cat - static parameter', () => {
    //     expect(Cat.lives).to.equal(/*Exercise*/);

    //     Cat.lives = 30;

    //     var cat = new Cat();

    //     expect(cat.getLives()).to.equal(/*Exercise*/);
    // });

    // it('Cat - Animal inheritance - accessors', () => {
    //     var cat = new Cat();
    //     cat.catDistance = 100;
    //     cat.catDistance = 100;
    //     cat.move(100);

    //     expect(cat.catDistance).to.equal(/*Exercise*/);
    // });
});

