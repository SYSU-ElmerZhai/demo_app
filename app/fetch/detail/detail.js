/**
 * Created by Haodong on 2017/7/29.
 */
import { get } from '../get'

export function getInfoData(id) {
    const result = get('/api/detail/info/' + id)
    return result
}

export function getCommentData(page, id) {
    const result = get('/api/detail/comment/' + page + '/' + id)
    return result
}