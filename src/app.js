var MyName = React.createClass({
  render: function() {
    return React.createElement('span', null, ' my name is ' + this.props.name);
  }
});

var HelloReactES5 = React.createClass({
  render: function() {
    return React.createElement('h1', null, 'React using ES5', React.createElement(MyName, {name: 'Edgar'}, null));
  }
});

ReactDOM.render(
  React.createElement(HelloReactES5, null, null, null),
  document.getElementById('app')
);
