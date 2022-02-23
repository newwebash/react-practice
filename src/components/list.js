import React, { Component } from 'react';

class UsersList extends Component {
  render() {
    return (
      <div>
      <p>{this.props.users[1].userName}</p>
    	<ul>
      		{
            	this.props.profiles.map((profile) => (
      				<li key={profile.id}>
						<p>{this.props.users[profile.userID].userName}</p>
						{profile.userID}
      				</li>
    			))
            }
      	</ul>
</div>
    )
	}
}

export default UsersList