import { expect } from 'chai';
import {Observable, from, of, Subscription } from 'rxjs';
import {map, switchMap, concatMap} from 'rxjs/operators';

describe('RxJs exercise', () => {

    // it('Without RxJs', (done) => {
    //     const result: Array<any> = [];
    //     // Exercise - consume it without rxJs

    //     setTimeout(function () {
    //         done();
    //         makeAssert(result, done);
    //     }, 20);
    // });

    // it('With RxJs - no strategy', (done) => {
    //     const result: Array<any> = [];

    //     // Exercise - consume it with rxJs, but without any strategy - just get data

    //     setTimeout(function () {
    //         done();
    //         makeAssert(result, done);
    //     }, 2000);
    // });

    // it('With RxJs - dumb strategy', (done) => {
    //     const result: Array<any> = [];

    //     // Exercise - subscribe results

    //     setTimeout(function () {
    //         done();
    //         makeAssert(result, done);
    //     }, 20);
    // });

    // it('With RxJs - extended dumb strategy', (done) => {
    //     const result: Array<any> = [];

    //     // Exercise - subscribe results and follow order

    //     setTimeout(function () {
    //         done();
    //         //makeAssert(result, done);
    //     }, 20);
    // });

    // it('With RxJs - switch map', (done) => {
    //     const result: Array<any> = [];

    //     // Exercise - do it in right way

    //     setTimeout(function () {
    //         makeAssert(result, done);
    //     }, 2000);
    // });
})

const makeAssert = (result: any, done: Function) => {
    expect(result.length).to.equal(6);
    expect(result).to.deep.equal(["Backbone liker1", "Backbone liker2", "Backbone liker3",
        "Angular liker1", "Angular liker2", "Angular liker3"]);

    done();
}

// musimy wyświetlić tweeta z likerami trzymając się lazy loading
const hotTweets = from(["Backbone", "Angular"])

function GetLikers(data: string) : Observable<string>  {
    return new Observable
    (
        observer => {
        setTimeout(() => {
            observer.next(data + " liker1");
        }, 100);
        setTimeout(() => {
            observer.next(data + " liker2");
        }, 200);
        setTimeout(() => {
            observer.next(data + " liker3");
        }, 300);
        setTimeout(() => {
            observer.complete();
        }, 400);
        }
    );
}