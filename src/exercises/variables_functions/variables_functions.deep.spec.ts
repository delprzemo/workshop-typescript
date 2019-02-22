// import { expect } from 'chai';


// describe('Variables and functions - exercise advanced', () => {

//     it('Variables and functions - exercise advanced', () => {
//         expect(GetPersonPenaltyPoints('9001281173', [[new Date(), 2], [new Date(), 5]], 20).message)
//             .to.equal('9001281173 has less than 26. Points: 7');

//         expect(GetPersonPenaltyPoints('9001281173', [[new Date(2013, 2, 1), 2], [new Date(), 5]], 28).message)
//             .to.equal('9001281173 has more than 26. Points: 5');

//         expect(GetPersonPenaltyPoints('9001281173', [], 16).message)
//             .to.equal('9001281173 has less than 26. Points: 0');

//         expect(GetPersonPenaltyPoints('9001281173', [], 16).points)
//             .to.equal(0);

//         expect(GetPersonPenaltyPoints('9001281173', [[new Date(), 2], [new Date(), 5]], 16).points)
//             .to.equal(7);

//         expect(GetPersonPenaltyPoints('9001281173', [[new Date(), 2], [new Date(), 5]], 16).identificationNumber)
//             .to.equal('9001281173');

//         const result = GetPersonPenaltyPoints('9001281173', [[new Date(), 2]], 16, "No more details", 22);

//         expect(result.firstArg).to.deep.equal("No more details");
//         expect(result.additional).to.deep.equal([22]);
//     });
// })

