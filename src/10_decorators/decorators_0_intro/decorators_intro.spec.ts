import { expect } from 'chai';


describe('Decorators - introduction', () => {

    // it('Seal - simple example - no sealing', () => {
    //     class SampleClass {
    //         value = 10;
    //         method(par: string) {
    //             return par + this.value;
    //         }
    //     }

    //     let sample = new SampleClass();
    //     sample.method('Test'); 

    //     Object.defineProperty(sample, 'value', { get: function() { return 'g'; } }); // redefine value to function returning 'g' is possible

    //     expect(typeof sample.value).to.equal('string');
    // });

    // it('Seal - simple example - with sealing', () => {
    //     class SampleClass {
    //         value = 10;
    //         method(par: string) {
    //             return par + this.value;
    //         }
    //     }

    //     let sample = new SampleClass();
    //     sample.method('Test'); 

    //     // Object.seal(sample); //we are closing this sample to change its properties
    //     Object.defineProperty(sample, 'value', { get: function() { return 'g'; } }); // transform value back to number will throw error because it was sealed

    //     expect(typeof sample.value).to.equal('string');
    // });


    // it('Simple sealed decorator', () => {

    //     /* Exercise - create customMethodSealed that will seal target object */

    //     class SampleClass {
    //         value = 10;
    //         @customMethodSealed()
    //         method(par: string) {
    //             return par + this.value;
    //         }
    //     }

    //     let sample = new SampleClass();
    //     sample.method('Test');

    //     Object.defineProperty(sample, 'method', { get: function() { return 'g'; } });

    //     expect(sample).not.to.equal(null);
    // });


    // it('Custom constructor decorator', () => {

    //     /* Exercise - create classDecorator that will change value of hello property */
        
    //     @classDecorator
    //     class Greeter {
    //         hello: string;
    //         constructor(par: string) {
    //             this.hello = par;
    //         }
    //     }

    //     let greeter = new Greeter('Hi');

    //     expect(greeter.hello).to.equal("Hello");
    // });

    // it('Custom method decorator', () => {

    //     /* Exercise - create customMethodDecorator that will change return value */

    //     class Greeter {
    //         greeting: string;
    //         constructor(message: string) {
    //             this.greeting = message;
    //         }

    //         @customMethodDecorator("here is hacker")
    //         greet() {
    //             return "Hello, " + this.greeting;
    //         }
    //     }

    //     let greeter = new Greeter('here is programmer');

    //     expect(greeter.greet()).to.equal("Hello, here is hacker");
    // });

    // // https://medium.com/@ayusharma.in/objects-writable-configurable-enumerable-365cdff6a408
    // it('Custom accesor decorator', () => {

    //     function get(value: any) {
    //         /* Exercise - change get to return value from parameters */
    //     }

    //     class Greeter {
            
    //         private _greeting: string;

    //         constructor(message: string) {
    //             this._greeting = message;
    //         }

    //         @get("Default Hello")
    //         get greeting() {
    //             return this._greeting;
    //         }
            
    //         greet() {
    //             return "Hello, " + this._greeting;
    //         }
    //     }

    //     let greeter = new Greeter('here is programmer');

    //     expect(greeter.greeting).to.equal("Default Hello");
    // });
});

