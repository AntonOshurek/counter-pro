//LAYOUTS
import { ScreenLayout } from '@shared/layouts/';
//WIDGETS
import { HomeScreenControlsWidget } from '@widgets/app';
import { CounterListWidget } from '@widgets/counter';
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
