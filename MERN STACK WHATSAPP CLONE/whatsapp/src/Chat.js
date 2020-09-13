import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import "./Chat.css";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import AttachFile from "@material-ui/icons/AttachFile";
import MoreVert from "@material-ui/icons/MoreVert";



function Chat() {
    return (

<div className="chat">
<div className="chat_avatar">
<Avatar/>

<div className="chat_header_info">
<h3>Dance room</h3>
<p>last seen at...</p>
</div>        

<div className="chat_header_icons">
    <IconButton>
    <SearchOutlined/>  
    </IconButton>

    <IconButton>       
    <AttachFile/>  
    </IconButton>
    
    <IconButton>
    <MoreVert/>  
    </IconButton>

</div>   
</div>
</div>
);
}

export default Chat;
