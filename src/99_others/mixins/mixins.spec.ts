import { expect } from 'chai';

describe('Mixins', () => {

    // it('Sample mixin', () => {
    //     let date: Date;

    //     /* Exercise - create Timestamped mixin function */

    //     class User {
    //         name: string;
        
    //         constructor(name: string) {
    //         this.name = name;
    //         }
    //     }
        
    //     const TimestampedUser = Timestamped(User);
        
    //     const user = new TimestampedUser("John Doe");

    //     expect(user.name).to.equal('John Doe');
    //     expect(user.timestamp.toPrecision(2)).to.equal(Date.now().toPrecision(2));

    // });

    // it('Sample mixin with activeable method', () => {
    //     let date: Date;

    //     type Constructor<T = {}> = new (...args: any[]) => T;  

    //     /* Exercise - create Activatable mixin function that will add property isActivated with methods: Activate and Deactivate */

    //     class User {
    //         name: string;
        
    //         constructor(name: string) {
    //         this.name = name;
    //         }
    //     }
        
    //     const ActivableUser = Activatable(User);
        
    //     const user = new ActivableUser("John Doe");

    //     expect(user.isActivated).to.equal(false);

    //     user.activate();

    //     expect(user.isActivated).to.equal(true);

    //     user.deactivate();

    //     expect(user.isActivated).to.equal(false);
    // });

    
    // it('Composing mixins', () => {

    //     /* Exercise - create compose of Activatable and Timestamped mixin function */

    //     class User {
    //         name: string;
        
    //         constructor(name: string) {
    //         this.name = name;
    //         }
    //     }
        
    //     const SpecialUser = Activatable(Timestamped(User));
        
    //     const user = new SpecialUser("John Doe");

    //     expect(user.isActivated).to.equal(false);

    //     user.activate();

    //     expect(user.isActivated).to.equal(true);
    //     expect(user.name).to.equal('John Doe');
    //     expect(user.timestamp.toPrecision(2)).to.equal(Date.now().toPrecision(2));

    // });
});