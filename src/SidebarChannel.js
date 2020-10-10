import React from 'react'
import { useDispatch } from 'react-redux'
import { setChannelInfo } from './features/appSlice'
import './SidebarChannel.css'

export const SidebarChannel = ({id,channelName}) => {
    //need to update header ,so for that we need to dispatch an action
    //as we click on channel name ,we have toupdate the store ,for that pull dispatch  

    const dispatch = useDispatch()
    return (
        <div onClick={ ()=> dispatch(setChannelInfo({
            channelId:id,
            channelName:channelName
        }))} className='sidebarChannel'>
            <h4>
                <span className="sidebarChannel__hash">#</span>
                {channelName}
            </h4>
        </div>
    )
}
