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

const GroupSettingsWidget = ({ group }: GroupSettingsWidgetProps) => {
	const allCounters = useAppSelector(SelectorGetCounters());

	const groupCounters = convertObjectToArray(allCounters)
		.filter(counter => counter.group === group.id)
		.map(counter => ({
			counterId: counter.id,
			counterName: counter.name
		}));

	return (
		<SettingsGroupWrapper additionalClass={style.groupSettings}>
			<ChangeNameField groupId={group.id} groupName={group.name} />
			<GroupCounterSelectModal
				groupId={group.id}
				useCounterConnection={useCounterToGroupConnection}
				counters={groupCounters}
			/>
		</SettingsGroupWrapper>
	);
};

export default GroupSettingsWidget;
