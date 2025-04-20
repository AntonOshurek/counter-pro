//MODEL
import type { ISelectorGetTheme } from '@entities/app/store/model/selectors.model';
//TYPES
import type { RootState } from '@shared/store';

const SelectorGetTheme: ISelectorGetTheme = () => (state: RootState) => {
	return state.app.theme;
};

export { SelectorGetTheme };
