import { ColorThemes } from '../../entities/theme/';

interface IColors {
	alwaysWhite: string;
	alwaysBlack: string;
	mainSurfacePrimary: string;
	mainSurfaceSecondary: string;
	mainSurfaceTertiary: string;
	textPrimary: string;
	textSecondary: string;
	textTertiary: string;
	basicGreen: string;
	switchBg: string;
	switchActive: string;
	borderColor: string;
}

const colors: Record<ColorThemes, IColors> = {
	light: {
		alwaysWhite: '#ffffff',
		alwaysBlack: '#000000',
		mainSurfacePrimary: '#ffffff',
		mainSurfaceSecondary: '#f9f9f9',
		mainSurfaceTertiary: '#ececec',
		textPrimary: '#0d0d0d',
		textSecondary: '#5d5d5d',
		textTertiary: '#b4b4b4',
		basicGreen: '#419a82',
		switchBg: '#cdcdcd',
		switchActive: '#000000',
		borderColor: 'rgba(0, 0, 0, 0.5)'
	},
	dark: {
		alwaysWhite: '#ffffff',
		alwaysBlack: '#000000',
		mainSurfacePrimary: '#212121',
		mainSurfaceSecondary: '#2f2f2f',
		mainSurfaceTertiary: '#424242',
		textPrimary: '#ececec',
		textSecondary: '#b4b4b4',
		textTertiary: '#9b9b9b',
		basicGreen: '#419a82',
		switchBg: '#2f2f2f',
		switchActive: '#419a82',
		borderColor: 'hsla(0, 0%, 100%, 0.5)'
	}
};

export default colors;
