import React, { Component } from 'react';

class UsersList extends Component {
  render() {
    return (
    	<ul>
      		{
            	this.props.profiles.map((profile) => (
      				<li key={profile.id}>
						{profile.userID}
      				</li>
    			))
            }
      	</ul>
    )
	}
}

export default UsersList