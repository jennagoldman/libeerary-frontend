import React, { Component } from 'react';

	export default class App extends Component {
		render() {
			return (
                <li>
                    <div className="item-container">
                        <div className="item-name">
                            <h3>{this.props.beer.name}</h3>
                        </div>
                        <img 
                            src={
                                    this.props.beer.beer_label === undefined
                                        ? "./placeholder.jpg"
                                        : this.props.beer.beer_label
                                } 
                            alt={this.props.beer.name} />
                        <p>
                            <span>IBU: {this.props.beer.beer_ibu} | </span>
                            <span>ABV: {this.props.beer.beer_abv}%</span>
                        </p>
                    </div>
                </li>
			)
		}
	}