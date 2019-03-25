import { expect } from 'chai';

describe('Functional programming - composition', () => {

    const trim = (s: string) => s.trim();
    const capitalize = (s: string) => s.toUpperCase();
    const substr = (s:string) => s.substr(1, 4);
    const getLength =  (s: string) => s.length;

    // it('Simple example', () => {
    //     // exercise - create trimAndCapitalize function
    //     const result = trimAndCapitalize("   hello world   ");

    //     expect(result).to.equal("HELLO WORLD");
    // });

    // it('With only one type', () => {

    //     // exercise - create compose function with two function and only one type

    //     const trimAndCapitalize = compose(trim, capitalize);
    //     const result = trimAndCapitalize("   hello world   ");

    //     expect(result).to.equal("HELLO WORLD");
    // });

    // it('Simple example with length', () => {
    //     // exercise - create trimAndGetLength function

    //     const result = trimAndGetLength("   hello world   ");

    //     expect(result).to.equal(11);
    // });

    // it('With different types', () => {

    //      // exercise - create compose function for trimAndLength

    //     const trimAndLength = compose(getLength, trim);
    //     const result = trimAndLength("   hello world   ");

    //     expect(result).to.equal(11);
    // });

    // it('Compose many (with params)', () => {

    //     // exercise - create composeMany function which will compose any quantity of functions with same type

    //     const doLotOfStuff = composeMany(substr, trim, capitalize);
    //     const result = doLotOfStuff("   hello world   ");

    //     expect(result).to.equal("ELLO");
    // });

});

