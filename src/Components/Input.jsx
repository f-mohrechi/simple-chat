import React, { Component } from 'react'

export default class Input extends Component {

constructor(props) {
  super(props);
  this.state = {
    input: ""
  }
  this.handleInput = this.handleInput.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
}

handleInput(event) {
  this.setState({
    input: event.target.value
  })
}

handleSubmit() {
  this.props.handleSubmit(this.state.input)
  this.setState({
    input: ""
  })
}


  render() {
    return (
      <div className="panel-footer">
        <form>
          <div className="input-group">
            <input type="text" className="form-control" onChange={this.handleInput} value={this.state.input} placeholder="Say something" />
            <span className="input-group-btn">
              <button className="btn btn-primary" type="button" onClick={this.handleSubmit}>Send</button>
            </span>
          </div>
        </form>
      </div>
    )
  }
}
