//NATIVE
import { useRoute } from '@react-navigation/native';
//NAVIGATION
import type { CounterScreenRouteProp } from '../../app/navigation/model/counter-top-tabs.model';
//STORE
import { SelectorGetCounter } from '../../entities/counter';
import { useAppSelector } from '../../shared/store';
//LAYOUTS
import { ScreenLayout } from '../layouts';
//WIDGETS
import { CounterWidget } from '@widgets/counter';
//STYLES
import style from './styles/style';

const CounterScreen = () => {
	const route = useRoute<CounterScreenRouteProp>();
	const { counterId } = route.params || {};

	const counter = useAppSelector(SelectorGetCounter(counterId));

	return (
		<ScreenLayout additionalClass={style.CounterScreen} withoutPaddings={true}>
			<CounterWidget counter={counter} />
		</ScreenLayout>
	);
};

export default CounterScreen;
