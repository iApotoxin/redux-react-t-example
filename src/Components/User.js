import React, { Component } from 'react';

class User extends Component {
  render() {
    return (
      <div>
          <p>hello:{this.props.username}</p>
      </div>
    );
  }
}
export default User;
