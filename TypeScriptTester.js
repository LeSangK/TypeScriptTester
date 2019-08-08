function myFilter(arr, predicate) {
    var result = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var elm = arr_1[_i];
        if (predicate(elm)) {
            result.push(elm);
        }
    }
    return result;
}
var a = ['c', 'k', 'u'];
var isBiggerThanA = function (a) {
    if (a < 'a')
        return true;
    return false;
};
var b = myFilter(a, isBiggerThanA);
console.log(b);
