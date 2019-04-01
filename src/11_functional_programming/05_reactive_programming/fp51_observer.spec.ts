import { expect } from 'chai';

describe('Functional programming observer', () => {

    
    class Listener<T> {

        public update: (message: T) => void;

        public constructor(fn: (message: T) => void) {
            this.update = fn;
        }

    }

    class Producer<T> {
    
        private _listeners: Listener<T>[] = [];
    
        public add(listener: Listener<T>) {
            this._listeners.push(listener);
        }
    
        public remove(listener: Listener<T>) {
            this._listeners = this._listeners.filter(
                l => l !== listener
            );
        }
    
        public notify(message: T) {
            this._listeners.forEach(
                l => l.update(message)
            );
        }

    }

    // it('Example', () => {

    //     let results: string[] = [];

    //     const listerner1 = new Listener(
    //         (msg: string) => results.push(msg + "1")
    //     );
    
    //     const listerner2 = new Listener(
    //         (msg: string) => results.push(msg + "2") 
    //     );
        
    //     const notify = new Producer<string>();
    //     notify.add(listerner1);
    //     notify.add(listerner2);

    //     expect(results[0]).to.equal(/*Exercise*/);
    //     expect(results[1]).to.equal(/*Exercise*/);

    //     notify.notify("Test");

    //     expect(results[0]).to.equal(/*Exercise*/);
    //     expect(results[1]).to.equal(/*Exercise*/);
    // });
});

