//FEATURES
import { DeleteCounterButton } from '@features/counter';
import { useGroupToCounterConnection } from '@features/group';
//WRAPPERS
import { SettingsGroupWrapper } from '@shared/wrappers';
//MODEL
import type { CounterCriticalOptionsProps } from './model/counter-critical-options.model';
//styles
import style from './styles/style';

const CounterCriticalOptionsWidget = ({ counter }: CounterCriticalOptionsProps) => {
	return (
		<SettingsGroupWrapper additionalClass={style.counterCrucialOptions}>
			<DeleteCounterButton
				counterId={counter.id}
				groupToCounterConnection={useGroupToCounterConnection}
			/>
		</SettingsGroupWrapper>
	);
};

export default CounterCriticalOptionsWidget;
