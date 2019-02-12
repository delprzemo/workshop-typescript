import { expect } from 'chai';



describe('Interfaces and classes - fundamentals', () => {

    it('Exercise 1', () => {

        let user1 = new User(20);
        let user2 = new User(28);

        let testUser = new TestUser();

        expect(User.type).to.equal("General User");
        expect(TestUser.type).to.equal("Test User");

        expect(user1.isTestUser).to.equal(false);
        expect(user1.getAgeInfo(22)).to.equal("User has less than 22");
        expect(user2.getAgeInfo()).to.equal("User has more than 26");
        expect(testUser.isTestUser).to.equal(true);
        expect(testUser.getAgeInfo()).to.equal("User has less than 26. But this is test user");

        expect(user1.extendUserObject({name: "John"}).age).to.equal(20);
        expect(user1.extendUserObject({name: "John"}).name).to.equal("John");
        expect(user1.extendUserObject({name: "John", lastName: 'Kowalski'}).lastName).to.equal("Kowalski");
    });
})


abstract class ObjectWithAge {
    constructor(protected age: number) { }
    abstract getAgeInfo(limitAge: number): string 
}

interface IExtendedUserObject {
    age: number,
    name: string,
    lastName: string
}

interface ILimitAge {
    name: string,
    lastName?: string
}

interface IUser { 
    isTestUser: boolean;
    extendUserObject(obj: ILimitAge): IExtendedUserObject;
}

class User extends ObjectWithAge implements IUser {
    public isTestUser: boolean = false;
    static type: string = "General User"; 

    constructor(age: number) {
        super(age);
    }

    getAgeInfo(limitAge: number = 26): string {
        return `User has ${this.age >= limitAge ? 'more' : 'less'} than ${limitAge}`;
    }

    extendUserObject(obj: ILimitAge): IExtendedUserObject {
        return {age: this.age, name: obj.name, lastName: obj.lastName}
    }
}

class TestUser extends User {
    static type: string = "Test User"; 

    constructor(age: number = 20) {
        super(age);
        this.isTestUser = true;
    }

    getAgeInfo(limitAge: number = 26): string {
        return super.getAgeInfo(limitAge) + ". But this is test user";
    }
}