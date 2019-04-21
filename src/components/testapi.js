import React, { Component } from "react";
import {Button,Container} from 'react-bootstrap';
import axios from 'axios';
var url="https://tv-v2.api-fetch.website/show/tt2467372";

class ApiTest extends Component {
  constructor()
  {
      super();
      this.state={data:{}};
  }

  onButt=()=>
  {
    axios.get(url).then((response)=>{
      console.log(response);
      this.setState({data:response.data});
    });
  }

  
  
  render() {
    return (
      <div>
      <Container>
          <Button onClick={this.onButt}>Click</Button>
          <div>{this.state.data.title}</div>
      </Container>
      </div>
    );
  }
}
 
export default ApiTest;