import Http from '../../utils/fetch'
import API from '../../api/api'
export const getLinkLists = async () => {
  const data = await Http.get(API.OTHER.links, {
    name: 'getLinks'
  })
  return data
}

