const sumAll = function(a,b) {
    let sum=0;
    if(a>0 && b>0 && a===Number(a) && b===Number(b))
    {
        if(a>b)
        {
            [a,b]=[b,a];
        }
        for(let i=a;i<=b;i++)
        {
            sum+=i;
        }
        return sum;
    }   
    return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
