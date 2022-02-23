import React, { Component } from 'react';

class UsersList extends Component {
  render() {
    return (
      <div>
      <p>{this.props.users[1].userName}</p>
<p>{this.props.movies[1].name}</p>
    	<ul>
      		{
            	this.props.profiles.map((profile) => (
      				<li key={profile.id}>
						<p>Username: {this.props.users[profile.userID].userName}</p>
						<p>Favorite movie: {this.props.movies[profile.favoriteMovieID].name}</p>
						{profile.favoriteMovieID}
      				</li>
    			))
            }
      	</ul>
</div>
    )
	}
}

export default UsersList