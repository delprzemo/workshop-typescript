import { expect } from 'chai';



describe('Generics and enums- fundamentals exercise', () => {

    it('Exercise 1', () => {
        let list = new MyList<string>();
        expect(list.length).to.equal(0);

        list.add("Element1");
        list.add("Element2");
        list.add("Element3");

        expect(list.length).to.equal(3);
        expect(list.first()).to.equal("Element1");
        expect(list.first()).to.equal(list.getAll()[0]);

        list.remove("Element2");
        expect(list.length).to.equal(2);

        let listNextInstance = new MyList<string>(list);
        expect(listNextInstance.length).to.equal(2);

        expect(list.add('NewElement').getAll().length).to.equal(3);

        //expect(list.operation(Direction.Add, "ElementAddedWithEnum").length).to.equal(4);

        expect(list.where(x=>x.indexOf('3') > 0).first()).to.equal("Element3");

        expect(list.addMultiple("ArgElement1", "ArgElement2").length).to.equal(5);
    });


    type filter<T> = (filter: T) => boolean

    enum Direction {
        Add,
        Remove
    }

    interface IMyList<T>{
        add (value: T): MyList<T>,
        remove (value: T): MyList<T>,
        first() : T,
        getAll(): T[];
        where: (expression: filter<T>)=> MyList<T>
    }

    class MyList<T> implements IMyList<T> {

        private list: T[];

        get length(): number {
            return this.list.length;
        }

        constructor(myList: MyList<T> = null) {
            if (myList) 
                this.list = myList.list 
            else 
                this.list = [];
        }

        add (value: T): MyList<T> {
            this.list.push(value);
            return this;
        }

        // new 
        addMultiple(...args: T[]): MyList<T> {
            this.list = this.list.concat(args);
            return this;
        }

        remove (value: T): MyList<T> {
            const index = this.list.findIndex(item => item === value);
            this.list.splice(index, 1);
            return this;
        }

        // new
        where(expression: filter<T>): MyList<T> {
            let newList = new MyList<T>(this);
            newList.list = newList.list.filter(expression);
            return newList;
        }

        first() : T {
            return this.list[0];
        }

        getAll(): T[] {
            return this.list;
        }
    }

})
