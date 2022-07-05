import React, {FC, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../Theme/Colors/Colors';
import FontFamily from '../../Theme/FontNames';

interface DropDownProps {
  data: string[];
  placeholder: string;
  setValue: (value: string) => void;
}

const DropDown: FC<DropDownProps> = ({data, placeholder, setValue}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [defaultValue, setDefaultValue] = useState<string>(placeholder);
  return (
    <View style={styles.mainView}>
      <TouchableOpacity
        onPress={() => {
          setIsVisible(previousState => !previousState);
        }}>
        <View style={styles.touchView}>
          <View style={styles.textStyle}>
            <Text>{defaultValue}</Text>
          </View>
          <View style={styles.iconView}>
            <Icon name="keyboard-arrow-down" size={17} color={Colors.BLACK} />
          </View>
        </View>
      </TouchableOpacity>
      {isVisible && (
        <View style={styles.bottomOuterView}>
          {data.map((element: string, index: number) => {
            return (
              <TouchableOpacity
                style={styles.valuesTextView}
                key={index.toString()}
                onPress={() => {
                  setDefaultValue(element);
                  setIsVisible(false);
                  setValue(element);
                }}>
                <Text style={styles.valueText}>{element}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: Colors.MEDIUM_GRAY,
    backgroundColor: Colors.WHITE,
    marginVertical: '2%',
  },
  touchView: {
    flexDirection: 'row',
    paddingVertical: '4%',
  },
  textStyle: {
    flex: 0.9,
    justifyContent: 'center',
    paddingLeft: '2%',
  },
  iconView: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomOuterView: {
    paddingHorizontal: '2%',
  },
  valuesTextView: {
    paddingVertical: '2%',
  },
  valueText: {
    fontSize: 16,
    fontFamily: FontFamily.regular,
  },
});

export default DropDown;
