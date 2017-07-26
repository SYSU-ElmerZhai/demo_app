/**
 * Created by Haodong on 2017/7/25.
 */
import { combineReducers } from 'redux'

import userinfo from './userinfo'

const rootReducer = combineReducers({
    userinfo:userinfo
})

export default rootReducer