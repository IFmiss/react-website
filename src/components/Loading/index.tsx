import React from 'react'
import './loading.less';

interface ILoadingProps {
  tip?: string
  isLoading: boolean;
  pastDelay: boolean;
  timedOut: boolean;
  error: any;
  retry: () => void;
}

const Loading = (props: ILoadingProps) => {
  return (
    <div className="loadable-loading">
      { props.tip }
    </div>
  )
}

Loading.defaultPorps = {
  tip: 'loading ...'
}

export default Loading
