import { Avatar } from '@material-ui/core'
import React from 'react'
import './headerOption.css'
export default function HeaderOption({ title, Icon,avatar }) {
    return (
        <div className='headerOption'>
            {Icon && <Icon className='header__icon' />}
            {avatar && <Avatar className='header__icon' src={avatar} />}
            <h3 className='headerOption__title'>{title}</h3>
        </div>
    )
}
