//WRAPPERS
import { SettingsGroupWrapper } from '@shared/wrappers';
//FEATURES
import { DeleteGroupButton } from '@features/group';
//MODEL
import type { GroupCriticalOptionsProps } from './model/group-critical-options.model';
//styles
import style from './styles/style';

const GroupCriticalOptionsWidget = ({ group }: GroupCriticalOptionsProps) => {
	return (
		<SettingsGroupWrapper additionalClass={style.counterCrucialOptions}>
			<DeleteGroupButton groupId={group.id} />
		</SettingsGroupWrapper>
	);
};

export default GroupCriticalOptionsWidget;
