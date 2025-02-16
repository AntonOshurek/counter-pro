//LAYOUTS
import { ScreenLayout } from '../layouts/';
//WIDGETS
import { HomeScreenControlsWidget, CounterListWidget } from '../../widgets';
//STYLES
import style from './styles/style';

const HomeScreen = () => {
	return (
		<ScreenLayout additionalClass={style.homeScreen} withoutPaddings={true}>
			<CounterListWidget />
			<HomeScreenControlsWidget />
		</ScreenLayout>
	);
};

export default HomeScreen;
