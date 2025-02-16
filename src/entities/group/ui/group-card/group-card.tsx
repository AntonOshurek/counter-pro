//NATIVE
import { View } from 'react-native';
//HOOKS
import UseThemeResolver from '../../../../shared/hooks/useThemeResolver';
//UI
import Paragraph from '../../../../shared/ui/paragraph/paragraph';
//MODEL
import { GroupCardProps } from './group-card.model';
//STYLES
import style from './style';

const GroupCard = ({ group, OpenGroupScreenOpacity }: GroupCardProps) => {
	const theme = UseThemeResolver();
	const s = style(theme);

	return (
		<View style={[s.groupCard]}>
			<OpenGroupScreenOpacity group={group}>
				<Paragraph contentType={'primary'} size={'large'}>
					{group.name}
				</Paragraph>
				<Paragraph contentType={'tertiary'} size={'small'}>
					Counters: {group.counters.length}
				</Paragraph>
			</OpenGroupScreenOpacity>
		</View>
	);
};

export default GroupCard;
