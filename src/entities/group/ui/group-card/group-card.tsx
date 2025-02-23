//NATIVE
import { View } from 'react-native';
//LIBS
import { truncateWithEllipsis } from '../../../../shared/lib/word-lib';
//CONSTANTS
import { symbolsAmountOnItemCard } from '../../../../shared/constants';
//UI
import Paragraph from '../../../../shared/ui/paragraph/paragraph';
//MODEL
import { GroupCardProps } from './group-card.model';
//ICONS
import KeepIcon from '../../../../shared/icons/keep-icon';
//STYLES
import style from './style';

const GroupCard = ({ group, OpenGroupScreenOpacity, children }: GroupCardProps) => {
	return (
		<View style={[style.groupCard]}>
			<View style={style.cardHeader}>
				<OpenGroupScreenOpacity group={group} additionalStyles={style.cardTitle}>
					<Paragraph contentType={'primary'} size={'large'}>
						{truncateWithEllipsis(group.name, symbolsAmountOnItemCard)}
					</Paragraph>
					<Paragraph contentType={'tertiary'} size={'xSmall'}>
						Counters: {group.counters.length}
					</Paragraph>
				</OpenGroupScreenOpacity>

				<Paragraph contentType={'secondary'} size={'large'}>
					<KeepIcon width={30} height={30} />
				</Paragraph>
			</View>

			{children && children}
		</View>
	);
};

export default GroupCard;
