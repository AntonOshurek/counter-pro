//NAVIGATION
import { NavigationContainer } from '@react-navigation/native';
import Stack from './stack';
import BottomTabs from './bottom-tabs';

const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack BottomTabsNavigation={BottomTabs} />
		</NavigationContainer>
	);
};

export default Navigation;
