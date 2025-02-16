//NATIVE
import { View } from 'react-native';
//MODEL
import { CounterCardProps } from './model/counter-card.model';
//UI
import Paragraph from '../../../../shared/ui/paragraph/paragraph';
//STYLES
import style from './styles/style';

const CounterCard = ({ counter, IncrementButton, DecrementButton }: CounterCardProps) => {
	return (
		<View style={style.counterCard}>
			<View style={style.header}>
				<Paragraph contentType={'primary'} size={'medium'}>
					{counter.name}
				</Paragraph>
			</View>

			<View style={style.controls}>
				<DecrementButton counterId={counter.id} />

				<Paragraph contentType={'primary'} size={'large'}>
					{counter.count}
				</Paragraph>

				<IncrementButton counterId={counter.id} />
			</View>
		</View>
	);
};

export default CounterCard;
