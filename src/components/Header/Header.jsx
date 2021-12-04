import React from 'react'
import './header.css';

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import HeaderOption from './HeaderOption';
import WorkIcon from '@material-ui/icons/Work';

export default function Header() {
    return (
        <div className='header'>
            <div className="header__left">
                <img src="logo.png" alt="" />
                <div className="header__search">
                    <input type="text" />
                    <SearchIcon />

                </div>
            </div>
            <div className="header__right">

                <HeaderOption title='home' Icon={HomeIcon} />
                <HeaderOption title='My Network' Icon={PeopleIcon} />
                <HeaderOption title='Jobs' Icon={WorkIcon}/>
                <HeaderOption title='Messaging' Icon={HomeIcon}/>
                <HeaderOption title='Work' Icon={HomeIcon}/>
                <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C5603AQEnM6ahRACy-w/profile-displayphoto-shrink_100_100/0/1631931119712?e=1637798400&v=beta&t=D7TdsiNzg6GluU-U-OhkOC5xPieyTTm1ZEfLG5A5I0k" title='shiv' />
            </div>
        </div>

    )
}
