import React from 'react'
import ReactDom from 'react-dom'

class MemeGenerator extends React.Component{
  constructor() {
    super()
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "https://i.imgflip.com/1bij.jpg"
    }
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const {memes} = response.data
        this.setState({allMemeImgs : memes})
      })

  }

  render() {
    return(
      <div> Hello REACT world !</div>
    )
  }

}

export default MemeGenerator