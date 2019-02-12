import { expect } from 'chai';

describe('TypeScript introduction', () => {
    it('Typescript declared type', () => {

        class Type {
            static value: number
        };

        expect(Type.value).to.equal(undefined);
        expect(typeof Type.value).to.equal('undefined');
    });

    it('Typescript assigned type', () => {

        class Type {
            static value = 5;
        };
       
        expect(Type.value).to.equal(5);
        expect(typeof Type.value).to.equal('number');
    });


    it('Types fight 1', () => {

        class Person {
            static age: any;
        };

        eval("Person")["age"] = "Done";

        expect(typeof Person.age).to.equal('string');
        expect(Person.age).to.equal('Done');
    });


    it('Typescript fight 2', () => {

        class Person {
            private _age: number;

            get age(): number {
                return this._age;
            }
        
            set age(value: number) {
                if(typeof value != "number") value = 1;
                this._age = value;
            }
        };

        let person = new Person();

        Object.defineProperty(Person.prototype, "age", {
            get: function () {
                return this._value;
            },
            set: function (value) {
                this._value = value;
            },
        });


        eval("person")["age"] = "Done";

        expect(typeof person.age).to.equal('string');
        expect(person.age).to.equal('Done');
    });

    
    it('Typescript fight 3', () => {

        class Type {
            private _value: number;

            get value(): number {
                return this._value;
            }
        
            set value(value: number) {
                if(typeof value != "number") value = -1;
                this._value = value;
            }
        };

        let type = new Type();

        eval("type")["_value"] = "Done";

        expect(typeof type.value).to.equal('string');
        expect(type.value).to.equal('Done');
    });
});