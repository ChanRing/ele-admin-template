/**
 * Created by LaiChangRon on 20/03/11
 */

// 用户名校验
export function validUsername(str) {
  return /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/.test(str)
}
