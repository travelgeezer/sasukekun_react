import React from 'react';

export default class ToolbarExamplesSimple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 3,
      open: false
    };
  }


  render() {
    return (
      <div>
        <h1>menu</h1>
      </div>
    );
  }
}
