import React, {FC} from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import Colors from '../../Theme/Colors/Colors';

interface Props {
  placeholder: string;
  setValue: (value: string) => void;
  isMultiLine?: boolean;
  value?: string;
  isNumeric?: boolean;
}

const TextField: FC<Props> = ({
  placeholder,
  setValue,
  isMultiLine,
  value,
  isNumeric,
}) => {
  const multiLineStyle: StyleProp<TextStyle> = {
    textAlignVertical: 'top',
  };
  const height: StyleProp<ViewStyle> = {
    height: 100,
  };
  return (
    <View style={styles.mainView}>
      <TextInput
        style={[
          styles.textInput,
          isMultiLine && multiLineStyle,
          isMultiLine && height,
        ]}
        placeholder={placeholder}
        onChangeText={text => {
          const val = isNumeric ? text.replace(/[^0-9]/g, '') : text;
          setValue(val);
        }}
        multiline={isMultiLine}
        value={value}
        keyboardType={isNumeric ? 'number-pad' : 'default'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: Colors.MEDIUM_GRAY,
    backgroundColor: Colors.WHITE,
    paddingHorizontal: '2%',
  },
  mainView: {
    marginVertical: '2%',
  },
});

export default TextField;
