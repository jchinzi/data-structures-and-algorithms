const LinkedList = require('../../data-structures/linkedList/linked-list.js');

function zipLists(list1, list2){

  if(!list1.head || !list2.head){
    return 'Exception: must provide 2 non-empty lists'
  };

  let curr1 = list1.head;
  let curr2 = list2.head;

  if (!curr1.next && !curr2.next){
    curr1.next = curr2;
    return;
  }

  while(curr1 && curr2){
    let hold1 = curr1.next;
    curr1.next = curr2;

    let hold2 = curr2.next;
    curr2.next = hold1 || curr2.next;

    curr1 = hold1;
    curr2 = hold2;
  }

  return list1.head;

};

module.exports = zipLists;