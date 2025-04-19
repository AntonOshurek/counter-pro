//NATIVE
import { View } from 'react-native';
//HOOKS
import UseThemeResolver from '@shared/hooks/useThemeResolver';
//LIBS
import { truncateWithEllipsis } from '@shared/lib/word-lib';
//CONSTANTS
import { symbolsAmountOnItemCard } from '@shared/constants';
//MODEL
import type { CounterCardProps } from './model/counter-card.model';
//UI
import { Paragraph } from '@shared/ui';
import CounterStep from '../counter-step/counter-step';
//ICONS
import KeepIcon from '@shared/icons/keep-icon';
//STYLES
import style from './styles/style';

const CounterCard = ({
	counter,
	CounterValue,
	IncrementButton,
	DecrementButton,
	OpenCounter
}: CounterCardProps) => {
	const theme = UseThemeResolver();
	const s = style(theme);

	return (
		<View style={s.counterCard}>
			<View style={s.header}>
				<OpenCounter counterId={counter.id} additionalClass={s.touchableHeader}>
					<Paragraph contentType={'primary'} size={'medium'}>
						{truncateWithEllipsis(counter.name, symbolsAmountOnItemCard)}
					</Paragraph>
					{counter.isPinned && <KeepIcon width={15} height={15} />}
				</OpenCounter>
			</View>

			<View style={s.controls}>
				<DecrementButton counterId={counter.id} />

				<OpenCounter counterId={counter.id} additionalClass={s.counterInfo}>
					<CounterValue counterId={counter.id} size={'small'} />

					<CounterStep counterId={counter.id} />
				</OpenCounter>

				<IncrementButton counterId={counter.id} />
			</View>
		</View>
	);
};

export default CounterCard;
