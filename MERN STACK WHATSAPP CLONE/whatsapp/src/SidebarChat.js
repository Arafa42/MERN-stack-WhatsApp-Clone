import { Avatar } from '@material-ui/core';
import React from 'react';
import "./SidebarChat.css";

const SidebarChat = () => {
    return (
        <div className="sidebar_chat">
            
<Avatar/>
<div className="sidebar_chat_info">
<h3>Room random</h3>
<p>latest message</p>

</div>
</div>
)
}

export default SidebarChat
