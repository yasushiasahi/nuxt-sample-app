const car = (arr) => arr[0]

const cdr = (arr) => arr.slice(1)

const snakeToCamel = (str) =>
  str.replace(/_([a-z])/g, (_, p1) => p1.toUpperCase())

const camelToSnake = (str) =>
  str.replace(/[A-Z]/g, (substring, index) => `_${substring.toLowerCase()}`)

const flatten = (arr, flatArr, prefix) => {
  if (arr.length === 0) {
    return flatArr
  }

  const [carKey, carVal] = car(arr)
  const cameledCarKey = !prefix
    ? snakeToCamel(carKey)
    : `${prefix}_${snakeToCamel(carKey)}`

  if (typeof carVal !== 'object') {
    return flatten(cdr(arr), [...flatArr, [cameledCarKey, carVal]], prefix)
  }

  return flatten(
    cdr(arr),
    [...flatArr, ...flatten(Object.entries(carVal), [], cameledCarKey)],
    prefix
  )
}

const nestten = (arr, nestObj) => {
  if (arr.length === 0) {
    return nestObj
  }

  const [key, val] = car(arr)
  const isKeyNestted = key.includes('_')

  if (!isKeyNestted) {
    return nestten(cdr(arr), { ...nestObj, [camelToSnake(key)]: val })
  }

  const arrKey = key.split('_')
  const newKey = car(arrKey)
  const [starts, rest] = arr.reduce(
    ([starts, rest], [key, val]) =>
      key.startsWith(newKey)
        ? [[...starts, [key.replace(`${newKey}_`, ''), val]], rest]
        : [starts, [...rest, [key, val]]],
    [[], []]
  )

  return nestten(rest, {
    ...nestObj,
    [camelToSnake(newKey)]: nestten(starts, {})
  })
}

const objectFlatten = (obj) =>
  flatten(Object.entries(obj), [], '').reduce(
    (acc, arr) => ({ ...acc, [arr[0]]: arr[1] }),
    {}
  )

const objectNestten = (obj) => nestten(Object.entries(obj), {})

export { objectFlatten, objectNestten }
