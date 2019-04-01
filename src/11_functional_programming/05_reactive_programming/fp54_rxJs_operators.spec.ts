import { expect } from 'chai';
import { from, of } from "rxjs";
import { TestScheduler } from 'rxjs/testing';
import { max, every, find, filter, map, reduce, zip, merge, mergeMap, tap, 
    finalize, throttleTime, switchMap, concatMap, exhaustMap } from "rxjs/operators";


describe('Functional programming RxJs operators', () => {

    // it('Max', (done) => {
    //     const observable = from<number>([2, 30, 22, 5, 60, 1]);

    //     const maxObservable = /*Exercise*/ 
    
    //     const subscription = maxObservable.subscribe(
    //         (value) => {
    //             expect(value).to.equal(60);
    //             done();
    //         }
    //     );
    
    //     subscription.unsubscribe();
    // });

    // it('Max - extended', (done) => {
    //     interface Person {
    //         age: number,
    //         name: string
    //       }

    //       of<Person>(
    //         {age: 7, name: 'Foo'},
    //         {age: 5, name: 'Bar'},
    //         {age: 9, name: 'Beer'},
    //       ).pipe(
    //         /*Exercise - get person with max age*/ 
    //       ).subscribe((x: Person) => {
    //         expect(x.name).to.equal("Beer");
    //         done();
    //       }); 
    // });

    // it('Every', (done) => {
    //     const observable = from<number>([1, 2, 3, 4, 5]);

    //     const fromObservable = observable.pipe(/*Exercise - check if every number is lower than 10*/ );
    
    //     const subscription = fromObservable.subscribe(
    //         (value) => {
    //             expect(value).to.equal(true);
    //             done();
    //         }
    //     );
    
    //     subscription.unsubscribe(); 
    // });

    // it('Find', (done) => {
    //     const observable = from<number>([2, 30, 22, 5, 60, 1]);
    //     let results: Array<number> = [];

    //     const findObservable = observable.pipe(/*Exercise - get first element higher than 10*/ ); 

    //     const subscription = findObservable.subscribe(
    //         (value) => {
    //             results.push(value)
    //         },
    //         () => {},
    //         () => {
    //             expect(results.length).to.equal(1);
    //             expect(results[0]).to.equal(30);
    //             done();
    //         }
    //     );

    //     subscription.unsubscribe();
    // });

    //  it('Filter', (done) => {
    //     const observable = from<number>([2, 30, 22, 5, 60, 1]);
    //     let results: Array<number> = [];

    //     const filterObservable = observable.pipe(/*Exercise - get all elements higher than 10*/ ); 

    //     const subscription = filterObservable.subscribe(
    //         (value) => {
    //             results.push(value)
    //         },
    //         () => {},
    //         () => {
    //             expect(results.length).to.equal(3);
    //             expect(results[0]).to.equal(30);
    //             expect(results[1]).to.equal(22);
    //             expect(results[2]).to.equal(60);
    //             done();
    //         }
    //     );

    //     subscription.unsubscribe();
    // });

    // it('Map', (done) => {
    //     const observable = from<number>([1, 2, 3]);
    //     let results: Array<number> = [];


    //     const mapObservable = observable.pipe(/*Exercise - multiple all elements by 10*/ ); 

    //     const subscription = mapObservable.subscribe(
    //         (value) => {
    //             results.push(value)
    //         },
    //         () => {},
    //         () => {
    //             expect(results.length).to.equal(3);
    //             expect(results[0]).to.equal(10);
    //             expect(results[1]).to.equal(20);
    //             expect(results[2]).to.equal(30);
    //             done();
    //         }
    //     );

    //     subscription.unsubscribe();
    // });

    // it('Reduce', (done) => {
    //     const observable = from<number>([1, 2, 3, 4, 5]);

    //     const reduceObservable = observable.pipe(/*Exercise - get sum of this array*/) ;
    
    //     const subscription = reduceObservable.subscribe(
    //         (value) => {
    //             expect(value).to.equal(15);
    //             done();
    //         }
    //     );
    
    //     subscription.unsubscribe(); 
    // });

    // it('Merge', (done) => {
    //     const observableA = from<number>([20, 40, 60, 80, 100]);
    //     const observableB = from<number>([1, 1]);
    //     let results: Array<number> = [];
    
    //     const observableC = observableA.pipe(/*Exercise - merge observableA and observableB*/ );
    
    //     const subscription = observableC.subscribe(
    //         (value) => {
    //             results.push(value)
    //         },
    //         () => {},
    //         () => {
    //             expect(results.length).to.equal(7);
    //             expect(results).to.deep.equal([ 20, 40, 60, 80, 100, 1, 1 ]);
    //             done();
    //         }
    //     );
    
    //     subscription.unsubscribe();
    // });

    // it('Zip', (done) => {
    //     const observableA = from<number>([20, 40, 60, 80, 100]);
    //     const observableB = from<number>([1, 1]);
    //     let results: Array<[number, number]> = [];
    
    //     const observableC = observableA.pipe(zip(observableB));
    
    //     const subscription = observableC.subscribe(
    //         (value) => {
    //             results.push(value)
    //         },
    //         () => {},
    //         () => {
    //             expect(results.length).to.equal(2);
    //             expect(results).to.deep.equal(/*Exercise*/);
    //             done();
    //         }
    //     );
    
    //     subscription.unsubscribe();
    // });

    // it('Tap', (done) => {
    //     const observableA = from<number>([20, 40, 60, 80, 100]);
    //     const observableB = from<number>([1, 1]);
    //     let results: Array<[number, number]> = [];

    
    //     const observableC = observableA.pipe(
    //         zip(observableB),
    //         /*Exercise - tap function to push to results*/
    //     );
    
    //     const subscription = observableC.subscribe(
    //         (value) => {},
    //         () => {},
    //         () => {
    //             expect(results.length).to.equal(2);
    //             expect(results).to.deep.equal([ [ 20, 1 ], [ 40, 1 ] ]);
    //             done();
    //         }
    //     );
    
    //     subscription.unsubscribe();
    // });

    // it('MergeMap / flatMap', (done) => {
    //     const observableDoubled = of(from<number>([20, 40, 60, 80, 100]));

    //     let results: Array<number> = [];
    
    //     const observable = observableDoubled.pipe(/* Exercise */); 
    
    //     const subscription = observable.subscribe(
    //         (value) => {
    //             results.push(value)
    //         },
    //         () => {},
    //         () => {
    //             expect(results.length).to.equal(5);
    //             expect(results).to.deep.equal([ 20, 40, 60, 80, 100 ]);
    //             done();
    //         }
    //     );
    
    //     subscription.unsubscribe();
    // });

    // it('MergeMap / flatMap map to another observable', (done) => {
    //     const source = of('Hello');

    //     let result = '';
    
    //     const observable = source.pipe(
    //         mergeMap(/*Exercise*/)
    //     ); 
    
    //     const subscription = observable.subscribe(
    //         (value) => {
    //             result = value;
    //         },
    //         () => {},
    //         () => {
    //             expect(result).to.equal("Hello World!");
    //             done();
    //         }
    //     );
    
    //     subscription.unsubscribe();
    // });

    // it('Many operators', (done) => {
    //     const observableMany = of(from<number>([20, 40, 60, 80, 100]));
    //     const observable = observableMany.pipe(
    //         /* Use many operators to pass test */
    //     );

    //     const subscription = observable.subscribe(
    //         (value) => {
    //             expect(value).to.deep.equal([240, 100]);
    //             done();
    //         }
    //     );
    // });

    // it('Finalize', (done) => {
    //     const observableA = from<number>([20, 40, 60, 80, 100]);
    //     const observableB = from<number>([1, 1]);
    //     let checkpoints: Array<string> = [];
    //     let results: Array<[number, number]> = [];
    //     let saveSignalTap = (checkpoint: string) => (item: [number, number]) =>  {
    //         checkpoints.push(checkpoint);
    //         results.push(item);
    //     }
    //     let saveSignalFinalize = () => checkpoints.push("Finalize");

    
    //     const observableC = observableA.pipe(
    //         zip(observableB),
    //         finalize(saveSignalFinalize),
    //         tap(saveSignalTap("Tap")) 
    //     );
    
    //     const subscription = observableC.subscribe(
    //         (value) => {},
    //         () => {},
    //         () => {
    //             expect(results.length).to.equal(2);

    //             expect(checkpoints[0]).to.equal(/*Exercise*/);
    //             expect(checkpoints[1]).to.equal(/*Exercise*/);

    //             expect(results).to.deep.equal(/*Exercise*/);

    //             expect(checkpoints.length).to.equal(/*Exercise*/);
    //             done();
    //         }
    //     );
    
    //     // put breakpoint here to show finalize signal
    //     subscription.unsubscribe();
    // });

    // ----------------- MERGE MAP - SWITCH MAP - EXHAUST --------------------------

    // it('mergeMap simple marbles example', () => {
    //     const scheduler = new TestScheduler((actual, expected) => {
    //         expect(actual).deep.equal(expected);
    //     });

    //     scheduler.run(helpers => {
    //         const { cold, expectObservable } = helpers;
    //         const coldObservable =  cold('-a---b---|');
    //         const expected = '-xyz-xyz-|';

    //         const mapHelper = () => (
    //             cold('xyz|')
    //         );

    //         const finalObservable = coldObservable.pipe(mergeMap(mapHelper));

    //         expectObservable(finalObservable).toBe(expected);
    //     });
    // });

    // it('mergeMap - marbles - two at same time', () => {
    //     const scheduler = new TestScheduler((actual, expected) => {
    //         expect(actual).deep.equal(expected);
    //     });

    //     scheduler.run(helpers => {
    //         const { cold, expectObservable } = helpers;
    //         const coldObservable =  cold('-a----b--c------|');
    //         const expected = /*Exercise*/;

    //         const mapHelper = () => (
    //             cold('x-y-z|')
    //         );

    //         const finalObservable = coldObservable.pipe(mergeMap(mapHelper));

    //         expectObservable(finalObservable).toBe(expected);
    //     });
    // });

    // it('concatMap marbles two at same time', () => {
    //     const scheduler = new TestScheduler((actual, expected) => {
    //         expect(actual).deep.equal(expected);
    //     });

    //     scheduler.run(helpers => {
    //         const { cold, expectObservable } = helpers;
    //         const coldObservable =  cold('-a--b--------|');
    //         const expected = /*Exercise*/;

    //         const mapHelper = () => (
    //             cold('x-y-z|')
    //         );

    //         const finalObservable = coldObservable.pipe(concatMap(mapHelper));

    //         expectObservable(finalObservable).toBe(expected);
    //     });
    // });

    // it('switchMap - marbles - two at same time', () => {
    //     const scheduler = new TestScheduler((actual, expected) => {
    //         expect(actual).deep.equal(expected);
    //     });

    //     scheduler.run(helpers => {
    //         const { cold, expectObservable } = helpers;
    //         const coldObservable =  cold('-a----b--c------|');
    //         const expected = /*Exercise*/;

    //         const mapHelper = () => (
    //             cold('x-y-z|')
    //         );

    //         const finalObservable = coldObservable.pipe(switchMap(mapHelper));

    //         expectObservable(finalObservable).toBe(expected);
    //     });
    // });

    // it('exhaustMap - marbles - two at same time', () => {
    //     const scheduler = new TestScheduler((actual, expected) => {
    //         expect(actual).deep.equal(expected);
    //     });

    //     scheduler.run(helpers => {
    //         const { cold, expectObservable } = helpers;
    //         const coldObservable =  cold('-a----b--c------|');
    //         const expected = /*Exercise*/; 

    //         const mapHelper = () => (
    //             cold('x-y-z|')
    //         );

    //         const finalObservable = coldObservable.pipe(exhaustMap(mapHelper));

    //         expectObservable(finalObservable).toBe(expected);
    //     });
    // });

    // it('exhaustMap - marbles - two at same time extended', () => {
    //     const scheduler = new TestScheduler((actual, expected) => {
    //         expect(actual).deep.equal(expected);
    //     });

    //     scheduler.run(helpers => {
    //         const { cold, expectObservable } = helpers;
    //         const coldObservable =  cold('-a-----b--c------|');
    //         const expected = /*Exercise*/;

    //         const mapHelper = () => (
    //             cold('x-y-z|')
    //         );

    //         const finalObservable = coldObservable.pipe(exhaustMap(mapHelper));

    //         expectObservable(finalObservable).toBe(expected);
    //     });
    // });
});
