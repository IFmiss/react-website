import { GenericUtils } from '@dw/d-utils'

export function changeColor () {
  document.documentElement.style.setProperty(`--color`, GenericUtils.randomColor());
}
