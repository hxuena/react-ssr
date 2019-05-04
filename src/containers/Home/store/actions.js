import * as constants from './constants';
import axios from 'axios'; 

const HOME_LIST = (list) => {
  type: constants.HOME_LIST,
  list
}

export const getHomeList = () => {
  return (dispatch) => {
    axios.get('http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE')
      .then((res) => {
        console.log(res.data)
      })
  }
}
