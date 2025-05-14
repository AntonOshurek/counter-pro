import { ReactNode, useEffect } from 'react';
// STORE
import { useAppDispatch } from '@shared/store';
import { updateState } from '../store/actions/app.actions';
// REPOSITORY
import appRepository from '@entities/app/async-store/services/app-async-store.service';

interface Props {
	children: ReactNode;
}

const FetchAppDataProvider = ({ children }: Props) => {
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
				console.error('Unexpected error in fetchAppState:', error);
			}
		};

		fetchState();
	}, [dispatch]);

	return <>{children}</>;
};

export default FetchAppDataProvider;
