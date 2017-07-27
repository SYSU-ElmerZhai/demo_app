/**
 * Created by Haodong on 2017/7/25.
 */
import * as actionTypes from '../constants/userinfo'

const initialState = {}

export default function userinfo(state = initialState, action) {
    switch (action.type) {
        // 登录
        case actionTypes.USERINFO_UPDATE:
            return action.data
        default:
            return state
    }
}