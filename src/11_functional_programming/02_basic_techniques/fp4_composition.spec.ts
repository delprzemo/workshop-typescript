import { expect } from 'chai';

describe('Functional programming - composition', () => {

    const trim = (s: string) => s.trim();
    const capitalize = (s: string) => s.toUpperCase();
    const substr = (s:string) => s.substr(1, 4);
    const getLength =  (s: string) => s.length;

    // Intermediate
    it('Simple example', () => {
        const trimAndCapitalize = (s: string) => capitalize(trim(s));
        const result = trimAndCapitalize("   hello world   ");

        expect(result).to.equal("HELLO WORLD");
    });

    // Intermediate
    it('With only one type', () => {

        const compose = <T>(f: (x: T) => T, g: (x: T)=> T) => (val: T) => f(g(val));

        const trimAndCapitalize = compose(trim, capitalize);
        const result = trimAndCapitalize("   hello world   ");

        expect(result).to.equal("HELLO WORLD");
    });

    // Intermediate
    it('Simple example with length', () => {
        const trimAndGetLength = (s: string) => getLength(trim(s));
        const result = trimAndGetLength("   hello world   ");

        expect(result).to.equal(11);
    });

    // Intermediate
    it('With different types', () => {

        const compose = <T1, T2>(f: (x: T1) => T2, g: (x: T1) => T1) => (val: T1) => f(g(val));

        const trimAndCapitalize = compose(getLength, trim);
        const result = trimAndCapitalize("   hello world   ");

        expect(result).to.equal(11);
    });

    // Advanced
    it('Compose many (with params)', () => {

        const composeMany = <T>(...functions: Array<(arg: T) => T>) => 
        (arg: T) => 
            functions.reduceRight((prev, curr) => {
                return curr(prev);
            }, arg)
        

        const doLotOfStuff = composeMany(substr, trim, capitalize);
        const result = doLotOfStuff("   hello world   ");

        expect(result).to.equal("ELLO");
    });

});

