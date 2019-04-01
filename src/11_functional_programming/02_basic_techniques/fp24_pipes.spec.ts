import { expect } from 'chai';

describe('Functional programming - pipes', () => {

    const trim = (s: string) => s.trim();
    const capitalize = (s: string) => s.toUpperCase();

    // it('Simple example', () => {
    //     // Exercise - create simplePipe function

    //     const trimAndCapitalize = simplePipe(trim, capitalize)
    //     const result = trimAndCapitalize("  test  ")

    //     expect(result).to.equal("TEST");
    // });

    // it('Usage', () => {
    //     // Exercise - create pipe function

    //     const trim = (s: string) => s.trim();
    //     const capitalize = (s: string) => s.toUpperCase();
    //     const substr = (s:string) => s.substr(1, 4);
        
    //     const doLotOfStuff = pipe(substr, trim, capitalize);
    //     const result = doLotOfStuff("   hello world   ");

    //     expect(result).to.equal("HE");
    // });
});
