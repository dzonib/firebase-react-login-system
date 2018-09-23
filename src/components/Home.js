import React, {Component} from 'react'
import fire from '../config/fire';


// can put routers here if you want

class Home extends Component {

  logout() {
    fire.auth().signOut();
  }


  render() {
    return (
      <div>
        <p>You are home</p>
        <button onClick={this.logout}>Logout</button>
      </div>
    )
  }
 
}

export default Home;