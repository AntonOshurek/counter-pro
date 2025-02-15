//LAYOUTS
import { ScreenLayout } from '../layouts';
//WIDGETS
import { CounterWidget } from '../../widgets';
//STYLES
import style from './styles/style';

const CounterScreen = () => {
	return (
		<ScreenLayout additionalClass={style.CounterScreen} withoutPaddings={true}>
			<CounterWidget />
		</ScreenLayout>
	);
};

export default CounterScreen;
