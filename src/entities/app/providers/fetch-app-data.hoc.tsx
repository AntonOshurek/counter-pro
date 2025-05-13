import { ComponentType, useEffect } from 'react';
//STORE
import { useAppDispatch } from '@shared/store';
import { updateState } from '../store/actions/app.actions';
//REPOSITORY
import appRepository from '@entities/app/async-store/services/app-async-store.service';

const FetchAppDataHoc = <P extends object>(Component: ComponentType<P>) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		const fetchState = async () => {
			try {
				const state = await appRepository.getState();

				if (state instanceof Error) {
					console.error('Failed to load state:', state.message);
					return;
				}

				dispatch(updateState({ newState: state }));
			} catch (error) {
				console.error('Unexpected error in fetchState:', error);
			}
		};

		fetchState();
	}, [dispatch]);

	return (props: P) => {
		return <Component {...props} />;
	};
};
export default FetchAppDataHoc;
