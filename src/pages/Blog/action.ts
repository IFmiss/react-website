// blog 的相关操作
import {
  BLOG_LIST_DEFAULT_LIMIT
} from './../../config/constance'
import Http from './../../utils/fetch'
import API from './../../api/api'

export const getBlogLists = async (offset: number, limit: number = BLOG_LIST_DEFAULT_LIMIT): Promise<any> => {
  return await Http.post(API.BLOG.list, {
    offset,
    limit,
  })
}

export const getBolgTags = async () => {
  return await Http.get(API.BLOG.tags, {
    name: 'getArticleTags'
  })
}
