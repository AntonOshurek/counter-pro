//NATIVE
import { StatusBar } from 'expo-status-bar';
//NAVIGATION
import Navigation from './navigation/navigation';
import FetchAppStoreHoc from './providers/fetch-app-store.hoc';
//HOOKS
// import UseThemeResolver from '../shaared/hooks/useThemeResolver';
//STYLES
// import { colors } from '../shaared/styles';

export default function App() {
	const FetchedStore = FetchAppStoreHoc(Navigation);
	// const theme = UseThemeResolver();

	return (
		<>
			{/*<StatusBar style={theme === 'dark' ? 'light' : 'dark'} backgroundColor={colors[theme].mainSurfacePrimary} translucent={true} />*/}
			<StatusBar style={'dark'}/>
      <FetchedStore />
		</>
	);
}
