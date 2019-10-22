import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  render() {
    return (
      <div className="left">
        <Post src="https://i.ytimg.com/vi/x_HL0wiK4Zc/maxresdefault.jpg" alt="inst" />
        <Post src="https://2w6kxc22rrr9mabqt1mglgait6-wpengine.netdna-ssl.com/wp-content/uploads/2019/08/man-shrug-beard-1024x580.jpg" alt="inst" />
      </div>
    )
  }
}

export default Posts;