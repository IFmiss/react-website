// blog 的相关操作
import {
  BLOG_LIST_DEFAULT_LIMIT
} from './../../config/constance'
import Http from './../../utils/fetch'
import API from './../../api/api'

export const getBlogLists = async (offset: number, tagName: string = '全部', limit: number = BLOG_LIST_DEFAULT_LIMIT): Promise<any> => {
  return await Http.post(API.BLOG.list, {
    tagName,
    offset,
    limit,
  })
}

export const getBolgTags = async () => {
  return await Http.get(API.BLOG.tags, {
    name: 'getArticleTags'
  })
}

export const getBlogDetail = async (id: number | string): Promise<any> => {
  return await Http.post(API.BLOG.detail, {
    id
  })
}

export const pv = async (id: number | string): Promise<any> => {
  return await Http.post(API.BLOG.pv, {
    id
  })
}

