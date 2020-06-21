// Code your solutions in this file
function writeCards(arr, str) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr.push(`Thank you, ${arr[i]}, for the wonderful ${str} gift!`)
    }
    return newArr
}

function countDown (num) {
    let i = num;
     while (i <= num && i >= 0){
         console.log(i--)
     }
 }

 