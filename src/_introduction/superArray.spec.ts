import { expect } from 'chai';

interface ISuperArray<T> {
    add (value: T): ISuperArray<T>,
    first() : T,
    getAll(): T[],
}


class SuperArray<T> implements ISuperArray<T> {

    constructor (private array: T[] = []) {}

    get length(): number {
        return this.array.length;
    }

    add(value: T): SuperArray<T> {
        this.array.push(value);
        return this;
    }

    first(): T {
        return this.array[0];
    }

    getAll(): T[] {
        return this.array;
    }

    mapToProperties(fn: keyof T) : SuperArray<T> {
        this.array = this.array.map(x=>x[fn.toString()]());
        return this;
    }
}


describe('Typescript introduction', () => {

    it('Super List string', () => {
        let stringList = new SuperArray<string>();

        expect(stringList.add("Element1").add("Element2").add("Element3").length).to.equal(3);

        expect(stringList.mapToProperties("toLowerCase").first()).to.equal("element1");

    });

    it('Super List number', () => {

         let numList = new SuperArray<number>();

        expect(numList.add(3).add(2).length).to.equal(2);

        expect(numList.mapToProperties("valueOf").first()).to.equal(3);
    });
});



