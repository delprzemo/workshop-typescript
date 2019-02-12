import { expect } from 'chai';

abstract class Department {

    constructor(public name: string) { 
    }

    printName(): string {
        return this.name;
    }

    abstract printMeetingName(): string; 
}


// Exercise - implement IT class which will extend Department class


describe('Class - abstract', () => {
    // it('IT - use extended methods', () => {
    //     var it = new IT();

    //     expect(it.printMeetingName()).to.equal('IT meeting');
    // });
});

