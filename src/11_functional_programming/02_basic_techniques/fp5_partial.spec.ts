import { expect } from 'chai';

describe('Functional programming - partial', () => {

    // it('Simple example without partial', () => {
    //     function add(a: number, b: number) {
    //         return a + b;
    //     }
        
    //     const result = add(5, 5); // All arguments are provided at the same time

    //     expect(result).to.equal(10);
    // });

    // it('Simple example with partial', () => {
    //     // Exercise - create add function that will provide second argument in different time
        
    //     const add5 = add(5); // The 1st argument is provided
    //     const result = add5(5); // The 2nd argument is provided later

    //     expect(result).to.equal(10);
    // });

    // it('Extended example with partial', () => {
    //     // Exercise - create add function that will handle both partial and not
         
    //     const result1 = add(5, 5); 

    //     const add5 = add(5) as (b: number) => number; 
    //     const result2 = add5(5);

    //     expect(result1).to.equal(10);
    //     expect(result2).to.equal(10);
    // });

    // it('Usage of partial function', () => {
    //     const compose = <T1, T2, T3>( f: (x: T2) => T3, g: (x: T1) => T2) => (x: T1) => f(g(x));

    //     const trim = (s: string) => s.trim();
    //     const capitalize = (s: string) => s.toUpperCase();
    //     const trimAndCapitalize = compose(trim, capitalize);

    //     const replace = (s: string, f: string, r: string) => s.split(f).join(r);

    //     // Exercise - fix this error
    //     const trimCapitalizeAndReplace = compose(trimAndCapitalize, replace("/", "-"));
    //     const result = trimCapitalizeAndReplace(" 13/feb/1989 ");

    //     expect(result).to.equal("13-FEB-1989");
    // });
});

