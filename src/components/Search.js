import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List from './List';
import request from 'superagent';

	export default class Search extends Component {

        state = {
            beers: [],
            favorites: [],
            input: ''
        }

        componentDidMount = async () => {
            const favorites = await request.get('https://damp-meadow-28672.herokuapp.com/api/my/favorites')
                .set('Authorization', this.props.user.token);

            this.setState({ favorites: favorites.body });
        }

        handleInput = (event) => {
            this.setState({ input: event.target.value })
        }

        handleSearch = async (event) => {
            event.preventDefault();

            this.setState({ loading: true });
            const data = await request.get(`https://damp-meadow-28672.herokuapp.com/api/beers?search=${this.state.input}`);
            // const beers = data.body.data;
            const beers = data.body.data;

            this.setState({ beers, loading: false })
            console.log(beers);
        }

		render() {
			return (
                <div className="search-component">
                    <Link to="/favorites" className="link-to">My Favorites</Link>
                    <div className="search-container">
                        <form onSubmit={this.handleSearch}>
                            <input 
                                value={this.state.input} 
                                onChange={this.handleInput}  
                            />
                            <button disabled={this.state.loading}>Search</button>
                        </form>
                    </div>
                    <div className="list-container">
                        {
                            this.state.loading
                                ? 'Loading...'
                                : <List 
                                    beers={this.state.beers} 
                                    favorites={this.state.favorites}
                                    user={this.props.user} 
                                />
                        }
                    </div>
                </div>
			)
		}
	}