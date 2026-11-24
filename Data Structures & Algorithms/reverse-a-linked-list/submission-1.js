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
        if (!head) return null;
        
        // represent value nodes into an array
        let reverseOrder = [];

        //build the reverse order
        let currNode = head
        while (currNode) {
            reverseOrder.push(currNode.val);

            currNode = currNode.next
        }
        // reversed list
        reverseOrder.reverse();

        let reverseOrderList = new ListNode(reverseOrder[0]);
        let reverseCurrNode = reverseOrderList;

        for (let i = 1; i < reverseOrder.length; i++) {
            let newNode = new ListNode(reverseOrder[i]);
            reverseCurrNode.next = newNode;
            reverseCurrNode = reverseCurrNode.next;
        }

        return reverseOrderList;

    }
}
