import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "./SuperInputText";
import SuperButton from "./SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (el: string) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {


    return (
        <div>
            <SuperInputText
                value={name}
                onChangeText={setNameCallback}
                // onEnter={showAlert}
                error={error}/>

            <div>
                <SuperButton
                    disabled={!name}
                    onClick={addUser}
                >ADD</SuperButton>
                <span className={s.count}>All students: {totalUsers}</span></div>
        </div>
    )
}

export default Greeting
