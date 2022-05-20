import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Ads from './components/ads';
import Details from './components/details';
import Users from './components/Users';

import './App.css';
import Navbar from './components/Navbar';
import Advertisements from './components/Advertisements';

class App extends Component {
	state = {
		ads: [
			{
				id: 0,
				title: 'Title Nr. 0',
				imageUrl:
					'https://i.ebayimg.com/00/s/MTAyNFg1NzY=/z/qWYAAOSwm1Vcc6F4/$_72.JPG',
				description: 'Description 0',
				userId: null,
			},
		],
	};

	render() {
		return (
			<>
				<Navbar />
				<Users />
				<Advertisements />
				<Router>
					<Switch>
						<Route exact path='/details' component={Details} />
						<Route
							path='/'
							component={(props) => <Ads {...props} ads={this.state.ads} />}
						/>
					</Switch>
				</Router>
			</>
		);
	}
}

export default App;
