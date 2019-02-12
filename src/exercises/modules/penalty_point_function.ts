
function GetPersonPenaltyPoints(identificationNumber: string, penaltyPoints: number[], age: number, ...args: any )
:{message: string, points: number, identificationNumber: string, additional: any} {

    let getPointsSum = (points: number[]) => {
        let sum = 0;
        for(let item of points) {
            sum = sum + item;
        }
        return sum;
    }

    return {
        message: `${identificationNumber} has ${age >= 26 ? 'more' : 'less'} than 26. `
            + `Points: ${getPointsSum(penaltyPoints)}`,
        points: getPointsSum(penaltyPoints),
        identificationNumber: identificationNumber,
        additional: [...args]
    }
}

export default function (identificationNumber: string, penaltyPoints: number[], age: number, ...args: any ) {
    return GetPersonPenaltyPoints(identificationNumber, penaltyPoints, age, ...args);
}
