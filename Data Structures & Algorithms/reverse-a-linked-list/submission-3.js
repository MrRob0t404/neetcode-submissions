/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if(!head) return null;
        let reverseList = [], currNode = head;

        while(currNode){ 
            reverseList.push(currNode.val); 
            currNode = currNode.next;
        }
        
        reverseList.reverse(); 
        let reversedHead = new ListNode(reverseList[0]); 
        currNode = reversedHead;
        for(let i = 1; i < reverseList.length; i++){ 
            currNode.next = new ListNode(reverseList[i]);
            currNode = currNode.next;
        }

        return reversedHead; 
    }
}
