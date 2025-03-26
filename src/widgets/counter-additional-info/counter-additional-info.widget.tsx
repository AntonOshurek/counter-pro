//WRAPPERS
import { SettingsGroupWrapper } from '../../shared/wrappers';
//FEATURES
import { ChangePinnedSetting } from '../../features/counter';
//ENTITIES
import { CreatedDate } from '../../entities/counter';
//MODEL
import { CounterAdditionalInfoProps } from './model/counter-additional-info.model';
//STYLES
import { style } from './styles/style';

const CounterAdditionalInfoWidget = ({ counter }: CounterAdditionalInfoProps) => {
	return (
		<SettingsGroupWrapper additionalClass={style.counterAdditionalInfo}>
			<CreatedDate counterId={counter.id} />

			<ChangePinnedSetting counterId={counter.id} />
		</SettingsGroupWrapper>
	);
};

export default CounterAdditionalInfoWidget;
