import React from 'react'
import './ChatHeader.css'
import NotificationsIcon from '@material-ui/icons/Notifications';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PeopleIcon from '@material-ui/icons/People';

import SearchIcon from '@material-ui/icons/Search';
import SendIcon from '@material-ui/icons/Send';
import HelpIcon from '@material-ui/icons/Help';

export const ChatHeader = ({id,channelName}) => {
    return (
        <div className='chatheader'>
            <div className="chatheader__left">
                <h3>
                    <span className="chatheader__hash">#</span>
                    {channelName}
                </h3>
            </div>
            <div className="chatheader__right">
                <NotificationsIcon />
                <LocationOnIcon />
                <PeopleIcon />
                <div className="header__search">
                    <input placeholder='Search' />
                    <SearchIcon />
                </div>
                <SendIcon />
                <HelpIcon />
            </div>
        </div>
    )
}
