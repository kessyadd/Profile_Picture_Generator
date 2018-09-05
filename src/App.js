import React, { Component } from 'react';
import { Button } from 'reactstrap';

class App extends Component {
  constructor(){
    super();
    this.state = {
      url: ''
    }
  }

  generatePic(){
    var x = this.refs.usr.value;
    this.setState({url: `https://robohash.org/${x}.png?size=200x200`})
  }
  render() {

    return (
      <div className="App pt-5">
        <center>
          <div className="form-group" style={{width: '500px'}}>        
            <input type="text" className="form-control" ref="usr" placeholder="ketik nama anda..."/><br/>
            <Button color="success" onClick={()=>{this.generatePic()}}>Buat Profile Picture!</Button>          
          </div>        
          <img className="rounded-circle" src={this.state.url} style={{backgroundColor: 'white'}}/>
        </center>
      </div>
    );
  }
}

export default App;
