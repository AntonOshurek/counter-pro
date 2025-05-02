import { ComponentType, useEffect } from 'react';
//STORE
import { useAppDispatch } from '@shared/store/';
import { updateState } from '@entities/app/';
//REPOSITORY
import appRepository from '@entities/app/store/repository/app-repository';

const FetchAppStoreHoc = <P extends object>(Component: ComponentType<P>) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		(() => async () => {
			try {
				const state = await appRepository.getState();

				if (state instanceof Error) {
					//dispatch this error
					console.error('Failed to load state:', state.message);
					return;
				}

				dispatch(updateState({ newState: state }));
			} catch (error) {
				//dispatch this error
				console.error('Unexpected error in fetchState:', error);
			}
		})();
	}, [dispatch]);

	return (props: P) => {
		return <Component {...props} />;
	};
};
export default FetchAppStoreHoc;
