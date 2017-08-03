'use strict';

var BinarySearchTree= require('./binarySearchTree');

describe('Test insert',function () {
    it('test insert',function (done) {
        this.timeout(10000);
        let tree=new BinarySearchTree();
        tree.insert(7);
        tree.insert(15);
        tree.insert(5);
        tree.insert(3);
        tree.insert(9);
        tree.insert(8);
        tree.insert(10);
        tree.insert(13);
        tree.insert(12);
        tree.insert(14);
        tree.insert(20);
        tree.insert(18);
        tree.insert(25);
        console.log('********* in-order transverse ***********');
        function printNode(value){
            console.log(value);
        }
        
        tree.inOrderTraverse(printNode);
        done();
    });

});