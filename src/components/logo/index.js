var React = require('react');
var createReactClass = require('create-react-class');
var logoImg = require('./assets/logo.png');

// var antd = require('antd');

require('./logo.css');

var Logo = createReactClass({
  render: function () {
    return (
      <div className="logo">
        <img className="logoImg" src={logoImg}/>
        <div className="textContainer">
          <span className="logoText">Hyuganatsu</span>
          <div className="logoTextExtra"/>
        </div>

      </div>
    );
  }
});

module.exports = Logo;
