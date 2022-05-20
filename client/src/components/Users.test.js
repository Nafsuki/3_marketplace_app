import React from 'react';
import { render, screen } from '@testing-library/react';
import Posts from './Posts';

it('renders user data', async () => {
	const fakeUser = {
		id: 0,
		name: 'testUser',
	};
	jest.spyOn(global, 'fetch').mockImplementation(() =>
		Promise.resolve({
			json: () => Promise.resolve(fakeUser),
		})
	);
});
