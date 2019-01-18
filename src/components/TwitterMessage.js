import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      textBox: ""
    };
  }

handleChange = (event) => {
  this.setState({
    textBox: event.target.value
  })
}



displayCharacterCount = () => {
  return (this.props.maxChars) - (this.state.textBox.length)
}

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.textBox} onChange={this.handleChange}/>
        <div>{this.displayCharacterCount()}</div>
      </div>
    );
  }
}

export default TwitterMessage;
