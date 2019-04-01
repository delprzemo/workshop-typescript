import { expect } from 'chai';
const fetch = require("node-fetch");

describe('Functional programming - maybe', () => {

    // class MayBe<T> {

    //     private _value!: T;
    
    //     public constructor(val?: T) {
    //         if (val) {
    //             this._value = val;
    //         }
    //     }

    //     public static of<TVal>(val?: TVal) {
    //         return new MayBe(val);
    //     }
    
    //     // Exercise - implement missing part

    //     public ap<TMap>(c: MayBe<(val: T) => TMap>) {
    //         return c.map(fn => this.map(fn));
    //     }

    //     //only for assert
    //     get value() {
    //         return this._value;
    //     }
    // }

    // it('Usage example', async function() {
    //     interface New {
    //         subreddit: string;
    //         id: string;
    //         url: string;
    //         title: string;
    //     }
        
    //     interface Response {
    //         kind: string;
    //         data: {
    //             children: Array<{ kind: string, data: New }>;
    //             after: string|null;
    //             before: string|null;
    //         };
    //     }

    //     async function fetchNews() {
    //         return new Promise<MayBe<Response>>((resolve, reject) => {
    //             const url = "https://www.reddit.com/r/typescript/new.json";
    //             fetch(url)
    //                 .then((response: any) => {
    //                     return response.json();
    //                 }).then((json: any) => {
    //                     resolve(new MayBe(json)); //conevert result to maybe
    //                 }).catch(() => {
    //                     resolve(new MayBe()); // create empty maybe
    //                 });
    //         });
    //     }

    //     const maybeOfResponse = await fetchNews();
    
    //     const maybeOfNews = maybeOfResponse
    //         .map(r => r.data) // don't if catched error
    //         .map(d => d.children) // don't if catched error
    //         .map(children => children.map(c => c.data)); // don't if catched error
    
    //     let result: New[];
    //     maybeOfNews.map((news) => {
    //         result = news;
    //     });

    //     expect(result.length).greaterThan(0);
    // });
});
