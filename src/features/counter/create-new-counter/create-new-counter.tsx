//NAVIGATION
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationStackParams } from '../../../app/navigation/model';
//STORE
import { useAppDispatch } from '../../../shared/store';
import { CreateCounterAction } from '../../../entities/counter';
//CONSTANTS
import { StackScreens } from '../../../shared/constants';
//LIBS
import { v4 } from 'uuid';

const useCreateNewCounter = () => {
	const navigation = useNavigation<NativeStackNavigationProp<NavigationStackParams>>();

	const dispatch = useAppDispatch();

	return () => {
		const newCounter = {
			id: v4(),
			name: 'New Counter',
			step: 1,
			count: 0,
			group: ''
		};

		console.log('create counter', newCounter);

		dispatch(CreateCounterAction({ newCounter: newCounter }));
		navigation.navigate(StackScreens.CounterScreen, { counter: newCounter });
	};
};

export default useCreateNewCounter;
