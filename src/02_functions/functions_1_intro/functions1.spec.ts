import { expect } from 'chai';

describe('Functions - introduction', () => {

    // it('Named, Anonymous and Arrow function', () => {

    //     let z = 3;

    //     // Named function
    //     function add(x: number, y:number): number {
    //         return x + y + z;
    //     }

    //     // Anonymous function
    //     let myAdd = function(x: number, y: number = 1): number { 
    //         return x + y + z; 
    //     };

    //     // Arrow function
    //     let myArrowAdd = (x: number, y:number): number => {
    //         return x + y + z;
    //     }

    //     expect(add(1, 2)).to.equal(/*exercise*/);
    //     expect(myAdd(1, 2)).to.equal(/*exercise*/);
    //     expect(myArrowAdd(1, 2)).to.equal(/*exercise*/);
    //     //expect(add(1)).to.equal(/*exercise*/); 
    //     //expect(add(1)).to.equal(/*exercise*/); 
    // });

    // it('Void function', () => {

    //     let z = 3;

    //     function increaseZ(): void {
    //         z++;
    //     }

    //     function add(x: number, y:number): number {
    //         increaseZ();
    //         return  x + y + z;
    //     }

    //     expect(add(1, 2)).to.equal(/*exercise*/);
    //     expect(increaseZ()).to.equal(/*exercise*/);
    // });

    // it('Rest parameters', () => {
    //     function buildName(firstName: string, ...restOfName: string[]) {
    //         return firstName + " " + restOfName.join(" ");
    //     }
        
    //     let employeeName = buildName(/*exercise*/);

    //     expect(employeeName).to.equal("Joseph Samuel Lucas MacKinzie");
    // });

    // it('Writing the function type', () => {
    //     let sum: (x: number, y: number) => number;
            
    //     /*exercise - write sum function*/

    //     expect(sum(1, 2)).to.equal(3);
    // });
});