import { useState, useEffect } from 'react'
import LoadingTips from './../../components/Loading' 

interface IuseLoadingTips {
  /** 是否显示 提示信息 */
  loading: boolean;

  /** 提示信息的文字信息 */
  text: string;

  /** 显示LoadingTips 可以设置文字 可选 */
  showLoading(text?: string): void;
  
  /** 关闭 */
  hideLoading(): void;
}


/**
 * 控制显示LoadingTips的组件
 * 依赖于LoadingTips组件
 */
export default function useLoadingTips(state: boolean = false, text: string = 'loading...'): IuseLoadingTips {
  const [loading, setLoading] = useState(state)
  const [loadingText, setLoadingText] = useState(text)

  function showLoading (text?: string) {
    setLoading((loading) => loading = true)
    text && setLoadingText((loadingText) => loadingText = text)
  }

  function hideLoading () {
    setLoading((loading) => loading = false)
  }

  return {
    loading,
    text: loadingText,
    showLoading,
    hideLoading
  }
}

