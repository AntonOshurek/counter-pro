//NATIVE
import { View } from 'react-native';
//HOOKS
import UseThemeResolver from '../../../../shared/hooks/useThemeResolver';
//LIBS
import { truncateWithEllipsis } from '../../../../shared/lib/word-lib';
//CONSTANTS
import { symbolsAmountOnItemCard } from '../../../../shared/constants';
//MODEL
import { CounterCardProps } from './model/counter-card.model';
//UI
import Paragraph from '../../../../shared/ui/paragraph/paragraph';
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
				</OpenCounter>
			</View>

			<View style={s.controls}>
				<DecrementButton counterId={counter.id} />

				<OpenCounter counterId={counter.id} additionalClass={s.counterInfo}>
					<CounterValue counterId={counter.id} size={'small'} />

					<Paragraph contentType={'tertiary'} size={'xSmall'}>
						step {counter.step}
					</Paragraph>
				</OpenCounter>

				<IncrementButton counterId={counter.id} />
			</View>
		</View>
	);
};

export default CounterCard;
