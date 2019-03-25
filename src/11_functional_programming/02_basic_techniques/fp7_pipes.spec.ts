import { expect } from 'chai';

describe('Functional programming - pipes', () => {

    const trim = (s: string) => s.trim();
    const capitalize = (s: string) => s.toUpperCase();

    // Intermediate
    it('Simple example', () => {
        // same as compose but in other sequence
        const simplePipe = <T>(f: (x: T) => T, g: (x:T) => T) => (x: T) => g(f(x));

        const trimAndCapitalize = simplePipe(trim, capitalize)
        const result = trimAndCapitalize("  test  ")

        expect(result).to.equal("TEST");
    });

    // Intermediate
    it('Usage', () => {
        // same as compose but here we don't have to return
        const pipe = <T>(...fns: Array<(arg: T) => T>) =>
        (value: T) =>
            fns.reduce((acc, fn) => fn(acc), value);

        const trim = (s: string) => s.trim();
        const capitalize = (s: string) => s.toUpperCase();
        const substr = (s:string) => s.substr(1, 4);
        
        const doLotOfStuff = pipe(substr, trim, capitalize);
        const result = doLotOfStuff("   hello world   ");

        expect(result).to.equal("HE");
    });
});
