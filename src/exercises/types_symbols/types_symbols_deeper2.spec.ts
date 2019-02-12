import { expect } from 'chai';


describe('Generics and enums- deeper', () => {

    it('Exercise 2', () => {
        let family: Tree<string> = {value: "John", child: {value: "Henry", child: null}}
    
        expect(family.value).to.equal("John");
        expect(family.child.value).to.equal("Henry");

        let treeBuilder = new TreeBuilder<string>();
        treeBuilder.pushElement("John");
        treeBuilder.pushElement("Henry");

        expect(family).to.deep.equal(treeBuilder.getTree());
        expect(treeBuilder.isFirstElementPropertyNull("value", "child")).to.equal(false);

        let treeBuilder2 = new TreeBuilder<string>();
        treeBuilder2.pushElement("John");
        expect(treeBuilder2.isFirstElementPropertyNull("value")).to.equal(false);
        expect(treeBuilder2.isFirstElementPropertyNull("value", "child")).to.equal(true);
    });


    interface ITree<T> {
        child: Tree<T>, 
        value: T 
    }

    type Tree<T> = ITree<T>;


    class TreeBuilder<T> {
        constructor(private tree: Tree<T> = null) {}

        pushElement(value: T ) {
            if (!this.tree) 
                this.tree = {value: value, child: null}
            else
                this.tree.child  = {value: value, child: null}
        }

        getTree() {
            return this.tree;
        }

        isFirstElementPropertyNull<K extends keyof Tree<T>>(...properties: K[]): boolean {
            let returnValue = false;
            properties.forEach(x=> returnValue = (this.tree[x] === null));
            return returnValue;
        }
    }
})
