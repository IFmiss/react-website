import 'whatwg-fetch';
import { stringifyUrl } from 'd-utils/lib/urlUtils'
import LogUtils from 'd-utils/lib/logUtils'
import * as qs from 'qs'
import Notice from './../components/Notice'
import { isProduction } from './utils'

export const controller = new AbortController();
export default {
  /**
   * get 请求
   * @param {*} url 请求地址
   * @param {*} showMessage 是否显示成功的提示
   */
  get: function (url: string, data: any = {}, showMessage: boolean = false) {
    const newUrl = `${url}?${stringifyUrl(data)}`
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
        !isProduction() && LogUtils.logInfo(data, `http-request: url: ${url} => `)
        if (parseInt(data.code, 10) === 200 ||
            data.success) {
          resolve(data)
          return
        }

        const msg = data.message ? data.message : data.msg
        !isProduction() && LogUtils.logError(msg)
        Notice.error(msg)
        reject(msg)
      })
      .catch((err: any) => {
        if (err.name === 'AbortError') {
          reject(`request was aborted${err}`)
          return
        }
        !isProduction() && LogUtils.logError(err)
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
        const msg = response.message ? response.message : response.msg
        !isProduction() && LogUtils.logError(msg)
        Notice.error(msg)
        reject(msg)
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          reject(`request was aborted${err}`)
          return
        }
        !isProduction() && LogUtils.logError(err)
        reject(`请求未知错误${err}`)
      })
    })
  },
}
