import { ColorThemes } from '../../entities/theme/';

interface IColors {
  alwaysWhite: string;
	mainSurfacePrimary: string;
  mainSurfaceSecondary: string;
  mainSurfaceTertiary: string;
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  basicGreen: string;
}

const colors: Record<ColorThemes, IColors> = {
	light: {
    alwaysWhite: '#ffffff',
		mainSurfacePrimary: '',
    mainSurfaceSecondary: '',
    mainSurfaceTertiary: '',
    textPrimary: '',
    textSecondary: '',
    textTertiary: '',
    basicGreen: '#419a82'
	},
	dark: {
    alwaysWhite: '#ffffff',
    mainSurfacePrimary: '#212121',
    mainSurfaceSecondary: '#2f2f2f',
    mainSurfaceTertiary: '#424242',
    textPrimary: '#ececec',
    textSecondary: '#b4b4b4',
    textTertiary: '#9b9b9b',
    basicGreen: '#419a82'
	}
};

export default colors;

// --main-surface-background: rgba(33,33,33,.9);
// --message-surface: rgba(50,50,50,.85);
// --dot-color: var(--white);
// --text-primary: var(--gray-100);
// --text-primary-inverse: var(--gray-950);
// --text-secondary: var(--gray-400);
// --text-tertiary: var(--gray-500);
// --text-quaternary: var(--gray-600);
// --text-placeholder: hsla(0,0%,100%,.8);
// --text-error: #f93a37;
// --border-xlight: hsla(0,0%,100%,.05);
// --border-light: hsla(0,0%,100%,.1);
// --border-medium: hsla(0,0%,100%,.15);
// --border-heavy: hsla(0,0%,100%,.2);
// --border-xheavy: hsla(0,0%,100%,.25);
// --border-sharp: hsla(0,0%,100%,.05);
// --main-surface-primary: var(--gray-800);
// --main-surface-primary-inverse: var(--white);
// --main-surface-secondary: var(--gray-750);
// --main-surface-secondary-selected: hsla(0,0%,100%,.15);
// --main-surface-tertiary: var(--gray-700);
// --sidebar-surface-primary: var(--gray-900);
// --sidebar-surface-secondary: var(--gray-800);
// --sidebar-surface-tertiary: var(--gray-750);
// --sidebar-title-primary: hsla(0,0%,94%,.5);
// --sidebar-surface: #2b2b2b;
// --sidebar-body-primary: #ededed;
// --sidebar-icon: #a4a4a4;
// --surface-hover: hsla(0,0%,100%,.15);
// --link: #7ab7ff;
// --link-hover: #5e83b3;
// --surface-error: 249 58 55;
