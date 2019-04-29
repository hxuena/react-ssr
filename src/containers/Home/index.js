import React from 'react';
import Header from '../../components/Header';
import { connect } from 'react-redux';

const Home = (props) => {
  return (
    <div>
      <Header />
      <div>homssss_e {props.name}</div>
      <button onClick={() => { alert('click') }}>点我</button>
    </div>
    
  )
}
const mapStateToProps = state => ({
  name: state.name
})
export default connect(mapStateToProps, null)(Home);