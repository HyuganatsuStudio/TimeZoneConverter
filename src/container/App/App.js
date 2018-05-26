var React = require('react');
var createReactClass = require('create-react-class');
var Router = require('react-router-dom').BrowserRouter;
var Route = require('react-router-dom').Route;

var SiderMenu = require('../SiderMenu');
var Home = require('../Home');
var Converter = require('../Converter');

var antd = require('antd');

require('./App.css');


var App = createReactClass({
  render: function () {
    var Layout = antd.Layout;
    return (
      <Router>
        <Layout className="app">
          <Layout className="container">
            <SiderMenu/>
            <Layout className="contentContainer">
              <Layout.Content className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/converter" component={Converter}/>
              </Layout.Content>
              <Layout.Footer className="footer">
                TimeZoneConverter ©2018 Created by jk625x
              </Layout.Footer>
            </Layout>
          </Layout>
        </Layout>
      </Router>
    );
  }
});

module.exports = App;
