import { ISetNewThemeAction } from './model/actions.model';
import { AppThemes, ColorThemes } from './model/theme.model';
import { SetNewThemeAction } from './store/theme-actions';
import { SelectorGetTheme } from './store/theme-selectors';

export { AppThemes, ColorThemes, SetNewThemeAction, SelectorGetTheme, ISetNewThemeAction };
