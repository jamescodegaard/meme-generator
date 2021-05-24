import React from 'react';
import Login from './Login';
import {Link} from 'react-router-dom'

class Header extends React.Component {

  constructor() {
    super()

    this.state = {}
  }

  componentDidMount() {

  }

  render () {

    
    return ( 
      <div>
        <header>
          <p>Meme Generator</p>
        </header>
      </div>
    )
  } 
}

export default Header