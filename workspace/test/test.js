function add(callback) {
    var numbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbers[_i - 1] = arguments[_i];
    }
    var result = 0;
    for (var i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    if (callback) {
        return callback(result, numbers.length);
    }
    return result;
}
function average(number1, count) {
    console.log(number1 / count);
}
add(average, 3, 5, 7);
