//NATIVE
import { Text, View } from 'react-native';
//UI
import Count from '../../shaared/ui/count/count';
//STYLES
// import style from './styles/style';

const CounterWidget = () => {
	return (
		<>
      <Count count={5}/>

			{/*<View>*/}
			{/*	<Text>counter controls</Text>*/}
			{/*</View>*/}
		</>
	);
};

export default CounterWidget;
