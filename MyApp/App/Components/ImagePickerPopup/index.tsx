import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../Theme/Colors/Colors';
import FontFamily from '../../Theme/FontNames';
import ImagePicker from 'react-native-image-crop-picker';

interface PickerProps {
  setShowPopup: (val: boolean) => void;
  setGroupImage: (val: string) => void;
}

const ImagePickerPopup: FC<PickerProps> = ({setShowPopup, setGroupImage}) => {
  const openImagePicker = () => {
    ImagePicker.openPicker({
      width: 100,
      height: 100,
      mediaType: 'photo',
      cropping: true,
    })
      .then(image => {
        setShowPopup(false);
        setGroupImage(image.path);
      })
      .catch(err => console.log('user cancelled', err));
  };

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 100,
      height: 100,
      mediaType: 'photo',
      cropping: true,
    })
      .then(image => {
        setShowPopup(false);
        setGroupImage(image.path);
      })
      .catch(err => console.log(err));
  };

  return (
    <View style={styles.outerBlackView}>
      <View style={styles.innerMainView}>
        <View style={styles.upperView}>
          <Text style={styles.titleText}>Choose from</Text>
          <TouchableOpacity onPress={() => setShowPopup(false)}>
            <Icon name="close" size={25} color={Colors.BLACK} />
          </TouchableOpacity>
        </View>
        <View style={styles.lowerView}>
          <TouchableOpacity onPress={openCamera}>
            <View style={styles.alignCenter}>
              <Icon
                name="camera-alt"
                size={30}
                color={Colors.NAVY_BLUE_COLOR}
              />
              <Text style={styles.buttonText}>Camera</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={openImagePicker}>
            <View style={styles.alignCenter}>
              <Icon name="photo" size={30} color={Colors.NAVY_BLUE_COLOR} />
              <Text style={styles.buttonText}>Gallery</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontFamily: FontFamily.medium,
    fontSize: 20,
    color: Colors.BLACK,
    marginTop: 10,
  },
  titleText: {
    fontFamily: FontFamily.medium,
    fontSize: 18,
    color: Colors.BLACK,
  },
  outerBlackView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.TRANSPARENT_BLACK,
    zIndex: 3,
  },
  innerMainView: {
    position: 'absolute',
    backgroundColor: Colors.WHITE,
    width: '100%',
    padding: '5%',
    borderRadius: 5,
    bottom: 0,
  },
  upperView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lowerView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: '5%',
  },
  alignCenter: {
    alignItems: 'center',
  },
});

export default ImagePickerPopup;
