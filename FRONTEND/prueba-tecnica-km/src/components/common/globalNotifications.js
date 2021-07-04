import React from 'react';
import { connect } from 'react-redux';
import Notifications from 'react-notification-system-redux';

class GlobalNotifications extends React.Component {

  render() {
    const { notifications } = this.props;

    const style = {
      NotificationItem: { }
    };

    return (
      <Notifications
        notifications={notifications}
        style={style}
      />
    );
  }
}


export default connect(
  state => ({
    notifications: state.notifications
  })
)(GlobalNotifications);