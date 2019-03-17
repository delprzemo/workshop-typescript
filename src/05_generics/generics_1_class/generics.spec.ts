import { expect } from 'chai';

describe('Generics - classes, types, constraints', () => {

    // it('Simple generics class', () => {

    //     /*Exercise - Make MyClass generic - value, x and y should be same type*/
    //     class MyClass{
    //         value: any;
    //         buildObject = (x: any, y: any) => {
    //             this.value = x;
    //             return {x, y}};
    //     }

    //     let genericNumber = new MyClass();
    //     let genericString = new MyClass();
        

    //     expect(genericNumber.buildObject(1 ,2)).to.deep.equal({x: 1, y: 2});
    //     expect(genericNumber.value).to.deep.equal(1);
    //     expect(genericString.buildObject('1', '2')).to.deep.equal({x: '1', y: '2'});
    //     expect(genericString.value).to.deep.equal('1');
    // });

    // it('Simple generics type using interface', () => {

    //     /*Exercise - create IGenericIdentityFn interface*/

    //     let myIdentity: IGenericIdentityFn<number> = (arg: number): number => {return arg};

    //     expect(myIdentity(1)).to.equal(1);
    // });


    // interface Person {
    //     name: string;
    //     age: number;
    //     location: string;
    // }
    
    // type K1 = keyof Person; // "name" | "age" | "location"
    // type K2 = keyof Person[];  // "length" | "push" | "pop" | "concat" |

    // it('Using Type Parameters in Generic Constraints', () => {

    //     /*Exercise - create getProperty function that will get value by property - not allowing type non-existing properties*/

    //     let x = { a: 1, b: 2, c: 3, d: 4 };

    //     expect(getProperty(x, 'b')).to.equal(2);
    //     //expect(getProperty(x, 'e')).to.equal(2); - that should fail
    // });
});