//NATIVE
import { View } from 'react-native';
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
	return (
		<View style={style.counterCard}>
			<View style={style.header}>
				<OpenCounter counter={counter}>
					<Paragraph contentType={'primary'} size={'medium'}>
						{counter.name}
					</Paragraph>
				</OpenCounter>
			</View>

			<View style={style.controls}>
				<DecrementButton counterId={counter.id} />

				<View style={style.openCounter}>
					<OpenCounter counter={counter}>
						<CounterValue counterId={counter.id} size={'small'} />
					</OpenCounter>
				</View>

				<IncrementButton counterId={counter.id} />
			</View>
		</View>
	);
};

export default CounterCard;
