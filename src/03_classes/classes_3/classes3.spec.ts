import { expect } from 'chai';

abstract class Department {

    constructor(public name: string) { 

    }

    printName(): string {
        return this.name;
    }

    abstract printMeetingName(): string; 
}


class IT extends Department{

    constructor() {
        super("IT");
    }

    printMeetingName() {
        return `${this.constructor.name} meeting`;
    }
}


describe('Class - abstract', () => {
    it('IT - use extended methods', () => {
        var it = new IT();

        expect(it.printMeetingName()).to.equal('IT meeting');
    });
});

