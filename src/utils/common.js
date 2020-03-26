/**
 * 通用工具类库
 * Created By ChangRon 2020/03/26
 */

// 递归拷贝对象
export const deepClone = obj => {
  let copy = obj instanceof Array ? [] : {}
  for (let i in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(i)) {
      copy[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i]
    }
  }
  return copy
}
