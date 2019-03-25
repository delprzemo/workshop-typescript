import { expect } from 'chai';


describe('TypeScript 3 new features', () => {

    // it('strictBindCallApply', () => {
    //     function foo(a: number, b: string): string {
    //         return a + b;
    //     }
        
    //     let a = foo.apply(undefined, [10]);              // error: too few argumnts
    //     let b = foo.apply(undefined, [10, 20]);          // error: 2nd argument is a number
    //     let d = foo.apply(undefined, [10, "hello"]);     // okay! returns a string
    // })

    // it('Generic spread expressions in object literals', () => {
    //     function spread<T, U>(t: T, u: U) {
    //         return { ...t, ...u };  // T & U
    //     }
        
    //     let x: { a: string, b: number };
    //     let y: { b: string, c: boolean };
        
    //     let s1 = { ...x, ...y };
    //     let s2 = spread(x, y); 
    //     let b1 = s1.b; 
    //     let b2 = s2.b; 
    // })

    // it('Generic object rest variables and parameters', () => {
    //     function excludeTag<T extends { tag: string }>(obj: T) {
    //         let { tag, ...rest } = obj; 
    //         return rest;  
    //     }
        
    //     const taggedPoint = { x: 10, y: 20, tag: "point" };
    //     const point = excludeTag(taggedPoint);  

    //     expect(point['tag']).to.equal(undefined);
    // })

    // // Exercise
    // it('Mapped types on tuples and arrays', () => {
    //     type MapToPromise<T> = /*Exercise*/

    //     type Coordinate = [number, number, string]

    //     type PromiseCoordinate = MapToPromise<Coordinate>; // should be [Promise<number>, Promise<number>, Promise<string>]
    // })

    // it('Rest parameters with tuple types', () => {
    //     let foo = (...args: [number, string, boolean]): void =>  {
    //     };

    //     //function foo(args_0: number, args_1: string, args_2: boolean): void;
    // })

    // it('Optional elements in tuple types', () => {
    //     let t: [number, string?, boolean?];
    //     t = [42, "hello", true];
    //     t = [42, "hello"];
    //     t = [42];

    //     expect(t.length).to.equal(1);
    // })

    // it('BigInt', () => {
    //     let foo: number;
    //     let bar: bigint;

    //     // foo = bar; 
    //     // bar = foo; 
    // })

    // it('Unknown type', () => {

    //     // function f10(x: unknown) {
    //     //     x == 5;
    //     //     x = "5"; //there never error occur becuse JS accepts it
    //     //     x = x + 1; //error because it operation typical for number
    //     //     x = null; 
    //     //     x > 0 //  '>' is operation typical for number
    //     //     x.Test() // Test() is specific method which not all variables contain
    //     // }

    // })
});

