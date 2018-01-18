/**
 * a series of tool functions
 * @author homerwong
 */

//  unique a array
function unique(arr) {
    if (!(arr instanceof Array)) return false;
    if (arr.length <= 1) return arr;
    if (Set) return [...new Set(arr)];
    var obj = {};
    return arr.filter((item, index, arr) => {
        return obj.hasOwnProperty(typeof item + item) ?
        false
        : (obj[typeof item + item] = true)
    })
}

// format a number 1234567890 --> 1,234,567,890
function formatNum(num) {
    if (typeof num !== 'number' && typeof num !== 'string') return false;
    return String(num).split('').reverse().reduce((prev, next, index) => {
        return next + (index % 3 ? '' : ',') + prev;
    })
}