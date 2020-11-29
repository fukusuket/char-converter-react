import React from 'react';
import ReactDOM from 'react-dom';
import { Base64 } from 'js-base64';
Base64.extendString();

class CharConverEditor extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.state = { value: 'Hello, world!' }
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div className="CharConverEditor">
        <h3>Input</h3>
        <label htmlFor="input-content">
          Enter some txt.
          <br></br>
        </label>
        <textarea
          id="input-content"
          onChange={this.handleChange}
          defaultValue={this.state.value}
        />
        <h3>Output</h3>
        <li>strings: {this.state.value}</li>
        <li>base64: {this.state.value.toBase64()}</li>
        <li>urlencode: {encodeURI(this.state.value)}</li>
        <li>unicodeescape: {escape(this.state.value)}</li>
      </div>
    );
  }
}

ReactDOM.render(
  <CharConverEditor />,
  document.getElementById('root')
);