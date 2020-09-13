import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import "./Chat.css";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import AttachFile from "@material-ui/icons/AttachFile";
import MoreVert from "@material-ui/icons/MoreVert";
import MicIcon from "@material-ui/icons/Mic";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";




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

<div className="chat_body">

<p className="chat_message_sender">
<span className="chat_name">Arafa</span>
hello world !
<span className="chat_time">
{new Date().toUTCString()}
</span>
</p>

<p className="chat_message_sender chat_message_receiver">
<span className="chat_name">Piccolo</span>
hello namek !
<span className="chat_time">
{new Date().toUTCString()}
</span>
</p>

<p className="chat_message_sender">
<span className="chat_name">Arafa</span>
Ok.
<span className="chat_time">
{new Date().toUTCString()}
</span>
</p>




</div>

<div className="chat_footer_response">
<InsertEmoticonIcon/>
<form>
<input placeholder="Type a message" type="text"></input>
<button type="submit">Send a message</button>
</form>
<MicIcon/>
</div>
</div>
);
}

export default Chat;
