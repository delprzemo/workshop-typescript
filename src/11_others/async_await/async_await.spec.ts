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

    // // Intermediate
    // it('Exmaple with async/await and catch error', async function() { 

    //     let getCustomerAge = /*Exercise - async method with catch error*/

    //     await getCustomerAge(-2).catch((result) => {
    //         expect(result).to.equal(0);
    //     });
    // });

});

