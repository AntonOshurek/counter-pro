import { StyleSheet } from 'react-native';
//TYPES
import { ColorThemes } from '../../../../entities/theme/';
//COLORS
import { colors } from '../../../styles';

const style = (theme: ColorThemes) => StyleSheet.create({
  switcher: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    color: colors[theme].textPrimary,
    textTransform: 'capitalize',
    fontSize: 16
  }
});

export default style;



// --user-chat-width: 70%;
// --sidebar-inline-padding: 12px;
// --sidebar-mask: linear-gradient(90deg,#000,#000 84%,transparent 89%,transparent);
// --white: #fff;
// --black: #000;
// --gray-50: #f9f9f9;
// --gray-100: #ececec;
// --gray-200: #e3e3e3;
// --gray-300: #cdcdcd;
// --gray-400: #b4b4b4;
// --gray-500: #9b9b9b;
// --gray-600: #676767;
// --gray-700: #424242;
// --gray-750: #2f2f2f;
// --gray-800: #212121;
// --gray-900: #171717;
// --gray-950: #0d0d0d;
// --red-500: #ef4444;
// --red-700: #b91c1c;
// --brand-purple: #ab68ff;
// --yellow-900: #927201;
