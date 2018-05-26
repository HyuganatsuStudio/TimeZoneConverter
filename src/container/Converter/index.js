var React = require('react');
var createReactClass = require('create-react-class');

var moment = require('moment');

var antd = require('antd');

require('./Converter.css');


var timezoneArr = [];
for (var i = -11; i <= 12; i++) {
  timezoneArr.push(i);
}


var Converter = createReactClass({
  getInitialState: function () {
    return ({
      timestamp: moment().valueOf(),
      unit: 'ms'
    });
  },
  _onTimestampChange: function (value) {
    if (value && Number.isInteger(value)) {
      this.setState({
        timestamp: value
      });
    }
  },
  _onDateChange: function (date, dateString, timezone) {
    var currentMoment = moment(this.state.timestamp).utcOffset(timezone);
    currentMoment.year(date.year());
    currentMoment.month(date.month());
    currentMoment.date(date.date());
    this.setState({
      timestamp: currentMoment.valueOf()
    });
  },
  _onTimeChange: function (date, dateString, timezone) {
    var currentMoment = moment(this.state.timestamp).utcOffset(timezone);
    currentMoment.hour(date.hour());
    currentMoment.minute(date.minute());
    currentMoment.second(date.second());
    currentMoment.millisecond(0);
    this.setState({
      timestamp: currentMoment.valueOf()
    });
  },
  _renderTime: function () {
    var Row = antd.Row;
    var Col = antd.Col;
    var DatePicker = antd.DatePicker;
    var TimePicker = antd.TimePicker;
    var onDateChange = this._onDateChange;
    var onTimeChange = this._onTimeChange;
    return (
      <Row className="timeContainer">
        {
          timezoneArr.map(function (timezone, key) {
            return (
              <Col className="timeItemContainer" xl={12} md={24} key={key}>
                <span className="timezoneLabel">UTC{timezone >= 0 ? '+' + timezone : timezone}</span>
                <DatePicker className="datePicker" placeholder="Date"
                  allowClear={false}
                  value={moment(this.state.timestamp).utcOffset(timezone)}
                  onChange={function (date, dateString, ) {
                    onDateChange(date, dateString, timezone);
                  }}/>
                <TimePicker className="timePicker" placeholder="Time"
                  allowClear={false}
                  value={moment(this.state.timestamp).utcOffset(timezone)}
                  onChange={function (date, dateString, ) {
                    onTimeChange(date, dateString, timezone);
                  }}/>
              </Col>
            );
          }.bind(this))
        }
      </Row>
    );
  },
  render: function () {
    var Row = antd.Row;
    var Col = antd.Col;
    var InputNumber = antd.InputNumber;
    var Select = antd.Select;
    return (
      <div className="container">
        <Row>
          <Col className="timestampCol" span={24}>
            <div className="timestampContainer">
              <span>Timestamp</span>
              <InputNumber className="timestamp" min={0} defaultValue={0} value={this.state.timestamp} onChange={this._onTimestampChange}/>
              <Select className="timestampUnit" defaultValue="ms" disabled>
                <Select.Option value="ms">ms</Select.Option>
                <Select.Option value="s">s</Select.Option>
              </Select>
            </div>
          </Col>
        </Row>
        {
          this._renderTime()
        }
      </div>
    );
  }
});

module.exports = Converter;
