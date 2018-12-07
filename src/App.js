import React, { Component } from 'react';
import User from './Components/User';
import {connect} from 'react-redux';
class App extends Component {
  render() {
    return (
     <User username={this.props.user.name}/>
     <button onClick={()=>{}}> changeName</button>
    );
  }
}
const mapStateToProps=(state)=>{
  return {
    user:state.user,
    emp:state.emp
  }
}
const mapDispatchToProps=()=>{
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
