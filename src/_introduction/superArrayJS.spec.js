import { expect } from 'chai';


function SuperArray() {
    this.array = [];

     Object.defineProperty(SuperArray.prototype, "length", {
        get: function () {
            return this.array.length;
        },
        enumerable: true,
        configurable: true
    });

    this.add = function (value) {
        this.array.push(value);
        return this;
    };

    this.first = function () {
        return this.array[0];
    };

    this.getAll = function () {
        return this.array;
    };

    this.mapToProperties = function (fn) {
        this.array = this.array.map(function (x) { return x[fn](); });
        return this;
    };

}


describe('Typescript introduction', () => {

    it('Super List string', () => {
        let stringList = new SuperArray();

        stringList.add("Element1").add("Element2").add("Element3").getAll();

        expect(stringList.getAll().length).to.equal(3);

        expect(stringList.mapToProperties("toLowerCase").first()).to.equal("element1");

    });

    it('Super List number', () => {

         let numList = new SuperArray();

        expect(numList.add(3).add(2).length).to.equal(2);

        expect(numList.mapToProperties("valueOf").first()).to.equal(3);
    });
});