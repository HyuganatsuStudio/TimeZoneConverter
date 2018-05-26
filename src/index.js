var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./container/App/App');
var registerServiceWorker = require('./registerServiceWorker');

require('./index.css');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
