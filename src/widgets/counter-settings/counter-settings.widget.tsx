//FEATURES
import {
	ChangeNameField,
	ChangeStepInput,
	ResetCounterButton
} from '../../features/counter';
//UI
import { SettingsGroupWrapper } from '../../shared/wrappers';
import Paragraph from '../../shared/ui/paragraph/paragraph';
//MODEL
import { CounterSettingsWidgetProps } from './model/counter-setting-widget.model';
//STYLES
import style from './styles/style';

const CounterSettingsWidget = ({ counter }: CounterSettingsWidgetProps) => {
	return (
		<SettingsGroupWrapper additionalClass={style.counterSettings}>
			<ResetCounterButton counterId={counter.id} />

			<ChangeNameField counterId={counter.id} counterName={counter.name} />

			<ChangeStepInput counterId={counter.id} currentStep={counter.step} />

			<Paragraph contentType={'primary'} size={'medium'}>
				{counter.group !== '' ? 'Change Group' : 'add to group'} {counter.group}
			</Paragraph>
		</SettingsGroupWrapper>
	);
};

export default CounterSettingsWidget;
