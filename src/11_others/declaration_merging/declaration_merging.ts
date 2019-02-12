// Namespaces

namespace Animals {
    export class Zebra { }
}

namespace Animals {
    export interface Legged { numberOfLegs: number; }
    export class Dog {
        constructor(public name: string) {}
     }
}

export function getAnimal(name: string) {
    return new Animals.Dog(name);
}

/* Exercise - create enum Color that will have also possibility to mix colors with function mixColor:*/ 


// export function mixColor(colorName: string) {
//     if (colorName == "yellow") {
//         return Color.red + Color.green;
//     }
//     else if (colorName == "white") {
//         return Color.red + Color.green + Color.blue;
//     }
//     else if (colorName == "magenta") {
//         return Color.red + Color.blue;
//     }
//     else if (colorName == "cyan") {
//         return Color.green + Color.blue;
//     }
// }


// export const color = Color;