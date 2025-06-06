import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../models/store.model';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
