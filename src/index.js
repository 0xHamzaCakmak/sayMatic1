import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Link } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
// basename="template_react"

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	
  document.getElementById('root')
);

reportWebVitals();

const Home = () =>{
	return (
		<ul>
        <li>
          {/* Endpoint to route to Home component */}
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* Endpoint to route to About component */}
          <Link to="/giris">Login</Link>
        </li>
        <li>
          {/* Endpoint to route to Contact Us component */}
          <Link to="/contactus">Contact Us</Link>
        </li>
      </ul>
	)
}

export default Home