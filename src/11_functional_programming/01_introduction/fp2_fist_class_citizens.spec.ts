import { expect } from 'chai';

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

describe('Functional programming - functions as first class citizens', () => {

    // it('Example 1', () => {

    //     // exercise - create find function
        
    //     const findSpiderman = find(heroes, (h) => h.name === "Spiderman");
            
    //     expect(findSpiderman[0].name).to.equal("Spiderman");
    // });

    // it('Example 2', () => {

    //     // exercise - create find function

    //     const findSpiderman = find((h: Hero) => h.name === "Spiderman");
    //     const spiderman = findSpiderman(heroes)
            
    //     expect(spiderman[0].name).to.equal("Spiderman");
    // });

});
    