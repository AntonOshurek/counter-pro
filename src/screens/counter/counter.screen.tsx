//LAYOUTS
import { ScreenLayout } from '../../layouts';
//WIDGETS
import { NewCounterWidget } from '../../widgets';
//STYLES
import style from './styles/style';

const CounterScreen = () => {
	return (
		<ScreenLayout additionalClass={style.CounterScreen}>
			<NewCounterWidget />
		</ScreenLayout>
	);
};

export default CounterScreen;
