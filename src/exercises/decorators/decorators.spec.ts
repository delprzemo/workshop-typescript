// import { expect } from 'chai';


// describe('Decorators', () => {
//     it('Exercise 1', () => {
//         let apiController = new ApiController();
//         let request: IRequest;
//         let header: IHeader;
//         header = {requestType: RequestType.Get};

//         request = {header:  header, content: null, url: "api/users"};
//         expect(apiController.request(request)).to.deep.equal(["User1", "User2", "User3"]);

//         request.url = "api/users/1";
//         expect(apiController.request(request)).to.deep.equal("User1");

//         request.url = "api/users";
//         request.content = "User4";
//         request.header.requestType = RequestType.Post;
//         expect(apiController.request(request)).to.equal(true);

//         request.content = null;
//         request.header.requestType = RequestType.Get;
//         expect(apiController.request(request)).to.deep.equal(["User1", "User2", "User3", "User4"]);


//         request.url = "api/orders";
//         expect(apiController.request(request)).to.deep.equal(["Order1", "Order2"]);
//     });


//     interface IRequest {
//         header: IHeader;
//         content: any;
//         url: string;
//     }

//     interface IHeader {
//         requestType: RequestType;
//     }

//     enum RequestType {
//         Get,
//         Post
//     }

//     class ApiController {
//         request(request: IRequest): any {
//             let method = null;
//             let prototype = null;
//             let controllerTarget = null;

//             for(let controller of RegisteredControllers) {
//                 prototype = controller.prototype;
//                 let names = Object.getOwnPropertyNames(prototype);

//                 for(let item of names) {
//                     if((controller.url + prototype[item].url) === request.url && prototype[item].requestType === request.header.requestType) {
//                         method = item;
//                         controllerTarget = prototype;
//                     }
//                 }
//             }

//             return controllerTarget[method](request.content);
//         }
//     }

//     const RegisteredControllers: any[] = []
//     let users = ["User1", "User2", "User3"];

//     @Route("api/users")
//     class UserController extends ApiController {

//         @HttpGet("")
//         getAll(par: any): Array<any> {
//             return users;
//         }

//         @HttpGet("/1")
//         getSingle(par: any): any {
//             return users[0];
//         }

//         @HttpPost("")
//         create(user: string): boolean {
//             users.push(user);
//             return true;
//         }
//     }

//     @Route("api/orders")
//     class OrderController extends ApiController {

//         @HttpGet("")
//         getAll(par: any): Array<any> {
//             return ["Order1", "Order2"];
//         }
//     }
// })