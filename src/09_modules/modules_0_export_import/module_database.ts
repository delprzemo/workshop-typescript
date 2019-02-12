export class DataModel {
    constructor(public text: string, public id: number) {};
}

export interface IOperations {
    GetById(id: number): DataModel;
    Save(model: DataModel) : void;
}
