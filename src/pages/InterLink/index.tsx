import React, { useEffect, useState } from "react";
import { PROJECT_NAME, INTER_LINK_DEFAULT_LIMIT } from "./../../config/constance";
import classNames from 'classnames'
import { getLinkLists } from './action'
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
                            appear={false}
                            unmountOnExit={false}>
              <a className="list" key={item.id} href={item.url} target="_black">{item.name}</a>
            </CSSTransition>
          ))
        }
      </TransitionGroup>
    </div>
  )
}

export default InterLink
