import MinusButton from '../../../../../shaared/ui/minus-button/minus-button';

interface Props {
	decrement: () => void;
}

const DecrementButton = ({ decrement }: Props) => {
	return (
    <MinusButton onPress={decrement} hiddenText={'Minus'}></MinusButton>
	);
};

export default DecrementButton;
