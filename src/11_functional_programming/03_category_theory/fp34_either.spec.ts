import { expect } from 'chai';
const fetch = require("node-fetch");

describe('Functional programming - either', () => {

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
    
    class Just<T> {
    
        public static of<TVal>(val: TVal) {
            return new Just(val);
        }
    
        private _value: T;
    
        public constructor(val: T) {
            this._value = val;
        }
    
        public map<TMap>(fn: (val: T) => TMap) {
            return new Just<TMap>(fn(this._value));
        }
    }

    type Either<T1, T2> = Just<T1> | Nothing<T2>;

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
    //         return new Promise<Either<Response, Error>>((resolve, reject) => {
    //             const url = "https://www.reddit.com/r/typescript/new.json";
    //             fetch(url)
    //                 // Exercise - implement fetch
    //             });
    //     }

    //     const maybeOfResponse = await fetchNews();
    
    //     if (maybeOfResponse instanceof Nothing) {
    //         maybeOfResponse
    //             .map(r => r.message)
    //             .map(msg => {
    //                 console.log(`Error: ${msg}`);
    //                 return msg;
    //             });
    //     } else {
    //         const maybeOfNews = maybeOfResponse.map(r => r.data)
    //             .map(d => d.children)
    //             .map(children => children.map(c => c.data));
    
    //         maybeOfNews.map((news) => {
    //             expect(news.length).greaterThan(0);
    //         });
    //     }
    // });
});
