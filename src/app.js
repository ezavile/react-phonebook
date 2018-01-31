var HelloReactES5 = React.createClass({
  render: function() {
    return React.createElement('h1', null, 'React using ES5, my name is ' + this.props.name);
  }
});

ReactDOM.render(
  React.createElement(HelloReactES5, {name: 'Edgar'}, null),
  document.getElementById('app')
);
