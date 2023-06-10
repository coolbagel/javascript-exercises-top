const removeFromArray = function(array,...args) {
    result = [...array]
    for(let i=0; i<args.length;i++){
        for(let j=0; j<result.length;j++){
            if(result[j]===args[i]) result.splice(j, 1);
        }
    }

return result;
};

// Do not edit below this line
module.exports = removeFromArray;
