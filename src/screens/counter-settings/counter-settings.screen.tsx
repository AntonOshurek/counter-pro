//NATIVE
import { useRoute } from '@react-navigation/native';
//NAVIGATION
import type { CounterScreenRouteProp } from '../../app/navigation/model/counter-top-tabs.model';
//STORE
import { useAppSelector } from '../../shared/store';
import { SelectorGetCounter } from '../../entities/counter';
//WIDGETS
import { CounterSettingsWidget } from '../../widgets';
//LAYOUTS
import { ScreenLayout } from '../layouts';
//STYLES
import style from './styles/style';

const CounterSettingsScreen = () => {
	const route = useRoute<CounterScreenRouteProp>();
	const { counterId } = route.params || {};

	const counter = useAppSelector(SelectorGetCounter(counterId));

	return (
		<ScreenLayout additionalClass={style.counterSettingsScreen}>
			<CounterSettingsWidget counter={counter} />
		</ScreenLayout>
	);
};

export default CounterSettingsScreen;
