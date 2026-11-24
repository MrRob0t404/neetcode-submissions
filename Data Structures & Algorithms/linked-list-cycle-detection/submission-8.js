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
     * @return {boolean}
     */
    hasCycle(head) {

        if (!head) return null;
        if (!head.next) return false;
        if (!head.next.next) return false;

        let slow = head, fast = head.next.next;;

        while (fast && fast.next.next) {
            if (fast.next.next.val === slow.next.val) return true;
            slow = slow.next;
            fast = fast.next.next;
        }

        return false;
    }
}
