import { RootState } from '@shared/store';
import type { AppThemes } from '@shared/types';

interface ISelectorGetTheme {
	(): (state: RootState) => AppThemes;
}

export { ISelectorGetTheme };
