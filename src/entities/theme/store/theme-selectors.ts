//types
import type { RootState } from '../../../shared/store/';
import type { AppThemes } from '../model/theme.model';

const SelectorGetTheme =
	() =>
	(state: RootState): AppThemes => {
		return state.app.theme;
	};

export { SelectorGetTheme };
