import React from 'react';

var MyNameComponent = React.createClass({
  render: function () {
    return React.createElement('h1', null, 'My name is ' + this.props.name);
  }
});

export default MyNameComponent;