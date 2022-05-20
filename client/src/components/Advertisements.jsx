import React, { useState, useEffect } from 'react';
import './Advertisements.css';

const Advertisements = () => {
	const [ads, setAds] = useState([]);

	const fetchAdsData = async () => {
		const response = await fetch('http://localhost:8080/ads/');
		setAds(await response.json());
		console.log(response);
	};

	useEffect(() => {
		fetchAdsData();
	}, []);

	if (!ads) {
		return 'Loading...';
	}
	return (
		<div className='ads-container'>
			{ads.map((ad) => (
				<div className='ad-card' key={ad.id}>
					<h1 className='ad-title'>{ad.title}</h1>
					<img className='ad-image' src={ad.imageUrl} alt='advertisement' />
					<p className='ad-description'>{ad.description}</p>
				</div>
			))}
		</div>
	);
};

export default Advertisements;
