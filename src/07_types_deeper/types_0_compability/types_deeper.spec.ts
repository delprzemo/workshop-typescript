import { expect } from 'chai';

describe('Types deeper', () => {

    it('Compability - playground', () => {

        interface Named {
            name: string;  
        }
        
        class Person {
            constructor(public name: string = 'Test') {}
        }
        
        let p: Named;
        p = new Person(); 

        expect(p.name).to.equal('Test');
    });

    // it('Compability - interface check', () => {

    //     interface Named {
    //         name: string;
    //     }
        
    //     let y = { /*Exercise*/ };

    //     let x: Named = y;
    //     //x.location = 'Test';            //uncomment to check
    //     //y = x;                          //uncomment to check

    //     expect(x.name).to.equal('Alice');
    //     expect(x['location']).to.equal("Seattle");
    // });

});

