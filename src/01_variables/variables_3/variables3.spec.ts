import { expect } from 'chai';


describe('Variables var, let, const', () => {

    // it('let declaration', () => {
    //     let a: number;
    //     a = 5;

    //     expect(typeof a).to.equal(/*exercise*/);
    //     expect(a).to.equal(/*exercise*/);
    // });

    // it('var declaration', () => {
    //     a = 5;
    //     var a;

    //     expect(a).to.equal(/*exercise*/);
    // });

    // it('var re-declaration', () => {
    //     var a = 1;
    //     var a = 1;

    //     expect(a).to.equal(/*exercise*/);
    // });

    // it('const - simple value', () => {
    //      const numLivesForCat = 9;
    //     //numLivesForCat++;
    
    //      expect(numLivesForCat).to.equal(/*exercise*/);
    // });

    // it('const as object', () => {
    //     const numLivesForCat = 9;
    //     const kitty = {
    //         name: "Aurora",
    //         numLives: numLivesForCat,
    //     }

    //     expect(typeof kitty).to.equal(/*exercise*/);

    //     // exercise - change name and numLives for kitty
    // });

    // it('var-scoping', () => {
    //     function f(shouldInitialize: boolean) {
    //         if (shouldInitialize) {
    //             var x = 10;
    //         }
        
    //         return x;
    //     }

    //     expect(f(true)).to.equal(/*exercise*/);
    //     expect(f(false)).to.equal(/*exercise*/);
    // });

    // it('var-scoping iteration', () => {
    //     function f() {
    //         for(var i = 0; i < 10; i++) {
    //             for(var i = 0; i < 10; i++) {
    //             }

    //             if(i == 2) return i;
    //         }
    //     }

    //     expect(f()).to.equal(/*exercise*/);
    // });

    //  // Intermediate
    // it('let-scoping iteration', () => {
    //     function f() {
    //         for(let i = 0; i < 10; i++) {

    //             for(let i = 0; i < 10; i++) {

    //             }

    //             if(i == 2) return i;
    //         }
    //     }

    //     expect(f()).to.equal(/*exercise*/);
    // });

    // it('var capturing quirk', (done) => {
    //     var result: number[] = [];
    //     function f() {
    //         for (var i = 0; i < 10; i++) {
    //             setTimeout(function() { result.push(i) }, 10 * i);
    //         }
    //     }

    //     f();

    //     setTimeout(()=>{
    //         expect(result[0]).to.equal(/*exercise*/);
    //         expect(result[9]).to.equal(/*exercise*/);
    //         done();
    //     }, 200);
    // });

    // it('let capturing quirk', (done) => {
    //     var result: number[] = [];
    //     function f() {
    //         for (let i = 0; i < 10; i++) {
    //             setTimeout(function() { result.push(i) }, 10 * i);
    //         }
    //     }

    //     f();

    //     setTimeout(()=>{
    //         expect(result[0]).to.equal(/*exercise*/);
    //         expect(result[9]).to.equal(/*exercise*/);
    //         done();
    //     }, 200);
    // });
});