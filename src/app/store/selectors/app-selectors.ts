//types
import type { Themes } from '../../../global/types/app';
import type { RootState } from '../model/store.model';

const SelectorGetTheme =
	() =>
	(state: RootState): Themes => {
		return state.app.theme;
	};

export { SelectorGetTheme };
