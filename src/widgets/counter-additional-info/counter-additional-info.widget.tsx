//WRAPPERS
import { SettingsGroupWrapper } from '../../shared/wrappers';
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
		</SettingsGroupWrapper>
	);
};

export default CounterAdditionalInfoWidget;
