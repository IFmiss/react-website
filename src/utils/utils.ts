import { GenericUtils } from '@dw/d-utils'

export function changeColor () {
  console.log(1111)
  document.documentElement.style.setProperty(`--color`, GenericUtils.randomColor());
}
