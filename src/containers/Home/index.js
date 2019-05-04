import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header'
import { getHomeList } from './store/actions'

class Home extends Component {
  render() {
     return (
      <div>
        <Header />
        <div>Home</div>
        <button onClick={()=>{alert('home click trigger')}}>clicdk</button>
      </div>
    )
  }
  componentDidMount() {
    this.props.getHomeList()
  }
 
}
const mapStateToProps = state => ({
  list: state.home.list
})
const mapDispatchToProps = dispatch => ({
  getHomeList() {
		dispatch(getHomeList());
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)