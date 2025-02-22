// Definition for singly-linked list.
 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }
 

function reverseList(head: ListNode | null): ListNode | null {
  let previous: ListNode | null = null;
  let current: ListNode | null = head;
  let next: ListNode | null = null;

  while (current != null) {
    next = current.next;
    current.next = previous
    previous = current;
    current = next
  }
  return previous
};

// for list like 1 -> 2 -> 3
