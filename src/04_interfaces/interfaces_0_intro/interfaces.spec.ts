import { expect } from 'chai';

describe('Interfaces - introduction', () => {

    // it('Required object parameter', () => {

    //     function getLabel(labelledObj: { label: string }) {
    //         return labelledObj.label;
    //     }
        
    // /*Exercise - create myObj that will pass test*/

    //     expect(getLabel(myObj)).to.equal('test');
    // });

    it('Required object parameter with interface', () => {

        interface IMyObject {
            label: string,
            size?: number
        }

        function getLabel(labelledObj: IMyObject) {
            return labelledObj.label;
        }
        
        let myObj = {size: 10, label: "test"};

        expect(getLabel(myObj)).to.equal('test');
    });

    it('Required object parameter with interface - with function', () => {

        /*Exercise - implement missing things here*/
        interface IMyObject {
            label: string,
            doubleText: (val: string) => string
        }

        function getLabel(labelledObj: IMyObject) {
            return labelledObj.doubleText(labelledObj.label);
        }
        
        let myObj: IMyObject = {label: "test", doubleText: (text: string) => text + text};

        expect(getLabel(myObj)).to.equal('testtest');
    });

    it('Required object parameter with interface - optional parameter', () => {

        interface IMyObject {
            label: string,
            size? : number
        }

        function getLabel(labelledObj: IMyObject) {
            return labelledObj.label + (labelledObj.size ? labelledObj.size : '');
        }
        
        let myObj: IMyObject = {size: 10, label: "test"};
        let myObj2: IMyObject = {label: "test"};

        expect(getLabel(myObj)).to.equal('test10');
        expect(getLabel(myObj2)).to.equal('test');
    });

    it('Required object parameter with interface - with extenstion', () => {

        interface IMyObject {
            label: string,
        }

        interface IMyObjectWithSize extends IMyObject{
            size?: number
        }

        function getLabel(labelledObj: IMyObjectWithSize) {
            return labelledObj.label + (labelledObj.size ? labelledObj.size : '');
        }
        
        let myObj: IMyObjectWithSize = {size: 10, label: "test"};
        let myObj2: IMyObject = {label: "test"};

        expect(getLabel(myObj)).to.equal('test10');
        expect(getLabel(myObj2)).to.equal('test');
    });

    it('Required object parameter with interface - index signatures', () => {

        interface IMyObject {
            label: string,
            [myProp: string]: string
        }

        function getLabel(labelledObj: IMyObject) {
            return labelledObj.prefix + labelledObj.label;
        }
        
        let myObj: IMyObject = {prefix: "pre-", label: "test"};

        expect(getLabel(myObj)).to.equal('pre-test');
    });

    it('Required object parameter with interface - exercise with index signatures', () => {

        interface IMyFnBase {
            [propName: string]: string;
        }

        interface IMyFn {
            joinText: (...parms: IMyFnBase[]) => string;
        }


        let joinAllproperties: IMyFn = {
            joinText: function(...parms: IMyFnBase[]) {
                let result = "";
                
                for(let element of parms) {
                    for(let property in element) {
                        result = result + element[property];
                    }
                }
                return result
            }
        };

        expect(joinAllproperties.joinText({type: 'test', value: "1"}, {type: 'test', value: "2"})).to.equal("test1test2");
    });
});