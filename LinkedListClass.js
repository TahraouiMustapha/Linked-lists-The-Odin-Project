import {
    createNode
} from "./NodeClass.js";

function createLinkedList() {
    
    let head = null;
    let tail = null;

    const getHeadList = () => head;
    const getTailList = () => tail;

    function append(value) {
        const newNode = createNode();
        newNode.value = value;
        if(head == null) {
            head = newNode;
            tail = newNode;
        } else {
            const lastNode = tail;
            lastNode.nextNode = newNode;
            tail = newNode
        }
    }

    function prepend(value) {
        const newNode = createNode()
        newNode.value = value;
        if(head == null) {
            head = newNode;
            tail = newNode;
        } else {
            const firsNode = head;
            newNode.nextNode = firsNode;
            head = newNode;
        }
    }

    const size = () => {
        let node = head;
        let count = 0;
        while(node != null ) {
            count += 1;
            node = node.nextNode;
        }
        return count;
    }

    const at = (index) => {
        let node = head;
        while (node != null) {
            if(index == 0) return node;
            node = node.nextNode;
            index -= 1;
        }

        return null;
    }

    const pop = () => {
        if(head == null) return "the list is empty";
        let node = head;
        while(node.nextNode != tail) {
            node = node.nextNode; 
        }
        node.nextNode = null;
        tail = node;
    }

    const contains = (value) => {
        let node = head;
        while (node != null) {
            if(node.value == value) return true;
            node = node.nextNode;
        }
        return false;
    }

    const find = (value) => {
        let node = head;
        let index = 0;
        while (node != null) {
            if(node.value == value) return index;
            node = node.nextNode;
            index += 1;
        }
        return null;
    }

    const toString = () => {
        let myLinkedList = '';
        let node = head;
        while(node != null) {
            myLinkedList += `(${node.value}) -> `
            node = node.nextNode;
        }
        myLinkedList += `null`;
        return myLinkedList
    }   

    const insertAt = (value, index) => {
        if(index == 0) {
            prepend(value);
        } else {
            let node = head ;
            const newNode = createNode();
            newNode.value = value;
            while(node != null) {
                if(index == 1) {
                    newNode.nextNode = node.nextNode;
                    node.nextNode = newNode;
                    return;
                }
                node = node.nextNode;
                index -= 1;
            }
            // if the index is bigger than size
            append(value);
        }
    }

    const removeAt = (index) => {
        if(index == 0) {
            head = head.nextNode;
        } else {
            let node = head;
            while(node != null) {
                if(index == 1) {
                    let removedNode = node.nextNode;
                    node.nextNode = removedNode.nextNode;
                    return;
                } 
                node = node.nextNode;
                index -= 1;
            }
            // if the index is bigger than the size
            console.log( "the index is bigger than the size");
        }
    }

    return {
        append,
        prepend,
        getHeadList,
        getTailList,
        size,
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt
    };
}


const myList = createLinkedList();
myList.append(0);
myList.append(2);
myList.append(3);
myList.append(7);



console.log(myList.toString())
myList.insertAt(54, 0);
console.log(myList.toString())

myList.removeAt(0);
console.log(myList.toString())
myList.removeAt(2);
console.log(myList.toString())
myList.removeAt(10);
console.log(myList.toString())


export { createLinkedList };