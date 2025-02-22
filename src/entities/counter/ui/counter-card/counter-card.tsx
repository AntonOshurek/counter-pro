//NATIVE
import { View } from 'react-native';
//HOOKS
import UseThemeResolver from '../../../../shared/hooks/useThemeResolver';
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
				<OpenCounter counterId={counter.id}>
					<Paragraph contentType={'primary'} size={'medium'}>
						{counter.name}
					</Paragraph>
				</OpenCounter>
			</View>

			<View style={s.controls}>
				<DecrementButton counterId={counter.id} />

				<View style={s.openCounter}>
					<OpenCounter counterId={counter.id}>
						<CounterValue counterId={counter.id} size={'small'} />
					</OpenCounter>
				</View>

				<IncrementButton counterId={counter.id} />
			</View>
		</View>
	);
};

export default CounterCard;
