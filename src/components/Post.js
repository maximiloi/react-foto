import React, { Component } from 'react';
import User from './User';

class Post extends Component {
  render() {
    return (
      <div className="post">
        <User
          src="https://assets.vogue.com/photos/5a0b9d136ed2ed3c2e007e85/master/pass/pine-post-tout.jpg"
          alt="man"
          name="Scott"
          min
        />
        <img src={this.props.src} alt={this.props.alt}></img>
        <div className="post__name">
          Some Some
        </div>
        <div className="post__descr">
          Lorem Lorem Lorem Lorem LoremLoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem LoremLoremLorem Lorem Lorem Lorem
        </div>
      </div>
    )
  }
}

export default Post;