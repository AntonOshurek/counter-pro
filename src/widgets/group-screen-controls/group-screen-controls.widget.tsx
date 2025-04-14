//NATIVE
import { View } from 'react-native';
//STORE
import { useAppSelector } from '../../shared/store';
//ENTITIES
import { SelectorGetCounters } from '../../entities/counter';
import { SelectorGetGroup } from '../../entities/group';
//FEATURES
import { OpenGroupToCounterModalButton } from '../../features/group';
import { useCounterToGroupConnection } from '../../features/counter';
//LIBS
import { convertObjectToArray } from '../../shared/lib/convertObjectToArray';
//MODEL
import type { GroupScreenControlsProps } from './model/group-screen-controls.model';
import type { checkboxModalItems } from '../../shared/ui/checkbox-modal/model/checlbox-modal.model';
//STYLES
import style from './style/style';

const GroupScreenControlsWidget = ({ groupId }: GroupScreenControlsProps) => {
	const group = useAppSelector(SelectorGetGroup(groupId));
	const allCounters = useAppSelector(SelectorGetCounters());

	const groupCounters: checkboxModalItems[] = convertObjectToArray(allCounters)
		.filter(counter => counter.group === group.id || counter.group.length === 0)
		.map(counter => ({
			id: counter.id,
			label: counter.name,
			isSelected: counter.group === group.id
		}));

	return (
		<View style={style.groupScreenControlsWidget}>
			<OpenGroupToCounterModalButton
				groupId={group.id}
				counters={groupCounters}
				counterToGroupConnection={useCounterToGroupConnection}
			/>
		</View>
	);
};

export default GroupScreenControlsWidget;
