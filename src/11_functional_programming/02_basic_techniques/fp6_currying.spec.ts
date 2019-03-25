import { expect } from 'chai';

describe('Functional programming - currying', () => {

    // it('Simple example', () => {

    //     // Exercise - create curry function
    
    //     function add(a: number, b: number) {
    //         return a + b;
    //     }
        
    //     const curriedAdd = curry(add);
    //     const add5 = curriedAdd(5);
    //     const addResult = add5(5);

    //     expect(addResult).to.equal(10);
    // });

    // it('Usage of currying', () => {
    //     const compose = <T1, T2, T3>( f: (x: T2) => T3, g: (x: T1) => T2) => (x: T1) => f(g(x));

    //     const trim = (s: string) => s.trim();
    //     const capitalize = (s: string) => s.toUpperCase();
    //     const trimAndCapitalize = compose(trim, capitalize);

    //     const replace = (s: string, f: string, r: string) => s.split(f).join(r);

    //     // Exercise - create curry function

    //     const curriedReplace = curry(replace);

    //     const trimCapitalizeAndReplace = compose(trimAndCapitalize, curriedReplace("/")("-"));
    //     const result = trimCapitalizeAndReplace(" 13/feb/1989 ");

    //     expect(result).to.equal("13-FEB-1989");
    // });
});

