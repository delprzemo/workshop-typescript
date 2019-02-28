import { expect } from 'chai';


describe('Variables basic types', () => {
    

    // it('Boolean', () => {
    //     let isTrue: boolean;
    //     expect(typeof isTrue).to.equal(/*exercise*/);

    //     isTrue = true;
    //     expect(typeof isTrue).to.equal(/*exercise*/);
    //     expect(isTrue).to.equal(/*exercise*/);
    // });

    // it('Number', () => {
    //     var integer = 6;
    //     var hex = 0xf00d;
    //     var binary = 0b1010;
    //     var octal = 0o744;
    //     var decimal = 0.21;

    //     expect(typeof integer).to.equal(/*exercise*/);
    //     expect(typeof hex).to.equal(/*exercise*/);
    //     expect(typeof binary).to.equal(/*exercise*/);
    //     expect(typeof octal).to.equal(/*exercise*/);
    //     expect(typeof decimal).to.equal(/*exercise*/);
    // });

    // it('String', () => {
    //     let fullName: string = `Bob Bobbington`;
    //     let age: number = 37;
    //     let sentence: string = `Hello, my name is ${ fullName }. I'll be ${ age + 1 } years old next month.`;

    //     expect(sentence).to.equal(/*exercise*/);
    // })

    // it('Array', () => {
    //     let list: number[] = [1, 2, 3];
    //     let list2: Array<number> = [1, 2, 3];

    //     expect(typeof list).to.equal(/*exercise*/);
    //     expect(typeof list2).to.equal(/*exercise*/);
    //     expect(typeof list[0]).to.equal(/*exercise*/);
    //     expect(typeof list2[0]).to.equal(/*exercise*/);
    // })

    // it('Enum', () => {
    //     enum Color {Red, Green, Blue = 6}
    //     let c: Color = Color.Green; 

    //     expect(typeof Color).to.equal(/*exercise*/);
    //     expect(typeof c).to.equal(/*exercise*/);
    //     expect(c).to.equal(/*exercise*/);
    //     expect(Color.Blue).to.equal(/*exercise*/);
    // })

    it('Tuple', () => {
        let x: [string, number];
        x = ["hello", 10];

        expect(typeof x).to.equal('object');
        expect(typeof x[0]).to.equal('string');
        expect(typeof x[1]).to.equal('number');
    })

    it('Array of tuples', () => {
        let x: [string, number][];
        x = [["hello", 10], ['bye', 2]];

        expect(typeof x).to.equal('object');
        expect(typeof x[0]).to.equal('object');
        expect(typeof x[1]).to.equal('object');
        expect(typeof x[0][0]).to.equal('string');
        expect(typeof x[0][1]).to.equal('number');
    })

    it('Never', () => {
        function fail(): never {
            while(true) {}
        }

        expect(typeof fail).to.equal("function");
    })

});