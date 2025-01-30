//REACT
import { ComponentType, useEffect } from 'react';
//STORE
import { useAppDispatch } from '../../shaared/store/hooks/hooks';
import { updateState } from '../store/actions/app-actions';
//REPOSITORY
import appRepository from '../../services/app-repository/app-repository';

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
