import { useCallback } from 'react';
//STORE
import { useAppDispatch } from '../../../shared/store';
//ENTITIES
import { AppThemes, SetNewThemeAction } from '../../../entities/theme';

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
