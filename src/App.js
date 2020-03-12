import React from 'react';

import "./style.css";

import Header from './components/Header';
import Routes from './routes';

// import api from './services/api';


const App = () => (

	<div className="App">
		<Header />
		<Routes />
	</div>

);

export default App;
