import React, { Component } from 'react';

import DeleteUser from '../component/deleteUser';
import ViewUser from './viewUser';

class Setting extends Component {
    
  render() {
    return (
      <div>
        
        <DeleteUser/>
        <ViewUser/>
      </div>
    );
  }
}

export default Setting;