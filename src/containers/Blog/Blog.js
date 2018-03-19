import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from '../Blog/NewPost/NewPost';
import FullPost from '../Blog/FullPost/FullPost';

class Blog extends Component {
	render () {
		return (
			<div className="Blog">
				<header>
					<nav>
						<ul>
							<li><NavLink to="/" exact>Home</NavLink></li>
							<li><NavLink to={{
								pathname: '/new-post',
								hash: '#submit',
								search: '?quick-submit=true'
							}}>New Post</NavLink></li>			
						</ul>
					</nav>
				</header>
				<Route path="/" exact component={Posts}/>
				<Switch>
					<Route path="/new-post" component={NewPost}/>
					<Route path="/:id" exact component={FullPost}/>
				</Switch>
			</div>
		);
	}
}

export default Blog;