import React from 'react';
import './Navbar.css';

const Navbar = () => {
	return (
		<nav className='nav'>
			<div className='nav-contents'>
				<div className='image-container'>
					<img className='top-logo' src='./images/logo.png' alt='top logo' />
					<p>Kostenlos. Einfach. Lokal/</p>
				</div>
				<div className='btn-container'>
					<button className='btn btn-secondary'>Registrieren</button>
					<span>oder</span>
					<button className='btn btn-primary'>Einloggen</button>
				</div>
			</div>
			{/* sub nav */}
			<div className='sub-nav'></div>
		</nav>
	);
};

export default Navbar;
