// import { expect } from 'chai';
// import {MyList as List} from './my_list'
// import GetPersonPenaltyPoints from './penalty_point_function'    


// describe('Modules', () => {

//     it('Exercise 1', () => {
//         let list = new List();
//         expect(list.length).to.equal(0);

//         list.add("Element1");
//         list.add("Element2");
//         list.add("Element3");

//         expect(list.length).to.equal(3);
//         expect(list.first()).to.equal("Element1");
//         expect(list.first()).to.equal(list.getAll()[0]);

//         list.remove("Element2");
//         expect(list.length).to.equal(2);

//         let listNextInstance = new List(list);
//         expect(listNextInstance.length).to.equal(2);

//         expect(list.add('NewElement').getAll().length).to.equal(3);

//     })

//     it('Exercise 2', () => {
//         expect(GetPersonPenaltyPoints('9001281173', [1, 3, 5, 6], 20).message)
//             .to.equal('9001281173 has less than 26. Points: 15');

//         expect(GetPersonPenaltyPoints('9001281173', [1, 3, 5, 6, 20], 28).message)
//             .to.equal('9001281173 has more than 26. Points: 35');

//         expect(GetPersonPenaltyPoints('9001281173', [], 16).message)
//             .to.equal('9001281173 has less than 26. Points: 0');

//         expect(GetPersonPenaltyPoints('9001281173', [], 16).points)
//             .to.equal(0);

//         expect(GetPersonPenaltyPoints('9001281173', [2, 3], 16).points)
//             .to.equal(5);

//         expect(GetPersonPenaltyPoints('9001281173', [2, 3], 16).identificationNumber)
//             .to.equal('9001281173');

//         expect(GetPersonPenaltyPoints('9001281173', [2, 3], 16, "No more details", 22).additional)
//             .to.deep.equal(["No more details", 22]);
//     });
// });