const repeatString = function(str, times) {
if( times < 0) {
    return "ERROR"}
    let finalOutput = ""    
    for(let i = 0; i < times; i++) {
    finalOutput += str;
}
 
return finalOutput;
};


// Do not edit below this line
module.exports = repeatString;
