import React, { Component } from 'react';

class UsersList extends Component {
  render() {
    return (
      <div>
    	<ul>
      		{
            	this.props.profiles.map((profile) => (
      				<li key={profile.id}>
						<p>{this.props.users[profile.userID].name}'s favorite movie is {this.props.movies[profile.favoriteMovieID].name}</p>
      				</li>
    			))
            }
      	</ul>
	</div>
    )
  }
}

export default UsersList