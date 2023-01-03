const repeatString = function(str,num) {
    let s='';
    if(num<0)
    return "ERROR";
    for(let i=0;i<num;i++)
    {
        s+=str;
    }
    return s;
};

// Do not edit below this line
module.exports = repeatString;
