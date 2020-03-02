import React, { Component } from 'react';
import request from 'superagent';
import { withRouter } from 'react-router-dom';

	export default withRouter(class List extends Component {
        makeFavorite = async (beer) => {
            const favorite = await request.post('https://damp-meadow-28672.herokuapp.com/api/my/favorites', {
                name: beer.name,
                abv: beer.abv,
                ibu: 
                    beer.ibu === undefined
                        ? 'N/A'
                        : beer.ibu,
                style: beer.style.name,
                image_url: beer.labels.icon
            })
            .set('Authorization', this.props.user.token)
        }

        renderButtonOrStar = (beer) => {
            const isOnFavoritesList = this.props.favorites.find(favBeer => beer.name === favBeer.name);
            if(!isOnFavoritesList) {
                return <button onClick={ (event) => {
                    this.makeFavorite(beer);
                    this.props.history.push('/')
                }}>Favorite</button>
            }
            return <span>⭐</span>
        }

        renderImage = (beer) => {
            if(beer.image_url) {
                return beer.image_url;
            } else if(!beer.labels) {
                return '../favorites-frontend/placeholder.jpg';
            } else {
                return beer.labels.icon;
            }
        }

		render() {
			return (
				<ul>
                    {this.props.beers.map(beer => 
                        <li key={beer.id}>
                            <div className="item-container">
                                <div className="item-name">
                                    <h3>{beer.name}</h3>
                                </div>
                                <img 
                                    src={ this.renderImage(beer)} 
                                    alt={beer.name} />
                                <p>
                                    <span>IBU: 
                                        { 
                                            beer.ibu === undefined
                                                ? "N/A"
                                                : beer.ibu
                                        } | </span>
                                    <span>ABV: {beer.abv}%</span>
                                </p>
                                {
                                    this.props.location.pathname !== '/favorites'
                                    && this.renderButtonOrStar(beer)
                                }
                            </div>
                        </li>
                    )}
                </ul>
			)
		}
    })