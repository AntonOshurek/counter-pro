//FEATURES
import { ChangeNameField, GroupCounterSelectModal } from '../../features/group';
//UI
import { SettingsGroupWrapper } from '../../shared/wrappers';
//MODEL
import { GroupSettingsWidgetProps } from './model/group-settings-widget.model';
//STYLES
import style from './styles/style';

const GroupSettingsWidget = ({ group }: GroupSettingsWidgetProps) => {
	return (
		<SettingsGroupWrapper additionalClass={style.groupSettings}>
			<ChangeNameField groupId={group.id} groupName={group.name} />
			<GroupCounterSelectModal groupId={group.id} />
		</SettingsGroupWrapper>
	);
};

export default GroupSettingsWidget;
