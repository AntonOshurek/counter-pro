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
import { createNewCounterTitleDate } from '../../../shared/lib/date-lib';

const useCreateNewCounter = () => {
	const navigation = useNavigation<NativeStackNavigationProp<NavigationStackParams>>();
	const dispatch = useAppDispatch();

	return () => {
		const now = new Date();

		const newCounter = {
			id: v4(),
			name: `New Counter ${createNewCounterTitleDate()}`,
			step: 1,
			count: 0,
			group: '',
			isPinned: false,
			createdAt: now.toISOString(),
			createdAtTimestamp: now.getTime()
		};

		dispatch(CreateCounterAction({ newCounter }));
		navigation.navigate(StackScreens.CounterScreen, { counterId: newCounter.id });
	};
};

export default useCreateNewCounter;
