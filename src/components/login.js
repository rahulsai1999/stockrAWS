import React, { Component } from "react";
import {Button,Form,Container} from 'react-bootstrap';
import axios from "axios";
import qs from "querystring"; 
let axiosconfig={headers:{'Content-Type':'application/x-www-form-urlencoded','Accept':'*/*'}}

class Login extends Component {

  constructor()
  {
    super();
    this.state={username:"",password:""};
  }

  onChangeUserName=(event)=>{this.setState({username:event.target.value})}
  onChangePassword=(event)=>{this.setState({password:event.target.value})}

  onlogin = () => {
  var credentials={username:this.state.username,password:this.state.password}
  console.log(credentials)
  var url="https://cors-anywhere.herokuapp.com/https://visionapu.herokuapp.com/login";
  axios.post(url,qs.stringify(credentials),axiosconfig
  ).then((response)=>{
    console.log(response);
  });
  }

  render() {
    return (
      <div>
      <Container>
       <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={this.onChangeUserName} />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={this.onChangePassword}/>
        </Form.Group>
        <Button variant="primary" onClick={this.onlogin}>
            Login
        </Button>
        </Form>
        </Container>
      </div>
    );
  }
}
 
export default Login;