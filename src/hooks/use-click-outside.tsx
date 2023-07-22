import { RefObject, useEffect } from 'react';

export const useClickOutside = <T extends HTMLElement>(
	ref: RefObject<T> | null,
	cb: () => void
): void => {
	useEffect(() => {
		const element = ref?.current;

		const handleClickOutside = (event: Event): void => {
			if (element && !element.contains(event.target as Node | null)) {
				cb();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref, cb]);
};
