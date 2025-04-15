//FEATURES
import {
	ChangeNameField,
	ChangeStepInput,
	ResetCounterButton,
	CounterGroupSelectModal
} from '../../features/counter';
import { useGroupToCounterConnection } from '../../features/group';
//ENTITIES
import { SelectorGetGroups } from '../../entities/group';
//UI
import { SettingsGroupWrapper } from '../../shared/wrappers';
import Paragraph from '../../shared/ui/paragraph/paragraph';
//MODEL
import { CounterSettingsWidgetProps } from './model/counter-setting-widget.model';
//STYLES
import style from './styles/style';
import { useAppSelector } from '../../shared/store';
import { convertObjectToArray } from '../../shared/lib/convertObjectToArray';

const CounterSettingsWidget = ({ counter }: CounterSettingsWidgetProps) => {
	const groups = convertObjectToArray(useAppSelector(SelectorGetGroups()));
	const transformedGroups = groups.map(group => ({
		id: group.id,
		label: group.name,
		isSelected: counter.group === group.id
	}));

	return (
		<SettingsGroupWrapper additionalClass={style.counterSettings}>
			<ResetCounterButton counterId={counter.id} />

			<ChangeNameField counterId={counter.id} counterName={counter.name} />

			<ChangeStepInput counterId={counter.id} currentStep={counter.step} />

			<CounterGroupSelectModal
				counter={counter}
				groups={transformedGroups}
				groupToCounterConnection={useGroupToCounterConnection}
			/>

			<Paragraph contentType={'primary'} size={'medium'}>
				{counter.group !== '' ? 'Change Group' : 'add to group'} {counter.group}
			</Paragraph>
		</SettingsGroupWrapper>
	);
};

export default CounterSettingsWidget;
