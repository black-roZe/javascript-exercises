const removeFromArray = function(arr,...restParam) {
    arr.sort();
    restParam.sort();
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<restParam.length;j++)
        {
            if(restParam[j]==arr[i] && typeof(restParam[j])==typeof(arr[i]))
            {
                arr.splice(i,1);
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
