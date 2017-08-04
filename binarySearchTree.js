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
    let searchNode=function(node, key){
        if(node===null){
            return false;
        }
        if(key<node.key){
            return searchNode(node.left, key);
        }else if(key>node.key){
            return searchNode(node.left, key);
        }else{
            return true;
        }
    };
    this.search=function(key){
        return searchNode(root, key);
    };

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
    this.preOrderTraverse=function(callback){
        preOrderTraverseNode(root,callback);
    };

    let postOrderTraverseNode=function(node, callback){
        if(node!==null){
            postOrderTraverseNode(node.left, callback);
            postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    };
    this.postOrderTraverse=function(callback){
        postOrderTraverseNode(root, callback);
    };

    let minNode=function(node){
        if(node){
            while(node&&node.left!==null){
                node=node.left;
            }
        }
    };
    this.min=function(){
        return minNode(root);
    };

    let maxNode=function(node){
        if(node){
            while(node && node.right!==null){
                node=node.right;
            }
            return node.right;
        }
        return null;
    };
    this.max=function(){
        return maxNode(root);
    };
    let findMinNode=function(node){
        while(node && node.left!==null){
            node=node.left;
        }
        return node;
    };
    let removeNode=function(node, key){
        if(node===null){
            return null;
        }
        if(key<node.key){
            node.left=removeNode(node.left,key);
            return node;
        }else if(key>node.key){
            node.right=removeNode(node.right,key);
            return node;
        }else{
            //case 1-a leaf node
            if(node.left===null && node.right===null){
                node=null;
                return node;
            }
            //case 2 - a node with only 1 child
            if(node.left===null){
                node=node.right;
                return node;
            }else if(node.right===null){
                node=node.left;
                return node;
            }

            let aux=findMinNode(node.right);
            node.key=aux.key;
            node.right=removeNode(node.right, aux.key);
            return node;
        }
    };
    this.remove=function(element){
        root=removeNode(root, element);
    };
};

module.exports=BinarySearchTree;