import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
  return (
    <div className="container  profile">
      <User
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        alt="Билли"
        name="Билли"
      />

      <Palette />

    </div>
  )
}

export default Profile;