import React, { Component } from 'react';
import axios from '../../../axios';
// import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import './Posts.css';

class Posts extends Component {
  state = {
		posts: []
  }

  componentDidMount() {
		axios.get('/posts')
			.then(res => {
				const posts = res.data.slice(0, 4);
				const updatedPosts = posts.map(post => {
					return {
						...post,
						author: 'Miguel'
					}
				});
				this.setState({ posts: updatedPosts });
			})
			.catch(err => {
        console.log(err);
				// this.setState({ error: true})
			});
  }
  
	postSelectedHandler = id => {
		this.props.history.push({pathname: '/posts/' + id });
  }
  
  render() {
    let posts = <p style={{textAlign: 'center'}}>There was an error loading the posts.</p>
		if(!this.state.error) {
			posts = this.state.posts.map(post => {
				return (
          // <Link to={'/' + post.id} key={post.id}>
            <Post
              key={post.id}
              author={post.author}
              title={post.title}
              clicked={() => this.postSelectedHandler(post.id)}/>
          // </Link>
        );
			});
    }
    
    return (
      <div>
        <section className="Posts">
            {posts}
        </section>
        <Route path={this.props.match.url + '/:id'} exact component={FullPost}/>
      </div>
    )
  }
}

export default Posts;