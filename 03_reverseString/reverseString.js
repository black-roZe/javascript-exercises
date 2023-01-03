const reverseString = function(str) {
    let s='';
    for(let i=str.length-1;i>=0;i--)
    {
        s+=str[i];
    }
    console.log(s);
    return s;
};

// Do not edit below this line
module.exports = reverseString;
