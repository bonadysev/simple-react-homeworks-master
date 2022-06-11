import React, {useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[]// need to fix any
    addUserCallback: (name: string) => void // need to fix any
    totalUsers: number
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback, totalUsers}) => { // деструктуризация пропсов
    let [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (el: string) => { // need to fix any
        if (el !== '') {
            setName(el) // need to fix
            setError('')
        } else {
            setError('Name cannot be empty')
            setName('')
        }

    }
    const addUser = () => {
        alert(`'Hello ${name} !`) // need to fix
        addUserCallback(name)
        setName('')
        console.log(name)

    }

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
