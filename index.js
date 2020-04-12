const Console = (value) => {
  console.log(value)
}
const type = (value) => {
  let type = typeof value
  if (type === 'object') {
    return Object.prototype.toString.call(value)
    .slice(8).split(']')[0]
    .toLowerCase()
  } else {
    return type
  }
}
