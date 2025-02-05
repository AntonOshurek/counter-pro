//NATIVE
import { View, Text } from 'react-native';
import { SettingsGroupLayout } from '../../layouts';

const SystemSettingsWidget = () => {
	return (
		<View>
			<SettingsGroupLayout>
				<Text>Settings</Text>
			</SettingsGroupLayout>
		</View>
	);
};

export default SystemSettingsWidget;
