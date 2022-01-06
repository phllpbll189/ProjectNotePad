import ContentEditable from 'react-contenteditable';
import React from 'react';
import './css/EditableArea.css'

export default class EditableArea extends React.Component {
  constructor(props) {
    super(props)
    this.contentEditable = React.createRef();
    this.state = {html: "<p>add your text here!<p>"};
  };

  handleChange = evt => {
    this.setState({html: evt.target.value});
  };

  render = () => {
    return <ContentEditable
              className="editable"
              innerRef={this.contentEditable}
              html={this.state.html} // innerHTML of the editable div
              disabled={false}       // use true to disable editing
              onChange={this.handleChange} // handle innerHTML change
            />
  }; 
};
