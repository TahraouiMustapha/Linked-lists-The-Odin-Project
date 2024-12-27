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





    return {
        append,
        getHeadList,
        getTailList
    };
}






export { createLinkedList };