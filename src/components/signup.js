import React, { Component } from "react";
import {Button,Form,Container} from 'react-bootstrap';

class Signup extends Component {
  constructor()
  {
    super();
    this.state={username:"",password:""}
    this.onChangeUserName=this.onChangeUserName.bind(this);
    this.onChangePassword=this.onChangePassword.bind(this);
    this.onSignUp=this.onSignUp.bind(this);
  }
  onChangeUserName(event){this.setState({username:event.target.value})}
  onChangePassword(event){this.setState({password:event.target.value})}
  
  onSignUp()
  {
    const credentials={username:this.state.username,password:this.state.password}
    console.log(credentials);
    fetch('https://cors-anywhere.herokuapp.com/https://visionapu.herokuapp.com/register',{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(credentials)})
      .then(response=>response.json())
      .then((response) =>
      {
      console.log(credentials);
      console.log(response);
      })
  }
  
  
  
  render() {
    return (
      <div>
      <Container>
       <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={this.onChangeUserName.bind(this)}/>
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={this.onChangePassword.bind(this)} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={this.onSignUp}>
            Sign Up
        </Button>
        </Form>
        </Container>
      </div>
    );
  }
}
 
export default Signup;