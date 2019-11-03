import React, { useEffect, useState } from "react";
import { PROJECT_NAME } from "./../../config/constance";
import classNames from 'classnames'
import { getLinkLists } from './action'

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
      {
        lists.map((item: ILinkProps) => (
          <a className="list" key={item.id} href={item.url} target="_black">{item.name}</a>
        ))
      }
    </div>
  )
}

export default InterLink
