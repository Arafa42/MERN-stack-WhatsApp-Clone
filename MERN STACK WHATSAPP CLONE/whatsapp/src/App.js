import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from "./Chat";
import Pusher from "pusher-js";
import axios from './axios.js';

function App() {

const[messages, setMessages] = useState([]);

useEffect(() => {
axios.get("/api/v1/messages/sync")
    .then(response =>{
      setMessages(response.data);
    })

}, []);

useEffect(() => {
  
  const pusher = new Pusher('e52d6791ecd39497868c', {
    cluster: 'eu'
  });

  const channel = pusher.subscribe('messages');
  channel.bind('inserted', (newMessage) => {
    alert(JSON.stringify(newMessage));
    setMessages([...messages, newMessage]);
  });

return () => {
  channel.unbind_all();
  channel.unsubscribe();
}

}, [messages]);


console.log(messages);

  return (

<div className="app">
<div className="app_body">
<Sidebar/>
<Chat messages = {messages}/>
</div>
</div>

);
} 

export default App;