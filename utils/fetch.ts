import 'whatwg-fetch';
import * as qs from 'qs'

export default {
  /**
   * get 请求
   * @param {*} url 请求地址
   * @param {*} showMessage 是否显示成功的提示
   */
  get: function (url: string, showMessage: boolean = false) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        mode: 'cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(res => res.json())
      .then((data) => {
        if (parseInt(data.code, 10) === 200) {
          resolve(data.data)
          return
        }
        reject(data.msg)
      })
      .catch((err: any) => {
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
      fetch(url, {
        method: 'POST',
        // mode: 'cors',
        body: qs.stringify(data),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(res => res.json())
      .then((response) => {
        if (parseInt(response.code, 10) === 200) {
          resolve(response.data)
          return
        }
        reject(response.msg)
      })
    })
  }
}
