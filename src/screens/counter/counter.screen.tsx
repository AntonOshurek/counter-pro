//NATIVE
import { useRoute } from '@react-navigation/native';
//NAVIGATION
import type { CounterScreenRouteProp } from '../../app/navigation/model/counter-top-tabs.model';
//LAYOUTS
import { ScreenLayout } from '../layouts';
//WIDGETS
import { CounterWidget } from '../../widgets';
//STYLES
import style from './styles/style';

const CounterScreen = () => {
	const route = useRoute<CounterScreenRouteProp>();
	const { counter } = route.params || {};

	return (
		<ScreenLayout additionalClass={style.CounterScreen} withoutPaddings={true}>
			<CounterWidget />
		</ScreenLayout>
	);
};

export default CounterScreen;
