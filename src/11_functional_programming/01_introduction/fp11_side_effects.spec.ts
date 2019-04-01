import { expect } from 'chai';

describe('Functional programming side effects', () => {


    interface User {
        ageInMonths: number;
        name: string;
    }

    const users = [
        { ageInMonths: 24, name: "Remo" },
        { ageInMonths: 2, name: "Leo" }
    ];

    // it('Throw error', () => {

    //     function findUserAgeByName(users: User[], name: string): number {
    //         if (users.length == 0) {
    //             throw new Error("There are no users!");
    //         }
    //         const user = users.find(u => u.name === name);

    //         if (!user) {
    //             throw new Error("User not found!");
    //         } else {
    //             return user.ageInMonths;
    //         }
    //     }

    //     const userAge1 = findUserAgeByName(users, "Remo");
        
    //     expect(Math.round(userAge1 / 12)).to.equal(2);

    //     // const userAge2 = findUserAgeByName([], "Leo"); 
    //     // expect(userAge2 / 12).to.equal(1);  // That should throw error
    // });

    // it('Handle throwing error', () => {

    //     // Exercise - implement findUserAgeByName to be free of side effects without changing logic

    // });
});

