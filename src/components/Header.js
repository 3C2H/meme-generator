import React from 'react'
import '../style/header.css'


class Header extends React.Component {
  render() {
    return(
      <header>
        <img src="/Trollface.png" alt="Trollface.png" />
        <p>Meme Generator</p>
      </header>
    )
  }
}

export default Header