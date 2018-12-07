import React, { Component } from 'react';
import User from './Components/User';
import {connect} from 'react-redux';
class App extends Component {
  render() {
    return (
      <div>
        <User username={this.props.user.name}/>
        <button onClick={()=>{this.props.setName("Apotoxin")}}>changeName</button>
      </div>
    );
  }
}
const mapStateToProps=(state)=>{
  return {
    user:state.user,
    emp:state.emp
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    setName:(name)=>{
      dispatch({
        type:"SET_NAME",
        payload:name
      })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
