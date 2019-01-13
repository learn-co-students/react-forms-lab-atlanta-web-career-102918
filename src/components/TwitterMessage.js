import React from "react";

class TwitterMessage extends React.Component {

  constructor(props) {
    super();
    this.state = {
      value: '',
      remainingChars: props.maxChars,
    };
  }

  updatedInput = (event) => {
    this.setState({
      value: event.target.value,
      remainingChars: this.props.maxChars - event.target.value.length,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.updatedInput} />
        <p>Remaining character: {this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage
