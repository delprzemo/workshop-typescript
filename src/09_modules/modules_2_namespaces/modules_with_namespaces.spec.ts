import { expect } from 'chai';


/* Exercise - fix this file */

    class DataModel {
        constructor(public text: string, public id: number) {};
    }
    
    interface IOperations {
        GetById(id: number): DataModel;
        Save(model: DataModel) : void;
    }    

// import operations = Repository.IOperations;
// import dataModel = Repository.DataModel;

describe('Namespaces', () => {
    
    // it('Simple usage namespace', () => {

    //     let model = new Repository.DataModel('Test', 1);

    //     expect(model.id).to.equal(1);
    //     expect(model.text).to.equal('Test');
    // });

    // it('Simple usage namespace with aliases', () => {

    //     class myClass implements operations {
    //         GetById = (id:number): dataModel=> {
    //             return new dataModel('Test', id);
    //         }
    //         Save = (model: dataModel) => {

    //         }
    //     }

    //     expect(new myClass().GetById(1)).to.deep.equal(new dataModel('Test', 1));
    // });
});

