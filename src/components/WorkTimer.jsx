import React from 'react';

class WorkTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  componentDidMount() {
    this.timer = setInterval(function () {
      this.setState(function (state) {
        return { seconds: state.seconds + 1 };
      });
    }.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { seconds } = this.state;
    return <p>Đã xem: {seconds} giây</p>;
  }
}

export default WorkTimer;
