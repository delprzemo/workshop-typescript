
    interface IMyList{
        add (value: string): IMyList;
        remove (value: string): IMyList,
        first() : string,
        getAll(): string[]
    }

    export class MyList implements IMyList{

        private list: string[];

        get length(): number {
            return this.list.length;
        }

        constructor(myList: MyList = null) {
            if (myList) 
                this.list = myList.list 
            else 
                this.list = [];
        }

        add (value: string): MyList {
            this.list.push(value);
            return this;
        }


        remove (value: string): MyList {
            const index = this.list.findIndex(item => item === value);
            this.list.splice(index, 1);
            return this;
        }


        first() : string {
            return this.list[0];
        }

        getAll(): string[] {
            return this.list;
        }
    }
