//FEATURES
import {
	ChangeNameField,
	ChangeStepInput,
	DeleteCounterButton
} from '../../features/counter';
//UI
import { SettingsGroupWrapper } from '../../shared/wrappers';
//MODEL
import { CounterSettingsWidgetProps } from './model/sounter-setting-widget.model';
//STYLES
import style from './styles/style';

const CounterSettingsWidget = ({ counter }: CounterSettingsWidgetProps) => {
	return (
		<SettingsGroupWrapper additionalClass={style.counterSettings}>
			<DeleteCounterButton counterId={counter.id} />

			<ChangeNameField counterId={counter.id} counterName={counter.name} />

			<ChangeStepInput counterId={counter.id} currentStep={counter.step} />

			{/*<Paragraph contentType={'primary'} size={'medium'}>*/}
			{/*	{counter.group !== '' ? 'Change Group' : 'add to group'} {counter.group}*/}
			{/*</Paragraph>*/}
		</SettingsGroupWrapper>
	);
};

export default CounterSettingsWidget;
