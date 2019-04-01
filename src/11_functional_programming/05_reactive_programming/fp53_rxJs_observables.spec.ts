import { expect } from 'chai';
import { of, from, interval, fromEvent, bindCallback  } from "rxjs";
import {map} from 'rxjs/operators'
const fetch = require("node-fetch");

declare const jQuery: any;

describe('Functional programming RxJs observables', () => {

    // it('of example', (done) => {
    //     const observable = of(1);

    //     const subscription = observable.subscribe(
    //         (value) => {
    //             expect(value).to.equals(/*Exercise*/);
    //         },
    //         (error: any) => console.log(error),
    //         () => done()
    //     );

    //     subscription.unsubscribe();
    // });

    // // intermediate
    // it('from example', (done) => {
    //     const observable = /* Create observable */
    //     let results: Array<number> = [];

    //     const subscription = observable.subscribe(
    //         (value) => {
    //             results.push(value);
    //         },
    //         (error: any) => {
                
    //         },
    //         () => {
    //             expect(results.length).to.equals(3);
    //             done();
    //         }
    //     );

    //     subscription.unsubscribe();
    // });

    // it('interval', (done) => {
    //     const observable = interval(100);
    //     let results: Array<number> = [];

    //     const subscription = observable.subscribe(
    //         (value) => {
    //             results.push(value);
    //         },
    //         (error: any) => {
    //         },
    //         () => {

    //         }
    //     );

    //     subscription.unsubscribe();
    // });

    // it('from events', (done) => {
    //     const observable = fromEvent(document, "click");

    //     const subscription = observable.subscribe(
    //         (value) => console.log(value)
    //     );
        
    //     subscription.unsubscribe();
    // });
});
