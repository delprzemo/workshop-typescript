import { expect } from 'chai';

describe('Functional programming - laziness', () => {

    interface Hero {
        name: string;
        powers: string[];
    }
    
    
    const heroes: Hero[] = [
        {
        name: "Spiderman",
            powers: [
                "wall-crawling",
                "enhanced strength",
                "enhanced speed",
                "spider-Sense"
            ]
        },
        {
        name: "Superman",
            powers: [
                "flight",
                "superhuman strength",
                "x-ray vision",
                "super-speed"
            ]
        }
    ]

    // it('lazyFind', () => {

    //     let isDone = false;
    //     function lazyFind<T>(arr: T[], filter: (i: T) => boolean): T {
    //         // Exercise implement lazyFind body 
    //     }

    //     const spiderman = lazyFind(heroes, (h) => h.name === "Spiderman");

    //     expect(isDone).to.equal(false);
    //     expect(spiderman.name).to.equal("Spiderman");
    //     expect(isDone).to.equal(true);
    // });
});