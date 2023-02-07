
function add(callback: any, ...numbers: number[]){
    var result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }

    if(callback){
        callback(result, numbers.length);
        return;
    }
    return result;
}

function average(number1: number, count: number){
    console.log(number1/count);
}
add(average,3, 5, 7);