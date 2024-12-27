import {
    createNode
} from "./NodeClass.js";

function createLinkedList() {
    
    let head = null;
    let tail = null;

    function append(value) {
        const newNode = createNode();
        newNode.value = value;
        newNode.nextNode = null;
        if(head == null) {
            head = newNode;
            tail = newNode;
        } else {
            const lastElement = tail;
            lastElement.nextNode = newNode;
            tail = newNode
        }
    }

    const getHeadValue = () => head? head.value : null; 


    return {
        append,
        getHeadValue,
    };
}

const myList = createLinkedList();

myList.append(1);
console.log(myList.getHeadValue())


export { createLinkedList };