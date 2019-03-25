import { expect } from 'chai';

describe('Functional programming - currying', () => {

    // Intermediate
    it('Simple example', () => {

        function curry<T1, T2, T3>(fn: (a: T1, b: T2) => T3) {
            return (a: T1) => (b: T2) => fn(a, b);
        }
    
        function add(a: number, b: number) {
            return a + b;
        }
        
        const curriedAdd = curry(add);
        const add5 = curriedAdd(5);
        const addResult = add5(5);

        expect(addResult).to.equal(10);
    });

    // Intermediate
    it('Usage of currying', () => {
        const compose = <T1, T2, T3>( f: (x: T2) => T3, g: (x: T1) => T2) => (x: T1) => f(g(x));

        const trim = (s: string) => s.trim();
        const capitalize = (s: string) => s.toUpperCase();
        const trimAndCapitalize = compose(trim, capitalize);

        const replace = (s: string, f: string, r: string) => s.split(f).join(r);

        function curry<T1, T2, T3, T4>(fn: (a: T1, b: T3, c: T2) => T4) {
            // this sequence because it is called curriedReplace("/")("-")("string to change")
            // below, so 'a' has to be last
            return (b: T3) => (c: T2) => (a: T1) => fn(a, b, c);
        }

        const curriedReplace = curry(replace);


        const trimCapitalizeAndReplace = compose(trimAndCapitalize, curriedReplace("/")("-"));
        const result = trimCapitalizeAndReplace(" 13/feb/1989 ");

        expect(result).to.equal("13-FEB-1989");
    });
});

