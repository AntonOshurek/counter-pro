//types
import type { RootState } from '@shared/store';
import type { AppThemes } from '@shared/types';

const SelectorGetTheme =
	() =>
	(state: RootState): AppThemes => {
		return state.app.theme;
	};

export { SelectorGetTheme };
