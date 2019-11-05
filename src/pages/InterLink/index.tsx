import React, { useEffect, useState } from "react";
import { PROJECT_NAME, INTER_LINK_DEFAULT_LIMIT } from "./../../config/constance";
import classNames from 'classnames'
import './inter-link.less'
import { getLinkLists } from './action'
import Notice from './../../components/Notice'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

interface ILinkProps {
  id: string;
  name: string;
  disc: string;
  url: string;
  isShow: string;
}

const InterLink: React.FC = () => {
  const classString = classNames({
    [`${PROJECT_NAME}-interlink`]: true,
    [`dw-page-router`]: true
  })

  const [lists, setLists] = useState([])

  useEffect(() => {
    const fn = async () => {
      const res: any = await getLinkLists()
      setLists(lists => lists = res.data)
    }
    fn()
    Notice.default('欢迎互换友链！！！')
  }, []);

  return (
    <div className={classString}>
      <TransitionGroup transitionleave="false">
        {
          lists.map((item: ILinkProps, index: number) => (
            <CSSTransition  in={false}
                            key={item.id}
                            timeout={
                              {
                                enter: 300 + (index % INTER_LINK_DEFAULT_LIMIT) * 200,
                                exit: 0
                              }
                            }
                            classNames="side-up-fade"
                            appear={true}
                            unmountOnExit={false}>
              <div className="list" key={item.id}>
                <a className="list-href" title={`${item.name}#${item.disc}`} href={item.url} target="_black">{item.name}</a>
              </div>
            </CSSTransition>
          ))
        }
      </TransitionGroup>
    </div>
  )
}

export default InterLink
