//NATIVE
import { Switch } from 'react-native';

interface IThemeProps {
  value: string;
  onChange: (value: string) => void;
  isChecked: boolean
}

const Switcher = ({onChange, value, isChecked}: IThemeProps) => {
  return (
    <Switch
      trackColor={{ false: '#767577', true: '#81b0ff' }}
      thumbColor={isChecked ? '#f5dd4b' : '#f4f3f4'}
      ios_backgroundColor='#3e3e3e'
      onValueChange={() => onChange(value)}
      value={isChecked}
    />
  )
}

export default Switcher;
