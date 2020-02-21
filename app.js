var array = [1,5,10,-2];
var max_min_avg = [];

max_min_avg.push(
    Math.max(...array), 
    Math.min(...array),
    array.reduce((sum,num) => sum + num)/array.length
); // ... is a spead operator

console.log(max_min_avg);
