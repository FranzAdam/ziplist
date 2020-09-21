const tList1 = [1, 3, 4, 6, 8];
const tList2 = ['d', 's', 's', 'g', 't'];

function zipList(list1, list2) {
  const newList = [];
  for (let i = 0; i < list1.length; i++) {
    newList.push(list1[i], list2[i]);
  }
  return newList;
}
console.log(zipList(tList1, tList2));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}
console.log(zipListTheSimpleWay(tList1, tList2));
