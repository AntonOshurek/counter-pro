//NATIVE
import { View } from 'react-native';
//LIBS
//TYPES
import type { ScreenLayoutProps } from './model/screen-layout.model';
//STYLES
import style from './styles/style';
import useThemeResolver from '../../shaared/hooks/useThemeResolver';

const ScreenLayout = ({ children, additionalClass }: ScreenLayoutProps): JSX.Element => {
  const theme = useThemeResolver();
  const s = style(theme);

	return <View style={[s.ScreenLayout, additionalClass]}>{children}</View>;
};

export default ScreenLayout;
