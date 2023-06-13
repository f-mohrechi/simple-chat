import React, { Component } from 'react'
import Heading from './Heading'
import Body from './Body'
import Input from './Input'

export default class ChatScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: "chat",
      chatsList: [
        {
          type: "sent",
          message: "Good morning, sir. What can I do for you?",
          time: "11:37:08 am"
        },
        {
          type: "recived",
          message: "Well, I am just looking around.",
          time: "11:39:57 am"
        },
        {
          type: "sent",
          message: "If necessary, please ask me.",
          time: "11:40:10 am"
        },
      ],

      avatars: {
        user1: "https://bootdey.com/img/Content/avatar/avatar1.png",
        user2: "https://bootdey.com/img/Content/avatar/avatar2.png",
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(message) {
    console.log(message)
    this.setState(state => {
      return {
        ...state,
        chatsList: [...state.chatsList,
        {
          type: "sent",
          message,
          time: new Date().toLocaleString()
        }
        ]
      }
    })
  }

  render() {
    return (

      <div className="container bootstrap snippets">
        <div className="col-md-7 col-xs-12 col-md-offset-2">
          <div className="panel" id="chat">
            <Heading title={this.state.title} />
            <Body data={this.state.chatsList} avatar={this.state.avatars} />
            <Input handleSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
    )
  }
}
