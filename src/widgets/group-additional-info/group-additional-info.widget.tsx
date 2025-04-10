//WRAPPERS
import SettingsGroupWrapper from '../../shared/wrappers/settings-group/settings-group.wrapper';
//ENTITIES
import { CreatedDate } from '../../entities/group/';
//MODEL
import type { GroupAdditionalInfoProps } from './model/group-additional-info.model';
//STYLES
import { style } from './styles/style';

const GroupAdditionalInfoWidget = ({ group }: GroupAdditionalInfoProps) => {
	return (
		<SettingsGroupWrapper additionalClass={style.groupAdditionalInfo}>
			<CreatedDate groupId={group.id} />
		</SettingsGroupWrapper>
	);
};

export default GroupAdditionalInfoWidget;
