//types
import { Themes } from '../../../global/types/app';
import type { RootState } from '../../../global/types/store';

const SelectorGetTheme =
	() =>
	(state: RootState): Themes => {
		return state.app.theme;
	};

export { SelectorGetTheme };
