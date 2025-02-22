//FEATURES
import { DeleteCounterButton } from '../../features/counter';
//WRAPPERS
import { SettingsGroupWrapper } from '../../shared/wrappers';
//MODEL
import type { CounterCriticalOptionsProps } from './model/counter-critical-options.model';
//styles
import style from './styles/style';

const CounterCriticalOptionsWidget = ({ counter }: CounterCriticalOptionsProps) => {
	return (
		<SettingsGroupWrapper additionalClass={style.counterCrucialOptions}>
			<DeleteCounterButton counterId={counter.id} />
		</SettingsGroupWrapper>
	);
};

export default CounterCriticalOptionsWidget;
