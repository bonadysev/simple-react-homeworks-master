import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // onChange, onChangeOption
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }
    const finalRadioClassName = s.radio

    const mappedOptions: JSX.Element[] = options ? options.map((o, i) => { // map options with key
       return (
           <label key={name + '-' + i} className={s.label}>
               <input
                   className={finalRadioClassName}
                   type={'radio'}
                   name={name}
                   checked={o === value}
                   value={o}
                   onChange={onChangeCallback}

                   {...restProps}
                   // name, checked, value, onChange
               />
               {o}
           </label>
       )
    }) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
