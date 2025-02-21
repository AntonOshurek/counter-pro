//NATIVE
import { StyleSheet } from 'react-native';
//TYPES
import type { ColorThemes } from '../../../../../../entities/theme';
//styles
import { colors } from '../../../../../../shared/styles';

const style = (theme: ColorThemes) =>
	StyleSheet.create({
		changeNameField: {
			// borderWidth: 1,
			// borderColor: 'tomato',
			gap: 5
		},
		input: {
			paddingHorizontal: 16,
			// paddingVertical: 16,
			color: colors[theme].textPrimary,
      fontSize: 16,
      borderRadius: 16,
      backgroundColor: colors[theme].mainSurfaceSecondary,
      // iOS тень
      shadowColor: colors[theme].shadowColor,
      shadowOffset: { width: 8, height: 8 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      // Android тень
      elevation: 8,
		}
	});

export default style;
