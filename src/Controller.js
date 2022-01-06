import React from 'react';
import EditableArea from './EditableArea';
import TopBar from './TopBar';

export default class Controller extends React.Component {
  constructor() {
    super();
    this.state = {
       BackgroundColor:  0x282c34,
       style: "style='color:white;'"
    };
  };
  // this is where information from the top bar will be

  render = () => {
    return (
        <div>
            <TopBar/>
            <EditableArea
                style={ this.props.style }
            />
        </div>
    
    );
  };
};