import { hashRoute } from './hash-route';

import { Pages } from '../../constants';

describe('GIVEN hashRoute called with string', () => {
	it('SHOULD prefix the string with hashtag', () => {
		const mockPath = Pages.Dashboard;
		const response = hashRoute(mockPath);
		expect(response).toEqual(`#${Pages.Dashboard}`);
	});
});
