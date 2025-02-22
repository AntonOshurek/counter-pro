//FEATURES
import { DeleteCounterButton } from '../../features/counter';
//WRAPPERS
import { SettingsGroupWrapper } from '../../shared/wrappers';
//MODEL
import type { CounterSettingsControlsProps } from './model/counter-settings-controls.model';
//styles
import style from './styles/style';

const CounterSettingsControlsWidget = ({ counter }: CounterSettingsControlsProps) => {
	return (
		<SettingsGroupWrapper additionalClass={style.counterSettingsControls}>
			<DeleteCounterButton counterId={counter.id} />
		</SettingsGroupWrapper>
	);
};

export default CounterSettingsControlsWidget;
