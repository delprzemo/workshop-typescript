import { expect } from 'chai';


describe('Variables and functions - exercise advanced', () => {

    it('Variables and functions - exercise advanced', () => {
        expect(GetPersonPenaltyPoints('9001281173', [[new Date(), 2], [new Date(), 5]], 20).message)
            .to.equal('9001281173 has less than 26. Points: 7');

        expect(GetPersonPenaltyPoints('9001281173', [[new Date(2013, 2, 1), 2], [new Date(), 5]], 28).message)
            .to.equal('9001281173 has more than 26. Points: 5');

        expect(GetPersonPenaltyPoints('9001281173', [], 16).message)
            .to.equal('9001281173 has less than 26. Points: 0');

        expect(GetPersonPenaltyPoints('9001281173', [], 16).points)
            .to.equal(0);

        expect(GetPersonPenaltyPoints('9001281173', [[new Date(), 2], [new Date(), 5]], 16).points)
            .to.equal(7);

        expect(GetPersonPenaltyPoints('9001281173', [[new Date(), 2], [new Date(), 5]], 16).identificationNumber)
            .to.equal('9001281173');

        const result = GetPersonPenaltyPoints('9001281173', [[new Date(), 2]], 16, "No more details", 22);

        expect(result.firstArg).to.deep.equal("No more details");
        expect(result.additional).to.deep.equal([22]);
    });
})

function GetPersonPenaltyPoints(identificationNumber: string, penaltyPoints: [Date, number][], age: number, ...args: any ) 
    :{message: string, points: number, identificationNumber: string, firstArg:any, additional: any} {

        let getPointsSum = (points: [Date, number][]) => {
            let sum = 0;
            for(let item of points) {
                if(item[0].getFullYear() === new Date().getFullYear()) {
                    sum = sum + item[1];
                }
            }

            return sum;
        }

        let [first, ...rest] = [...args];

        return {
            message: `${identificationNumber} has ${age >= 26 ? 'more' : 'less'} than 26. `
                + `Points: ${getPointsSum(penaltyPoints)}`,
            points: getPointsSum(penaltyPoints),
            identificationNumber: identificationNumber,
            firstArg: first,
            additional: [...rest]
        }
    }
