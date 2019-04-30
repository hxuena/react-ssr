import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import { actions } from './store'

const homeList = (list) => {
  return (
    <ul>
      {
        list.map((item, index) => {
          return (
            <li key={index}>{ item }</li>
          )
        })
      }
    </ul>
  )
}
class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>I am {this.props.name}</div>
        { homeList(this.props.list)}
        <button onClick={() => { alert('click') }}>点我</button>
      </div>
    )
  }
  componentDidMount() {
    this.props.getHomeList()
  }
}
const mapStateToProps = state => {
  return {
    name: state.getIn(['home', 'name']),
    list: state.getIn(['home', 'list'])
  }
}
const mapDispatchToProps = (dispatch) => ({
  getHomeList() {
    dispatch(actions.getHomeList())
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);