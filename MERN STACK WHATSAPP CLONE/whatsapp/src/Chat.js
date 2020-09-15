import { Avatar, IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import "./Chat.css";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import AttachFile from "@material-ui/icons/AttachFile";
import MoreVert from "@material-ui/icons/MoreVert";
import MicIcon from "@material-ui/icons/Mic";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import axios from "./axios.js";



function Chat({messages}) {

const [input, setInput] = useState("");

const sendMessage = async (e) =>{
//no page refresh    
e.preventDefault();

await axios.post("/api/v1/messages/new", {
message: input,
name: "Piccolo",
timestamp: "Just now...",
received: true,
})

setInput("");

}

    return (

<div className="chat">
<div className="chat_avatar">
<Avatar/>

<div className="chat_header_info">
<h3>Hyperbolic time chamber</h3>
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

{messages.map((message) => (

<p className={`chat_message_sender ${message.received && "chat_message_receiver"}`}>
<span className="chat_name">{message.name}</span>
{message.message}
<span className="chat_time">
{message.timestamp}
</span>
</p>

    ))}





</div>

<div className="chat_footer_response">
<InsertEmoticonIcon/>
<form>
<input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message" type="text"></input>
<button onClick={sendMessage} type="submit">Send a message</button>
</form>
<MicIcon/>
</div>
</div>
);
}

export default Chat;
