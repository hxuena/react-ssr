import axios from 'axios'
import { fromJS } from 'immutable';
import * as constants from './constants';

const HomeList = (list) => ({
  type: constants.HOME_LIST,
  list: fromJS(list)
})

export const getHomeList = () => {
  return (dispatch) => {
    axios.get('http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE')
      .then(res => {
        dispatch(HomeList(res.data.data))
      })
  }
}