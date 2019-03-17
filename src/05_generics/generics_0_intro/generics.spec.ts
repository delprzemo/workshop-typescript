import { expect } from 'chai';

describe('Generics - introduction', () => {

    // it('Function without genercis', () => {

    //     function getWithoutUndefined(value: any): any {
    //         return (typeof value !== "undefined") ? value : null;
    //     }

    //     expect(getWithoutUndefined(/*Exercise*/)).to.equal('test');
    //     expect(getWithoutUndefined(/*Exercise*/)).to.equal(null);
    //     expect(getWithoutUndefined(/*Exercise*/)).to.equal(null);
    //     expect(getWithoutUndefined(/*Exercise*/)).to.equal('test');
    // });

    // it('Function with generic', () => {

    //     function getWithoutUndefined<T>(value: T): T {
    //         return (typeof value !== "undefined") ? value : null;
    //     }

    //     expect(getWithoutUndefined<string>(/*Exercise*/)).to.equal('test');
    //     expect(getWithoutUndefined(/*Exercise*/)).to.equal('test');
    //     expect(getWithoutUndefined<string>(/*Exercise*/)).to.equal(null);
    //     expect(getWithoutUndefined<string>(/*Exercise*/)).to.equal(null);
    // });


    // it('Interface with two generics - exercise', () => {

    //     interface IArgOperations {
    //         joinToObject: /*Exercise*/
    //     }

    //     class ArgOperations implements IArgOperations {

    //         joinToObject = /*Exercise - should build object from two parameters with generic types*/
    //     }

    //     var argOperations = new ArgOperations();
    //     var results = argOperations.joinToObject('Test', 2);

    //     expect(results.arg).to.equal('Test');
    //     expect(results.arg2).to.equal(2);
    // });

    // it('Interface with generic arguments - exercise', () => {
    //     interface IArgOperations {
    //         mergeParametersToArray: /*Exercise*/
    //     }

    //     class ArgOperations implements IArgOperations {
    //         mergeParametersToArray = /*Exercise - should build array from any quantity of parameters, bit all must be same type*/
            
    //     }

    //     var argOperations = new ArgOperations();

    //     expect(argOperations.mergeParametersToArray('Test', 'Test2')).to.deep.equal(['Test', 'Test2']);
    //     expect(argOperations.mergeParametersToArray(2, 3)).to.deep.equal([2, 3]);
    // });


    // it('Generic extending interface', () => {

    //     /*Exercise - create ILengthwise interface*/
        
    //     function getLength<T extends ILengthwise>(arg: T): number {
    //         return arg.length;
    //     }


    //     expect(getLength('Test')).to.equal(4); // (change it to 2222)
    // });
});