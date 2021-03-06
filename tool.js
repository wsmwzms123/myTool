/**
 * a series of tool functions
 * @author homerwong
 */

const _slice = [].slice

// get a type of a variable
function getType (v) {
  return v === undefined
    ? 'undefined'
    : v === null
      ? 'null'
      : v.constructor.name.toLowerCase()
}

/**
 * check types of a variable
 * @param {String} types
 */
function isType (types) {
  return function (...args) {
    return types === getType.call(this, ...args)
  }
}

//  unique a array
function unique (arr) {
  if (!(Array.isArray(arr))) return false
  if (arr.length <= 1) return arr
  if (Set) return [...new Set(arr)]
  const obj = {}
  return arr.filter(item => obj.hasOwnProperty(typeof item + item)
    ? false
    : (obj[typeof item + item] = true)
  )
}

// thousands a number 1234567890 --> 1,234,567,890
function formatNum (num) {
  if (typeof num !== 'number' && typeof num !== 'string') return false
  return String(num).split('').reverse().reduce((prev, next, index) => {
    return next + (index % 3 ? '' : ',') + prev
  })
}

function isPlainObject (obj) {
  return obj && /Object/.test(Object.prototype.toString.call(obj))
}

// extend or copy an object
function extend () {
  var target, options, copy, src, prop, clone, copyIsArray,
    deep = true,
    args = _slice.call(arguments),
    len = args.length,
    last = args[len - 1],
    i = 1

  if (last && typeof last === 'boolean') {
    deep = last
    args.pop()
    len--
  }

  if (!len) {
    return {}
  }

  target = args[0] || {}

  if (len === 1) {
    target = this
    i--
  }

  for (; i < len; i++) {
    if (options = args[i]) {
      for (prop in options) {
        src = target[prop]
        copy = options[prop]
        if (target === copy) {
          continue
        }
        if (deep && (isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
          if (copyIsArray) {
            copyIsArray = false
            clone = src && Array.isArray(src) ? src : []
          } else {
            clone = src && isPlainObject(src) ? src : {}
          }
          target[prop] = extend(clone, copy)
        } else if (copy !== undefined) {
          target[prop] = copy
        }
      }
    }
  }
  return target
}

// debounce function
function debounce (fn, delay = 60) {
  if (!fn) return
  let timer, first = true
  return function (...args) {
    if (first) {
      fn.apply(this, args)
      first = false
    }
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

function throttle (fn, delay = 60) {
  if (!fn) return
  let timer, first = true
  return function (...args) {
    if (first) {
      fn.apply(this, args)
      first = false
    }
    if (timer) {
      return false
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, delay)
  }
}

export { unique, formatNum, isPlainObject, extend, isType, debounce, throttle }
