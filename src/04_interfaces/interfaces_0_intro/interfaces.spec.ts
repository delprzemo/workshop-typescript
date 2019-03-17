import { expect } from 'chai';

describe('Interfaces - introduction', () => {

    // it('Required object parameter', () => {

    //     function getLabel(labelledObj: { label: string }) {
    //         return labelledObj.label;
    //     }
        
    // /*Exercise - create myObj that will pass test*/

    //     expect(getLabel(myObj)).to.equal('test');
    // });

    // it('Required object parameter with interface', () => {

    //     /*Exercise - create IMyObject interface that will have same result as above*/

    //     function getLabel(labelledObj: IMyObject) {
    //         return labelledObj.label;
    //     }
        
    //     let myObj = {size: 10, label: "test"};

    //     expect(getLabel(myObj)).to.equal('test');
    // });

    // it('Required object parameter with interface - with function', () => {

    //     /*Exercise - implement missing things here*/
    //     interface IMyObject {
    //         label: string
    //     }

    //     function getLabel(labelledObj: IMyObject) {
    //         return labelledObj.doubleText(labelledObj.label);
    //     }
        
    //     let myObj: IMyObject = {label: "test", doubleText: (text: string) => text + text};

    //     expect(getLabel(myObj)).to.equal('testtest');
    // });

    // it('Required object parameter with interface - optional parameter', () => {

    //     interface IMyObject {
    //         /*Exercise - implement missing things here*/
    //     }

    //     function getLabel(labelledObj: IMyObject) {
    //         return labelledObj.label + (labelledObj.size ? labelledObj.size : '');
    //     }
        
    //     let myObj: IMyObject = {size: 10, label: "test"};
    //     let myObj2: IMyObject = {label: "test"};

    //     expect(getLabel(myObj)).to.equal('test10');
    //     expect(getLabel(myObj2)).to.equal('test');
    // });

    // it('Required object parameter with interface - with extenstion', () => {

    //     interface IMyObject {
    //         label: string,
    //     }

    //     /*Exercise - implement missing interface here*/

    //     function getLabel(labelledObj: IMyObjectWithSize) {
    //         return labelledObj.label + (labelledObj.size ? labelledObj.size : '');
    //     }
        
    //     let myObj: IMyObjectWithSize = {size: 10, label: "test"};
    //     let myObj2: IMyObject = {label: "test"};

    //     expect(getLabel(myObj)).to.equal('test10');
    //     expect(getLabel(myObj2)).to.equal('test');
    // });

    // it('Required object parameter with interface - index signatures', () => {

    //     interface IMyObject {
    //         label: string,
    //         /*Exercise - index signature that accept only string properties*/
    //     }

    //     function getLabel(labelledObj: IMyObject) {
    //         return labelledObj.prefix + labelledObj.label;
    //     }
        
    //     let myObj: IMyObject = {prefix: "pre-", label: "test"};

    //     expect(getLabel(myObj)).to.equal('pre-test');
    // });

    // it('Required object parameter with interface - exercise with index signatures', () => {

    //     interface IMyFn {
    //         joinText: /*Exercise - Missing type*/
    //     }

    //     let joinAllproperties: IMyFn = {
    //         joinText: function(...parms: /*Exercise - Missing type*/) {
    //             let result = "";
                
    //             for(let element of parms) {
    //                 for(let property in element) {
    //                     result = result + element[property];
    //                 }
    //             }
    //             return result
    //         }
    //     };

    //     expect(joinAllproperties.joinText({type: 'test', value: "1"}, {type: 'test', value: "2"})).to.equal("test1test2");
    // });
});