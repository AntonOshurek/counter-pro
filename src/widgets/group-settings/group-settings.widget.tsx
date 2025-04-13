//STORE
import { useAppSelector } from '../../shared/store';
//FEATURES
import { ChangeNameField, GroupCounterSelectModal } from '../../features/group';
import { useCounterToGroupConnection } from '../../features/counter/';
//ENTITIES
import { SelectorGetCounters } from '../../entities/counter';
//UI
import { SettingsGroupWrapper } from '../../shared/wrappers';
//MODEL
import { GroupSettingsWidgetProps } from './model/group-settings-widget.model';
//STYLES
import style from './styles/style';
import { convertObjectToArray } from '../../shared/lib/convertObjectToArray';
import { checkboxModalItems } from '../../shared/ui/checkbox-modal/model/checlbox-modal.model';

const GroupSettingsWidget = ({ group }: GroupSettingsWidgetProps) => {
	const allCounters = useAppSelector(SelectorGetCounters());

	const groupCounters: checkboxModalItems[] = convertObjectToArray(allCounters)
		.filter(counter => counter.group === group.id || counter.group.length === 0)
		.map(counter => ({
			id: counter.id,
			label: counter.name,
			isSelected: counter.group === group.id
		}));

	return (
		<SettingsGroupWrapper additionalClass={style.groupSettings}>
			<ChangeNameField groupId={group.id} groupName={group.name} />
			<GroupCounterSelectModal
				groupId={group.id}
				counterToGroupConnection={useCounterToGroupConnection}
				counters={groupCounters}
			/>
		</SettingsGroupWrapper>
	);
};

export default GroupSettingsWidget;
