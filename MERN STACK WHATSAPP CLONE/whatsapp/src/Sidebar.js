import React from 'react';
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {Avatar, IconButton} from "@material-ui/core";



function sidebar() {
    return (
        <div className="sidebar">            

<div className="sidebar_header">

<Avatar src="https://www.ap.be/sites/default/files/2020-07/alvanjongsafaan.jpg"/>

<div className="sidebar_header_right">

<IconButton>
<DonutLargeIcon/>
</IconButton>

<IconButton>
<ChatIcon/>
</IconButton>

<IconButton>
<MoreVertIcon/>
</IconButton>


</div>
</div>

<div className="sidebar_search">

search


</div>

</div>

);
}

export default sidebar;
