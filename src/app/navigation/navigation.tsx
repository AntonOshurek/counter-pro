//NAVIGATION
import { NavigationContainer } from '@react-navigation/native';
import Stack from './stack';
import Drawer from './drawer';

const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack DrawerNavigation={Drawer} />
		</NavigationContainer>
	);
};

export default Navigation;
