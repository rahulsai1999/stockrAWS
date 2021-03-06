import React, { Component } from "react";
import {Container} from 'react-bootstrap';
import axios from 'axios';
var url="https://tv-v2.api-fetch.website/show/tt2467372";

class ApiTest extends Component {
  constructor()
  {
      super();
      this.state={data:{}};
  }

  componentDidMount()
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
          <div>{this.state.data.title}</div>
      </Container>
      </div>
    );
  }
}
 
export default ApiTest;