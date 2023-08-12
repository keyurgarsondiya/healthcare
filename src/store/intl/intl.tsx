import React, { useState } from 'react';

import { LANGUAGES, LanguagesOptions } from '../../constants';

interface IntlContextResponse {
	t(key: string): string;
	currentLanguage: LanguagesOptions;
	setCurrentLanguage: React.Dispatch<React.SetStateAction<LanguagesOptions>>;
}

interface Props {
	children: React.ReactNode;
}

export const IntlContext = React.createContext<IntlContextResponse>({
	t: () => '',
	currentLanguage: LanguagesOptions.EnGb,
	setCurrentLanguage: () => void 0,
});

export const IntlProvider = ({ children }: Props): React.ReactElement => {
	const [currentLanguage, setCurrentLanguage] = useState<LanguagesOptions>(
		LanguagesOptions.EnGb
	);
	return (
		<IntlContext.Provider
			value={{
				t: (key: string): string => LANGUAGES[currentLanguage][key],
				currentLanguage,
				setCurrentLanguage,
			}}
		>
			{children}
		</IntlContext.Provider>
	);
};
