import React from 'react';

import { links } from '../../routes';
import { Nav } from '../nav';

export const Header = (): React.ReactElement => {
	return <Nav links={links} />;
};
