//LAYOUTS
import { ScreenLayout } from '../../layouts';
//WIDGETS
import { NewCounterWidget } from '../../widgest';
//STYLES
import style from './styles/style';

const NewCounterScreen = (): JSX.Element => {
	return (
		<ScreenLayout additionalClass={style.newCounterScreen}>
			<NewCounterWidget />
		</ScreenLayout>
	);
};

export default NewCounterScreen;
