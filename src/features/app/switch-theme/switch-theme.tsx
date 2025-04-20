import { useCallback } from 'react';
//STORE
import { useAppDispatch } from '@shared/store';
//ENTITIES
import { SetNewThemeAction } from '@entities/app';
//TYPES
import type { AppThemes } from '@shared/types';

const useSwitchTheme = () => {
	const dispatch = useAppDispatch();

	return useCallback(
		(newTheme: AppThemes) => {
			dispatch(SetNewThemeAction({ newTheme }));
		},
		[dispatch]
	);
};

export default useSwitchTheme;
