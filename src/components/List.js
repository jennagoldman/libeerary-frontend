import React, { Component } from 'react';
import request from 'superagent';
import { withRouter } from 'react-router-dom';

	export default withRouter(class List extends Component {
        makeFavorite = async (beer) => {
            const favorite = await request.post('https://damp-meadow-28672.herokuapp.com/api/my/favorites', {
                name: beer.beer.beer_name,
                abv: beer.beer.beer_abv,
                ibu: 
                    beer.beer.beer_ibu === undefined
                        ? 'N/A'
                        : beer.beer.beer_ibu,
                style: beer.beer.beer_style,
                image_url: beer.beer.beer_label,
            })
            .set('Authorization', this.props.user.token)
        }

        renderButtonOrStar = (beer) => {
            const isOnFavoritesList = this.props.favorites.find(favBeer => beer.name === favBeer.name);
            if(!isOnFavoritesList) {
                return <button onClick={ (event) => {
                    this.makeFavorite(beer);
                    this.props.history.push('/favorites-frontend');
                }}>Favorite</button>
            }
            return <span>⭐</span>
        }

        renderImage = (beer) => {
            if(beer.beer_label) {
                return beer.beer.beer_label;
            } else if(!beer.beer.beer_label) {
                return '../favorites-frontend/placeholder.jpg';
            } else {
                return beer.beer.beer_label;
            }
        }

		render() {
			return (
				<ul>
                    {this.props.beers.map(beer => 
                        <li key={beer.id}>
                            <div className="item-container">
                                <div className="item-name">
                                    <h3>{beer.beer.beer_name}</h3>
                                    <h4>{beer.brewery.brewery_name}</h4>
                                </div>
                                <img 
                                    src={ this.renderImage(beer)} 
                                    alt={beer.beer.beer_name} />
                                <p>
                                    <span>IBU: 
                                        { 
                                            beer.beer.beer_ibu === undefined
                                                ? "N/A"
                                                : beer.beer.beer_ibu
                                        } | </span>
                                    <span>ABV: {beer.beer.beer_abv}%</span>
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