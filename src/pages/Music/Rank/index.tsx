import React, { useEffect, useCallback } from 'react'
import { getRankLists } from './../action'

const MusicRank = () => {
  // const [offset, setOffset] = useState(0)
  // useEffect()

  const rankListDispatch = useCallback(async () => {
    await getRankLists(1)
  }, [offset])

  return(
    <div> this is music : rank</div>
  )
}

export default MusicRank
