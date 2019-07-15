import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {loginRequest} from './actions';

class App extends React.Component {
  state = {
    email : 'eve.holt@reqres.in',
    password : 'cityslicka',
  }
  handleChange = (event) => {
    this.setState({[event.target.name] : event.target.value})
  }
  handleSubmit = (event) =>{
    const {email,password} = this.state;
    event.preventDefault();
    const user = {email,password}
    this.props.loginRequest(user);
  }
  render() {
  return (
    <>
      <form onSubmit={(e)=>this.handleSubmit(e)}>
        <input name="email" type="email" value={this.state.email} onChange={(e)=>this.handleChange(e)}/>
        <input name="password" type="password" value={this.state.password} onChange={(e)=>this.handleChange(e)} />
        <input type="submit" onClick={(e)=>this.handleSubmit(e)} value="Submit"/>
      </form>
    </> 
  );
  }
}
const mapDispatchToProps = (dispatch) => ({
  loginRequest: (user)=> dispatch(loginRequest(user))
})
const mapStateToProps = (state) => {
  console.log(state)
}
export default connect(mapStateToProps,mapDispatchToProps)(App);

