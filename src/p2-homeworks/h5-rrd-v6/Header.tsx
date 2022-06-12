import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.css'
import {PATH} from './Pages';


function Header() {
    return (
        <div className={s.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={s.link}>PRE-JUNIOR</NavLink>
            <NavLink to={PATH.JUNIOR} className={s.link}>JUNIOR</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={s.link}>JUNIOR_PLUS</NavLink>
            <div className={s.block}></div>
        </div>
    )
}

export default Header
