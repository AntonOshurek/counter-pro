//UI
import { SettingsGroupWrapper } from '../../shared/wrappers';
import Paragraph from '../../shared/ui/paragraph/paragraph';
//Model
import { CounterSettingsWidgetProps } from './model/sounter-setting-widget.model';
//STYLES
import style from './styles/style';

const CounterSettingsWidget = ({ counter }: CounterSettingsWidgetProps) => {
	return (
		<SettingsGroupWrapper additionalClass={style.counterSettings}>
			<Paragraph contentType={'primary'} size={'medium'}>
				change name {counter.name}
			</Paragraph>

      <Paragraph contentType={'primary'} size={'medium'}>
        change step {counter.step}
      </Paragraph>
      
      <Paragraph contentType={'primary'} size={'medium'}>
        {counter.group !== '' ? 'Change Group' : 'add to group'} {counter.group}
      </Paragraph>
		</SettingsGroupWrapper>
	);
};

export default CounterSettingsWidget;
