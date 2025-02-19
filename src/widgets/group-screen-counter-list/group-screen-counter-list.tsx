//NATIVE
import { View } from 'react-native';
//UI
import Paragraph from '../../shared/ui/paragraph/paragraph';
//MODEL
import type { GroupScreenCounterListProps } from './model/group-screen-counter-list.model';

const GroupScreenCounterListWidget = ({ group }: GroupScreenCounterListProps) => {
	return (
		<View>
			<Paragraph size={'large'} contentType={'primary'}>
				Group item screen {group.name}
			</Paragraph>
		</View>
	);
};

export default GroupScreenCounterListWidget;
