// import { expect } from 'chai';


// describe('Generics and enums- deeper', () => {

//     it('Exercise 2', () => {
//         let family: Tree<string> = {value: "John", child: {value: "Henry", child: null}}
    
//         expect(family.value).to.equal("John");
//         expect(family.child.value).to.equal("Henry");

//         let treeBuilder = new TreeBuilder<string>();
//         treeBuilder.pushElement("John");
//         treeBuilder.pushElement("Henry");

//         expect(family).to.deep.equal(treeBuilder.getTree());
//         expect(treeBuilder.isFirstElementPropertyNull("value", "child")).to.equal(false);

//         let treeBuilder2 = new TreeBuilder<string>();
//         treeBuilder2.pushElement("John");
//         expect(treeBuilder2.isFirstElementPropertyNull("value")).to.equal(false);
//         expect(treeBuilder2.isFirstElementPropertyNull("value", "child")).to.equal(true);
//     });

// })
