import { expect } from 'chai';

describe('Async / await', () => {


    // it('Exmaple with Promise', () => {

    //     let getCustomerAge = (customerId: number) : Promise<number> => {
    //         let promise: Promise<number> = new Promise((resolve, reject) => {
    //             if (customerId > 0) {
    //               resolve(10);
    //             } else{
    //               reject(0);
    //             }
    //         });

    //         return promise;
    //     }

    //     // First way
    //     getCustomerAge(2).then(result => {
    //         expect(result).to.equal(10);
    //     })

    //     getCustomerAge(2).then(result => {
    //         expect(result).to.equal(10);
    //     }).catch(result => {
    //         expect(result).to.equal(0);
    //     });

    // });

    // it('Exmaple with async/await', async function() { 

    //     let getCustomerAge = /*Exercise - async method*/

    //     let result = await getCustomerAge(2);

    //     expect(result).to.equal(10);
    // });

    // it('Exmaple with async/await and catch error', async function() { 

    //     let getCustomerAge = /*Exercise - async method with catch error*/

    //     await getCustomerAge(-2).catch((result) => {
    //         expect(result).to.equal(0);
    //     });
    // });

    // it('Asynchronous generator', async function() { 

    //     let counter = 0;

    //     function doSomethingAsync() {
    //         return new Promise<number>((result) => {
    //             setTimeout(() => {
    //                 counter += 1;
    //                 result(counter);
    //             }, 10);
    //         });
    //     }
    
    //     /*Exercise - implement iterableIterator which will call doSomethingAsync*/
    
    //     let val1 = await iterableIterator.next();
    //     let val2 = await iterableIterator.next();
    //     let val3 = await iterableIterator.next();

    //     expect(val1.value).to.equal(1);
    //     expect(val2.value).to.equal(2);
    //     expect(val3.value).to.equal(3);
    // });

    // it('Async iteration', async function() { 

    //     let counter = 0;
    //     let returnArray = [];

    //     function doSomethingAsync() {
    //         return new Promise<number>((result) => {
    //             setTimeout(() => {
    //                 counter += 1;
    //                 result(counter);
    //             }, 10);
    //         });
    //     }
    
    //     /*Exercise - implement runAllAsync which will call doSomethingAsync using async loop*/

    //     await runAllAsync();

    //     expect(returnArray.length).to.equal(3);
    // });

});

