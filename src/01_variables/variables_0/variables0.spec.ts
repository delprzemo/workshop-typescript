import { expect } from 'chai';

describe('Variables declaration and assignment', () => {

    it('nums has number type and proper value', () => {
        var numWithValue = 1;
        var numWithoutValue: number;

        expect(typeof numWithValue).to.equal("number");
        expect(numWithValue).to.equal(1);

        expect(typeof numWithoutValue).to.equal("undefined");
        expect(numWithoutValue).to.equal(undefined);
    });
});

