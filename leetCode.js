//二叉树上面的一个点也可以是一个类。他拥有数值跟左右两个方向。
class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}


//也可以把二叉树看成是一个类。要成为二叉树至少要有个根节点
class BST{
    constructor(value){
        this.root=new Node(value);
        this.count=1;
    }

    insert(value){
        //if we want to insert a value.
        //first compare with root node,if less will go left 
        //if it is greater we go right
        this.count++;
        let newNode=new Node(value);

        //这是一个递归方法
        const searchTree=(node)=>{
            if(newNode.value<node.value){

                //如果左边这个属性为null 是真的，那么，
                if(!node.left){
                    //把新节点放在左边。node.left就等于一个节点object
                    node.left=newNode;
                }else{
                    //如果有左边这个属性不为null，那么用newNode去比较左边节点
                    searchTree(node.left)
                }
            }else{
                //如果右边这个属性为null 是真的，那么
                if(!node.right){
                    //put new node on the right
                    node.right=newNode;
                }else{
                    searchTree(node.right)
                }

            }
        }

        //this root 是一个节点
        searchTree(this.root);
    }

    size(){
        console.log(this.count);
    }

    seeBTree(){
        console.log(this.root);
        
    }
    
}

const bst =new BST(15); //15是根节点
bst.insert(2);
bst.insert(30);
bst.insert(45);
bst.insert(60);
bst.insert(10);
bst.insert(9);

bst.size();
bst.seeBTree();





