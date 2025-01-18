//NATIVE
import { View } from 'react-native';
//LIBS
//TYPES
import type { ScreenLayoutProps } from './model/screen-layout.model';
//STYLES
import style from './styles/style';

const ScreenLayout = ({ children, additionalClass }: ScreenLayoutProps): JSX.Element => {
	return <View style={[style.ScreenLayout, additionalClass]}>{children}</View>;
};

export default ScreenLayout;
