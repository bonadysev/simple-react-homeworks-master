import React from 'react'
import s from './message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={s.message}>
            <div className={s.avatar}>
                <img src={props.avatar} alt="anime"/>
            </div>
            <div className={s.wrapper}>
                <div className={s.name}>{props.name}</div>
                <div className={s.text}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message





