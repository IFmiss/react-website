import * as React from 'react'
import GenericComponent from './../../components/Generic/index'
import { IColorInfo } from './../../config/color'
import './loading.less';

interface ILoadingProps {
  tip?: string
  isLoading: boolean;
  pastDelay: boolean;
  timedOut: boolean;
  error: any;
  retry: () => void;
}

const Loading = ({
  tip = 'loading ...',
}: ILoadingProps) => {
  return (
    <div className="loadable-loading">
      { tip }
    </div>
  )
}

export default Loading
