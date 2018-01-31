var HelloReactES5 = React.createClass({
  render: function() {
    return React.createElement('h1', null, 'React using ES5');
  }
});

ReactDOM.render(
  React.createElement(HelloReactES5, null, null),
  document.getElementById('app')
);
