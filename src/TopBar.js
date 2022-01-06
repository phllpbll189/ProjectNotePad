import * as React from 'react';
import './css/TopBar.css'


function TopBar(){
    return (
        /* 
        This returns the tap nav bar
        It has a menu button
        a Title
        a search bar
        and a login/signup button
        */
        <div className="TopBar">
            <div className="SvgBackground"></div>
            <div className="TopTitle">
                <strong>Project</strong>
                <span className="table"><strong>NotePad</strong></span>
            </div>
            <EditButton cmd="bold"/>
            <EditButton cmd="formatBlock" arg="h1" name="heading" />
            <EditButton cmd="insertUnorderedList" name="bullet point"/>
        </div>
    );
}

function EditButton(props) {
    return (
      <div className='EditButton'
        key={props.cmd}
        onMouseDown={evt => {
          evt.preventDefault(); // Avoids loosing focus from the editable area
          document.execCommand(props.cmd, false, props.arg); // Send the command to the browser
        }}
      >
        {props.name || props.cmd}
      </div>
    );
}

export default TopBar;