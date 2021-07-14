const helper = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/'
const cal = function (num) {
  if (getDecimai(num) != '0') {
    return handeInterger(parseInt(num)) + '.' + handeDecimal(getDecimai(num))
  } else {
    return handeInterger(parseInt(num))
  }
}

function handeInterger (num) {
  if (num === 0) {
    return 0
  }
  let isNeg = false
  if (num < 0) {
    isNeg = true
    num = -num
  }
  let res = ''
  while (num > 0) {
    const index = num % 64
    res = helper[index] + res
    num = parseInt(num / 64)
  }
  return isNeg ? '-' + res : res
}

function handeDecimal (num) {
  const len = 10
  let res = ''
  for (let i = 0;i < len; i++){
    const tmp = num * 64
    res += helper[parseInt(tmp) % 64]
    num = getDecimai(tmp.toString())
  }
  return res

}

function getDecimai (num) {
  const tmp = num.toString().split('.')
  return parseFloat('0.' + tmp[1])
}

export default cal
