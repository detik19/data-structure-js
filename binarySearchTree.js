'use strict';

function BinarySearchTree(){
    let Node=function(key){
        this.key=key;
        this.left=null;
        this.right=null;
    
    };
    let root =null;
    let insertNode=function(node,newNode){
        if(newNode.key<node.key){
            if(node.left===null){
                node.left=newNode;
            }else{
                insertNode(node.left,newNode);
            }
        }else{
            if(node.right===null){
                node.right=newNode;
            }else{
                insertNode(node.right,newNode);
            }
        }
    };
    this.insert=function(key){
        let newNode=new Node(key);
        if(root===null){
            root=newNode;
        }else{
            insertNode(root,newNode);
        }
    };

    
    this.getRoot=function(){
        return root;
    };
    this.search=function(key){};

    let inOrderTraverseNode=function(node,callback){
        if(node!==null){
            //console.log(node.key);
            inOrderTraverseNode(node.left, callback);
            callback(node.key);
            
            inOrderTraverseNode(node.right, callback);
        }
    };
    this.inOrderTraverse=function(callback){
        inOrderTraverseNode(root, callback);
    };

    let preOrderTraverseNode=function(node, callback){
        if(node!==null){
            callback(node.key);
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
        }
    }
    this.preOrderTransverse=function(callback){
        preOrderTraverseNode(root,callback);
    };

    this.postOrderTraverse=function(){};
    this.min=function(){};
    this.max=function(){};
    this.remove=function(key){};
};

module.exports=BinarySearchTree;