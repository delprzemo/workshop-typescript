import { expect } from 'chai';

class Greeter {
    private greeting: string; // default it is public, not like in C# or Java
    constructor(message: string) {   // multiple constructor implementations are not allowed
        this.greeting = message;
    }

    greet() {
        return "Hello, " + this.greeting;
    }
}

class NewGreeter {
    private greeting: string; 
    constructor(message?: string) {   
        this.greeting = message;
    }

    private secretGreet() {
        return 'Secret Greet';
    }

    greet() {
        return "Hello, " + this.greeting;
    }
}


describe('Class - constructor and function', () => {
    // it('Should return greeting message', () => {
    //     var greeter = new Greeter('friend');

    //     expect(greeter.greet()).to.equal(/*Exercise*/);
    // });

    // it('Optional constructor parameter', () => {
    //     var greeter = new NewGreeter('');
    //     var greeter2 = new NewGreeter('friend')

    //     expect(greeter.greet()).to.equal(/*Exercise*/);
    //     expect(greeter2.greet()).to.equal(/*Exercise*/);
    // });

    it('Private properties hacking', () => {
        var greeter = new NewGreeter('Test');

        expect(greeter['greeting']).to.equal('Test');
        expect(eval('greeter.secretGreet')()).to.equal('Secret Greet');
    });

});