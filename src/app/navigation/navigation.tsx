//NAVIGATION
import { NavigationContainer } from '@react-navigation/native';
import Stack from './stack';
//STORE
import FetchDataHoc from '../store/HOC/fetch-data.hoc';

const Navigation = () => {
  const FetchedStore = FetchDataHoc(Stack);

	return (
		<NavigationContainer>
			<FetchedStore />
		</NavigationContainer>
	);
};

export default Navigation;
