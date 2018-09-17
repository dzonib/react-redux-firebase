import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './layout/Navbar';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
				<Navbar />
					<h1>Mario Plan</h1>
				</div>
			</Router>
		);
	}
}

export default App;
