import React from 'react'
import ReactDom from 'react-dom'

class MemeGenerator extends React.Component{
  constructor() {
    super()
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg"
    }
  }

  render() {
    return(
      <div> Hello REACT world !</div>
    )
  }

}

export default MemeGenerator