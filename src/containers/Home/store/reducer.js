import { fromJS } from 'immutable';
import * as constants  from './constants'

const defaultState = fromJS({
  name: 'river',
  list: []
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.HOME_LIST :
      return state.set('list', action.list)
    default :
      return state
  }
}