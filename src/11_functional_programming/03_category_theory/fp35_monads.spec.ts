import { expect } from 'chai';

describe('Functional programming - monads', () => {

    class Nothing<T> {

        public static of<TVal>(val?: TVal) {
            return new Nothing(val);
        }
    
        private _value: T|undefined;
    
        public constructor(val?: T) {
            this._value = val;
        }
    
        public map<TMap>(fn: (val: T) => TMap) {
            if (this._value !== undefined) {
                return new Nothing<TMap>(fn(this._value));
            } else {
                return new Nothing<TMap>(this._value as any);
            }
        }
    
    }

    class Monad<T> {

        public static of<TVal>(val?: TVal) {
            return new Monad(val);
        }
    
        private _value!: T;
    
        public constructor(val?: T) {
            if (val) {
                this._value = val;
            }
        }
    
        public isNothing() {
            return (this._value === null || this._value === undefined);
        }
    
        public map<TMap>(fn: (val: T) => TMap) {
            if (this.isNothing()) {
                return new Monad<TMap>();
            } else {
                return new Monad<TMap>(fn(this._value));
            }
        }

        public ap<TMap>(c: Monad<(val: T) => TMap>) {
            return c.map(fn => this.map(fn));
        }
    
        public join() { // return value
            return this.isNothing() ? Nothing.of(this._value) : this._value;
        }
    
        public chain<TMap>(fn: (val: T) => TMap) {
            return this.map(fn).join();
        }
    
    }

    // it('Example', () => {
    //     let maybeOfNumber = Monad.of(5);

    //     const newMaybeOfNumber = maybeOfNumber.map((a) => a * 2);
        
    //     expect(newMaybeOfNumber.join()).to.equal(/*Exercise*/); 
    
    //     expect(maybeOfNumber.join()).to.equal(/*Exercise*/); 
    
    //     expect(maybeOfNumber.chain((a) => a * 2)).to.equal(/*Exercise*/); 
    
    //     let monadOfMonadOfNumber = Monad.of(Monad.of(5));
    
    //     expect(monadOfMonadOfNumber.map((a) => a.map(v => v * 2)))
    //         .to.deep.equal(/*Exercise*/);
           
    //     expect(monadOfMonadOfNumber.join()).to.deep.equal(/*Exercise*/);
        
    
    //     expect(monadOfMonadOfNumber.chain((a) => a.map(v => v * 2)))
    //         .to.deep.equal(/*Exercise*/);

    //     let newMonadOfMonad = Monad.of(5);
    //     let monadMap = Monad.of((x: any) => x * x);
    //     let newMonadContainer = newMonadOfMonad.ap(monadMap);

    //     expect((newMonadContainer.join() as Monad<number>).join()).to.equal(/*Exercise*/); 

    // });
});
