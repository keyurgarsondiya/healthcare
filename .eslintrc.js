module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 11,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'react-hooks', 'import'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'eslint-config-prettier',
	],
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	rules: {
		['@typescript-eslint/no-explicit-any']: 'off',
		['@typescript-eslint/no-use-before-define']: 'off',
		['@typescript-eslint/explicit-function-return-type']: 'warn',
		['@typescript-eslint/array-type']: ['warn', { default: 'generic' }],
		['@typescript-eslint/naming-convention']: [
			'warn',
			{
				selector: 'interface',
				format: ['PascalCase'],
				custom: {
					regex: '^I[A-Z]',
					match: false,
				},
			},
		],
		['linebreak-style']: ['error', 'unix'],
		['no-console']: 'warn',
		['no-debugger']: 'warn',

		//Import Organization
		['sort-imports']: [
			'warn',
			{
				ignoreCase: true,
				ignoreDeclarationSort: true,
				ignoreMemberSort: false,
				allowSeparatedGroups: false,
			},
		],
		'import/order': [
			'warn',
			{
				groups: [
					'builtin',
					'internal',
					'external',
					'index',
					'sibling',
					'parent',
					'object',
					'type',
				],
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
				['newlines-between']: 'always',
			},
		],
		'no-duplicate-imports': 'off',
		'@typescript-eslint/no-duplicate-imports': 'warn',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
