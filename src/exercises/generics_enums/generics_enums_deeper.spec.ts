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

        expect(list.operation(Operation.Add, "ElementAddedWithEnum").length).to.equal(4);

        expect(list.where(x=>x.indexOf('3') > 0).first()).to.equal("Element3");

        expect(list.addMultiple("ArgElement1", "ArgElement2").length).to.equal(6);
    });

    type filter<T> = (par: T) => boolean;

    enum Operation {
        Remove,
        Add
    }

    class MyList<T> {
        private list: T[];
    
        constructor(myList: MyList<T> = null) {
            if (myList) 
                this.list = myList.list 
            else 
                this.list = [];
        }
    
        get length(): number {
            return this.list.length;
        }

        first(): T {
            return this.list[0];
        }
    
        add(element: T) {
            this.list.push(element);
            return this;
        }

        getAll(): T[] {
            return this.list;
        }
    
        remove(element: T) {
            const index = this.list.findIndex(item => item === element);
            this.list.splice(index, 1);
            return this;
        }

        operation(operation: Operation, element: T) {
            if(operation === Operation.Add) {
                return this.add(element);
            }
            if(operation === Operation.Remove) {
                return this.remove(element);
            }
        }

        addMultiple(...elements: T[]) {
            this.list = this.list.concat(elements);
            return this;
        }

        where(expression: filter<T>): MyList<T> {
            let newList = new MyList<T>(this);
            newList.list = newList.list.filter(expression);
            return newList;
        }
    }
})
    