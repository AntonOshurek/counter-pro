import { ComponentType, useEffect } from 'react';
import { useAppDispatch } from '../hooks/hooks';
import appRepository from '../../../services/app-repository/app-repository';
import { updateState } from '../actions/app-actions';

const FetchDataHoc = <P extends object>(Component: ComponentType<P>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchState = async () => {
      try {
        const state = await appRepository.getState();

        if (state instanceof Error) {
          console.error('Failed to load state:', state.message);
          return;
        }

        dispatch(updateState({newState: state})); // Обновляем Redux
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
export default FetchDataHoc;
