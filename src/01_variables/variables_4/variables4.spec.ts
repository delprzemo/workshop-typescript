import { expect } from 'chai';

describe('destructuring, spread', () => {

    it('spread for array', () => {
        let first = [1, 2];
        let second = [3, 4];
        let bothPlus = [0, ...first, ...second, 5];

        expect(bothPlus.length).to.equal(6);
        expect(bothPlus[2]).to.equal(2);
    });

    it('spread for object', () => {
        let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
        let search = { food: "rich", ...defaults };

        expect(search.price).to.equal("$$");
        expect(search.food).to.equal("spicy");
    });

    it('destructuring', () => {
        let input = [1, 2];
        let [first, second] = input;

        expect(first).to.equal(1);
        expect(second).to.equal(2);
    });

    it('destructuring with params', () => {
        let [first, ...rest] = [1, 2, 3, 4];

        expect(first).to.equal(1);
        expect(rest).to.deep.equal([2,3,4]);
    });

    it('destructuring and spreading', () => {
        let first = [1, 2];
        let second = [3, 4];
        let bothPlus = [0, ...first, ...second];
        let [firstElement, ...rest] = [...bothPlus];


        expect(firstElement).to.equal(0);
        expect([...rest]).to.deep.equal([1,2,3,4]);
    });

    it('restrict parameters for function by custom type', () => {
        type C = { a: string, b?: number }
        function f({ a, b }: C): any {
            return a + b;
        }

        expect(f({a: 'test', b: 2})).to.equal("test2");
    });
});