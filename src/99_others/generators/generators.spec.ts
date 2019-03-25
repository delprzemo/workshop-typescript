import { expect } from 'chai';

describe('Generator functions', () => {

    // it('Exmaple with generators', () => {

    //     function* idMaker(){
    //         let index = 0;
    //         while(index < 3)
    //           yield index++;
    //       }
          
    //       let gen = idMaker();
          
    //       expect(gen.next().value).to.equal(/*Exercise*/);
    //       expect(gen.next().value).to.equal(/*Exercise*/);
    //       expect(gen.next().value).to.equal(/*Exercise*/);

    //       let lastIteration = gen.next();
    //       expect(lastIteration.value).to.equal(/*Exercise*/);
    //       expect(lastIteration.done).to.equal(/*Exercise*/);
    // });

    //  // Intermediate
    //  it('Delegating to another generator', () => {
    //     function* g1() {
    //         yield 2;
    //         yield 3;
    //         yield 4;
    //     }

    //     /*Exercise - create iterator with g2 generator which will delegate to g1*/

    //     var iterator1 = g2();

    //     expect(iterator1.next().value).to.equal(1);
    //     expect(iterator1.next().value).to.equal(2);
    //     expect(iterator1.next().value).to.equal(3);
    //     expect(iterator1.next().value).to.equal(4);
    //     expect(iterator1.next().value).to.equal(5);
    // });

    // // Intermediate
    // it('Delegating to another generator 2', () => {

    //     function* generator() {
    //         yield 1;
    //         /*Exercise - create delegate to array here*/
    //         yield 5;
    //     }

    //     var iterator1 = generator();

    //     expect(iterator1.next().value).to.equal(1);
    //     expect(iterator1.next().value).to.equal(2);
    //     expect(iterator1.next().value).to.equal(3);
    //     expect(iterator1.next().value).to.equal(4);
    //     expect(iterator1.next().value).to.equal(5);
    // });

});

