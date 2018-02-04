/**
 * a series of tool functions
 * @author homerwong
 */

//  unique a array
function unique(arr) {
    if (!(Array.isArray(arr))) return false;
    if (arr.length <= 1) return arr;
    if (Set) return [...new Set(arr)];
    var obj = {};
    return arr.filter((item, index, arr) => {
        return obj.hasOwnProperty(typeof item + item) ?
            false :
            (obj[typeof item + item] = true)
    })
}

// format a number 1234567890 --> 1,234,567,890
function formatNum(num) {
    if (typeof num !== 'number' && typeof num !== 'string') return false;
    return String(num).split('').reverse().reduce((prev, next, index) => {
        return next + (index % 3 ? '' : ',') + prev;
    })
}

function isPlainObject(obj) {
    return obj && /Object/.test(Object.prototype.toString.call(obj));
}

//extend or copy an object
function extend(target, source) {
    var args = [].slice.call(arguments),
        prop, src, options, copy, copyIsArray, clone,
        len = args.length,
        deep = true;
    target = target || {};
    if (typeof args[len - 1] === 'boolean') {
        deep = args.pop();
        len--;
    }
    if (args.length === 1) {
        source = target;
        target = {};
        args.unshift(target);
        len++;
    }
    
    for (var i = 1; i < len; i++) {
        if (options = args[i]) {
            for (prop in options) {
                src = target[prop];
                copy = options[prop];
                if (src === copy) {
                    continue;
                }
                if (deep && copy && (isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                    clone = !src ? copyIsArray ? [] : {} : src;
                    target[prop] = extend(clone, copy)
                } else if (copy) {
                    target[prop] = copy;
                }
            }
        }

    }
    return target;
}
exports.extend = extend;