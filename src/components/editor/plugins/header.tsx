import React from 'react';

import { DropdownButton, HeaderButton } from './fragments';
import {
	ALIGN_OPTIONS,
	FONT_SIZE_OPTIONS,
	INSERT_OPTIONS,
	QUOTE_OPTIONS,
	TEXT_OPTIONS,
} from './fragments/constants';

export const Header = (): React.ReactElement => {
	return (
		<div
			className={
				'w-full h-[40px] mr-[-1px] rounded-t-lg bg-white flex flex-row items-center'
			}
			id={'editor-header'}
		>
			<HeaderButton iconName={'fi fi-rr-rotate-left'} iconSize={'text-base'} />
			<HeaderButton iconName={'fi fi-rr-rotate-right'} iconSize={'text-base'} />
			<DropdownButton
				hasBeforeIcon={true}
				dropdownLabelWidth={100}
				dropdownListWidth={150}
				beforeIcon={'fi fi-rr-message-quote'}
				options={QUOTE_OPTIONS}
			/>
			<DropdownButton
				hasBeforeIcon={true}
				dropdownLabelWidth={90}
				dropdownListWidth={150}
				beforeIcon={'fi fi-br-t'}
				options={TEXT_OPTIONS}
			/>
			<DropdownButton
				hasBeforeIcon={false}
				dropdownLabelWidth={70}
				dropdownListWidth={150}
				options={FONT_SIZE_OPTIONS}
			/>
			<HeaderButton iconName={'fi fi-br-bold'} iconSize={'text-base'} />
			<HeaderButton iconName={'fi fi-br-italic'} iconSize={'text-base'} />
			<HeaderButton iconName={'fi fi-br-underline'} iconSize={'text-base'} />
			<HeaderButton iconName={'fi fi-br-code-simple'} iconSize={'text-base'} />
			<HeaderButton
				iconName={'fi fi-br-link-horizontal'}
				iconSize={'text-base'}
				leftBorder
			/>
			<DropdownButton
				hasBeforeIcon={false}
				dropdownLabelWidth={50}
				dropdownListWidth={150}
				labelIcon={'fi fi-br-a'}
				options={[{ label: 'A', value: 'a' }]}
				borderLeft={false}
			/>
			<DropdownButton
				hasBeforeIcon={false}
				dropdownLabelWidth={50}
				dropdownListWidth={150}
				labelIcon={'fi fi-br-fill'}
				options={[{ label: 'A', value: 'a' }]}
				borderRight={false}
			/>
			<DropdownButton
				hasBeforeIcon={false}
				dropdownLabelWidth={50}
				dropdownListWidth={150}
				labelIcon={'fi fi-rr-text-size'}
				options={[{ label: 'A', value: 'a' }]}
			/>
			<DropdownButton
				hasBeforeIcon={true}
				dropdownLabelWidth={120}
				dropdownListWidth={150}
				beforeIcon={'fi fi-br-plus-small'}
				options={INSERT_OPTIONS}
			/>
			<DropdownButton
				hasBeforeIcon={true}
				dropdownLabelWidth={111}
				dropdownListWidth={150}
				beforeIcon={'fi fi-br-align-left'}
				options={ALIGN_OPTIONS}
				borderRight={false}
			/>
		</div>
	);
};
