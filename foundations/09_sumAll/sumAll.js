const sumAll = function(first, last) {
let sum = 0;
if (first <= 0 || last <= 0) {
    return "ERROR";
}
if(first > last) {
const transnit = first;
first = last;
last =  transnit;
}
 for(let i = first; i <= last; i++) {
     sum += i;
}
return sum;
}

//set array = from first to last integer
//filter the array
//sort all positive integers to sum

// Do not edit below this line
module.exports = sumAll;
