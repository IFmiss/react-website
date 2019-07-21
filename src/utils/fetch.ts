import 'whatwg-fetch';
import * as UrlUtils from 'd-utils/lib/urlUtils'
import * as qs from 'qs'

export const controller = new AbortController();
export default {
  /**
   * get 请求
   * @param {*} url 请求地址
   * @param {*} showMessage 是否显示成功的提示
   */
  get: function (url: string, data: any = {}, showMessage: boolean = false) {
    const newUrl = `${url}?${UrlUtils.stringifyUrl(data)}`
    const signal = controller.signal;
    return new Promise((resolve, reject) => {
      fetch(newUrl, {
        mode: 'cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        signal
      })
      .then(res => res.json())
      .then((data) => {
        console.log(data)
        if (parseInt(data.code, 10) === 200) {
          resolve(data)
          return
        }
        reject(data.msg)
      })
      .catch((err: any) => {
        if (err.name === 'AbortError') {
          reject(`request was aborted${err}`)
          return
        }
        reject(`请求未知错误${err}`)
      })
    }) 
  },

  /**
   * post 请求
   * @param {*} url 请求地址
   * @param {*} data 请求的参数
   * @param {*} showMessage 是否显示成功的提示
   */
  post: function (url: string, data: any, showMessage = false) {
    return new Promise((resolve, reject) => {
      const signal = controller.signal;
      fetch(url, {
        method: 'POST',
        // mode: 'cors',
        body: qs.stringify(data),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        signal
      })
      .then(res => res.json())
      .then((response) => {
        if (parseInt(response.code, 10) === 200) {
          resolve(response)
          return
        }
        reject(response.msg)
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          reject(`request was aborted${err}`)
          return
        }
        reject(`请求未知错误${err}`)
      })
    })
  },
}
