import { RootState } from '@shared/store';
import type { AppThemes } from '@shared/types';

interface ISelectorGetTheme {
	(counterId: string): (state: RootState) => AppThemes;
}

export { ISelectorGetTheme };
