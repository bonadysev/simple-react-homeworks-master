import React, {useState} from 'react'
import {v1} from 'uuid'
import GreetingContainer from './GreetingContainer'
import s from './Greeting.module.css'

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UserType[]>([]) // need to fix any

    let count = users.length

    const addUserCallback = (name: string) => { // need to fix any
        let user = {_id: v1(), name: name}
        let newArrUsers = [user, ...users]
        setUsers(newArrUsers) // need to fix
    }

    return (
        <div className={s.wrapper}>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users}
                               addUserCallback={addUserCallback}
                               totalUsers={count}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
