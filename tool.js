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