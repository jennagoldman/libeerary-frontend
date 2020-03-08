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

        renderImage = (beer) => {
            if(beer.image_url) {
                return beer.image_url;
            } else if(!beer.image_url) {
                return '../favorites-frontend/placeholder.jpg';
            } else {
                return beer.image_url;
            }
        }

		render() {
			return (
				<div className="favorites-container">
                    <Link to="/favorites-frontend" className="link-to">Search</Link>
                    <h2>My Favorite Beers</h2>
					<ul>
                    {this.state.beers.map(beer => 
                        <li key={beer.id}>
                            <div className="item-container">
                                <div className="item-name">
                                    <h3>{beer.name}</h3>
                                </div>
                                <img 
                                    src={ this.renderImage(beer)} 
                                    alt={beer.image_url} />
                                <p>
                                    <span>IBU: 
                                        { 
                                            beer.ibu === undefined
                                                ? "N/A"
                                                : beer.ibu
                                        } | </span>
                                    <span>ABV: {beer.abv}%</span>
                                </p>
                            </div>
                        </li>
                    )}
                </ul>
                </div>
			)
		}
	}