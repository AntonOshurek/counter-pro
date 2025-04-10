//FEATURES

//UI
import { SettingsGroupWrapper } from '../../shared/wrappers';
import Paragraph from '../../shared/ui/paragraph/paragraph';
//MODEL
import { GroupSettingsWidgetProps } from './model/group-settings-widget.model';
//STYLES
import style from './styles/style';

const GroupSettingsWidget = ({ group }: GroupSettingsWidgetProps) => {
	return (
		<SettingsGroupWrapper additionalClass={style.groupSettings}>
			<Paragraph contentType={'primary'} size={'medium'}>
				{group.name}
			</Paragraph>

			{/*<ChangeNameField counterId={group.id} counterName={group.name} />*/}
		</SettingsGroupWrapper>
	);
};

export default GroupSettingsWidget;
