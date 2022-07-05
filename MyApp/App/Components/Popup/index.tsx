import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Colors from '../../Theme/Colors/Colors';
import FontFamily from '../../Theme/FontNames';

interface PopupProps {
  showPopup: (value: boolean) => void;
  onOkayPress: () => void;
  text: string;
}

const Popup: FC<PopupProps> = ({onOkayPress, showPopup, text}) => {
  return (
    <View style={styles.outerBlackView}>
      <View style={styles.innerMainView}>
        <Text style={styles.mainText}>{text}</Text>
        <View style={styles.buttonView}>
          <TouchableOpacity
            onPress={() => showPopup(false)}
            style={styles.leftButtonView}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onOkayPress();
              showPopup(false);
            }}>
            <Text style={styles.buttonText}>Okay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontFamily: FontFamily.semiBold,
    fontSize: 16,
    color: Colors.NAVY_BLUE_COLOR,
  },
  outerBlackView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.TRANSPARENT_BLACK,
    zIndex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerMainView: {
    backgroundColor: Colors.WHITE,
    width: '80%',
    padding: '5%',
    borderRadius: 5,
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: '8%',
  },
  leftButtonView: {
    marginRight: '10%',
  },
  mainText: {
    fontFamily: FontFamily.medium,
    fontSize: 18,
  },
});

export default Popup;
