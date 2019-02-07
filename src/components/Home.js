import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PostImage from '../img/post-image.jpeg';

import { connect } from 'react-redux';

class Home extends Component {
/*  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.setState({posts: res.data.slice(0,10)})
      });
  }*/
  render() {
    console.log(this.props)
    const { posts } = this.props;
    const postList = posts.length ? (
        posts.map(post => {
          return (
            <div className="post card" key={post.id}>
              <div className="card-content">
                <Link to={'/'+post.id}><span className="card-title">{post.title}</span></Link>
                <img className="image-post" src={PostImage} alt=""/>
                <p>{post.body}</p>
              </div>
            </div>
          )
        })
      ) : (
      <div className="center">No posts yet</div>
    );
    return(
      <div className="container">
        {postList}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home);
