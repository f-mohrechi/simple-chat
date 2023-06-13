import React from 'react'
import ChatBox from './ChatBox'

function Body(props) {


  return (
    <div className="panel-body">
      <div className="chats">
        {props.data?.map((item, index) => {
          return (
            <ChatBox
              key={index}
              time={item?.time}
              message={item?.message}
              isLeft={"sent" === item.type}
              avatar={"recived" === item.type ? props.avatar.user1 : props.avatar.user2} />
          )
        })}
      </div>
    </div>
  )
}

export default Body