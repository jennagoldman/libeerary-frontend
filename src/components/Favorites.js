import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import List from './List';
import request from 'superagent';

	export default class Favorites extends Component {
		state = { beers: [] }

		componentDidMount = async () => {
			const favorites = await request.get('https://damp-meadow-28672.herokuapp.com/api/my/favorites')
			.set('Authorization', this.props.user.token);

			this.setState({ beers: favorites.body })
		}
		render() {
			return (
				<div className="favorites-container">
                    <Link to="/" className="link-to">Search</Link>
                    <h2>My Favorite Beers</h2>
                    <List beers={this.state.beers} />
                </div>
			)
		}
	}