/*
* merging Two sorted arrays into one array sorted
*
*/

function mergeTwoArrays(arr1, arr2) {
  let merged = [];
  let index1 = 0;
  let index2 = 0;
  let current = 0;

for(let i=0;i<arr1.length+arr2.length;i++) {
  if(!arr2[index2]) break;
  if(arr1[index1] && arr1[index1]<arr2[index2]) {
    merged[i]=arr1[index1];
    index1++;
  } else {
    merged[i]=arr2[index2];
    index2++;
  }
}
  return merged;
}

const arr1 = [1,3,5];
const arr2 = [2,4,6,7,8]
console.log(mergeTwoArrays(arr1, arr2));
// [ 1, 2, 3, 4, 5, 6, 7, 8 ]