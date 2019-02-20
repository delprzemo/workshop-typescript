// import { expect } from 'chai';



// describe('Interfaces and classes - deeper', () => {

//     it('Exercise 1', () => {

//         let user1 = new User(20);
//         let user2 = new User(28);

//         expect(user1.getAgeInfo(22)).to.equal("User has less than 22");
//         expect(user2.getAgeInfo()).to.equal("User has more than 26");

//         expect(user1.extendUserObject({name: "John"}).age).to.equal('20');
//         expect(user1.extendUserObject({name: "John"}).name).to.equal("John");
//         expect(user1.extendUserObject({name: "John", lastName: 'Kowalski'}).lastName).to.equal("Kowalski");
//         expect(user1.extendUserObject({name: "John", lastName: 'Kowalski', title: 'mgr'}).title).to.equal("mgr");
//     });
// })


// class User extends ObjectWithAge {
//     constructor(age: number) {
//         super(age);
//     }

//     getAgeInfo(limitAge: number = 26): string {
//         return `User has ${this.age >= limitAge ? 'more' : 'less'} than ${limitAge}`;
//     }
// }