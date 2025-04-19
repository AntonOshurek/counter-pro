//NATIVE
import { View } from 'react-native';
//LIBS
import { truncateWithEllipsis } from '@shared/lib/word-lib';
//CONSTANTS
import { symbolsAmountOnItemCard } from '@shared/constants';
//UI
import Paragraph from '@ui/paragraph/paragraph';
//MODEL
import type { GroupCardProps } from './model/group-card.model';
//STYLES
import style from './styles/style';

const GroupCard = ({
	group,
	OpenGroupScreenOpacity,
	children,
	controls
}: GroupCardProps) => {
	return (
		<View style={[style.groupCard]}>
			<View style={style.cardHeader}>
				<OpenGroupScreenOpacity groupId={group.id} additionalStyles={style.cardTitle}>
					<Paragraph contentType={'primary'} size={'large'}>
						{truncateWithEllipsis(group.name, symbolsAmountOnItemCard)}
					</Paragraph>
					<Paragraph contentType={'tertiary'} size={'xSmall'}>
						Counters: {group.counters.length}
					</Paragraph>
				</OpenGroupScreenOpacity>

				{controls}
			</View>

			{children && children}
		</View>
	);
};

export default GroupCard;
