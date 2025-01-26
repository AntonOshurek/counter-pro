//LAYOUTS
import { ScreenLayout } from '../../layouts';
//WIDGETS
import { NewCounterWidget } from '../../widgest';
//STYLES
import style from './styles/style';

const CounterScreen = (): JSX.Element => {
	return (
		<ScreenLayout additionalClass={style.CounterScreen}>
			<NewCounterWidget />
		</ScreenLayout>
	);
};

export default CounterScreen;
