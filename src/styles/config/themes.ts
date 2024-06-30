interface ITheme {
	theme: string;
	background: {
		primary: string;
		secondary: string;
		button: string;
		optionHover: string;
		disabled: string;
	};
	textColor: {
		primary: string;
		secondary: string;
		tertiary: string;
	};
}

export const theme: { [id: string]: ITheme } = {
	dark: {
		theme: 'dark',
		background: {
			primary: '#504e4e', //700
			secondary: '#3d3c3c', //900
			button: '#646464', //300
			optionHover: '#b1afb0', //300
			disabled: 'rgba(139, 139, 139, 0.76)',
		},
		textColor: {
			primary: '#e7e6e6', //100
			secondary: '#313030', //950 Principal
			tertiary: '#b1afb0',
		},
	},
	light: {
		theme: 'light',
		background: {
			primary: '#e7e6e6', //700
			secondary: '#f6f5f5', //900
			button: '#B9B9B9', //300
			optionHover: '#b1afb0', //300
			disabled: 'rgba(139, 139, 139, 0.76)',
		},
		textColor: {
			primary: '#313030', //100
			secondary: '#e7e6e6', //950
			tertiary: '#b1afb0',
		},
	},
	darkBlue: {
		theme: 'darkBlue',
		background: {
			primary: 'rgb(21, 21, 33)', //700
			secondary: 'rgb(30, 30, 45)', //900
			button: '#304474', //300
			optionHover: '#304474', //300
			disabled: '#B9B9B9',
		},
		textColor: {
			primary: '#e7e6e6', //100
			secondary: '#e7e6e6', //950
			tertiary: '#e7e6e6',
		},
	},
};
