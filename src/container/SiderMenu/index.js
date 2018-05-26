var React = require('react');
var createReactClass = require('create-react-class');
var Link = require('react-router-dom').Link;
var withRouter = require('react-router-dom').withRouter;

var Logo = require('../../components/logo');

var antd = require('antd');

require('./SiderMenu.css');

var SiderMenu = createReactClass({
  propTypes: {
    location: React.PropTypes.shape({
      pathname: React.PropTypes.string.isRequired
    })
  },
  render: function () {
    var Menu = antd.Menu;
    var Layout = antd.Layout;
    var location = this.props.location ? this.props.location : '/';
    return (
      <Layout.Sider
        className="sider"
        breakpoint="lg"
        collapsedWidth="0"
        onCollapse={function (collapsed, type) {
          console.log(collapsed, type);
        }}>
        <Logo className="logo"/>
        <Menu className="menu"
          theme="light"
          mode="inline"
          defaultSelectedKeys={['/']}
          selectedKeys={[location.pathname]}>
          <Menu.Item className="menuItem"
            key="/">
            <Link className="link"
              to="/">
              Home
            </Link>
          </Menu.Item>
          <Menu.Item className="menuItem"
            key="/converter">
            <Link className="link"
              to="/converter">
              Converter
            </Link>
          </Menu.Item>
        </Menu>
      </Layout.Sider>
    );
  }
});


module.exports = withRouter(SiderMenu);
