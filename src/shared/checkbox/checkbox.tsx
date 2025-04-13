import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

type Props = {
  value: boolean;
  onChange: () => void;
  size?: number;
  color?: string;
};

const CustomCheckbox: React.FC<Props> = ({ value, onChange, size = 24, color = '#007aff' }) => {
  return (
    <TouchableOpacity onPress={onChange} style={[styles.box, { width: size, height: size }]}>
      {value && <View style={[styles.inner, { backgroundColor: color }]} />}
    </TouchableOpacity>
  );
};

export default CustomCheckbox;

const styles = StyleSheet.create({
  box: {
    borderWidth: 2,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginRight: 8,
  },
  inner: {
    width: '60%',
    height: '60%',
    borderRadius: 2,
  },
});
