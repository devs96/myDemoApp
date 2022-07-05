import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import FontFamily from '../../Theme/FontNames';
import Colors from '../../Theme/Colors/Colors';

interface DetailUpperViewProps {
  image: string | undefined;
  name: string | undefined;
  designation?: string | undefined;
  location?: string | undefined;
}

const DetailUpperView: FC<DetailUpperViewProps> = ({
  image,
  name,
  designation,
  location,
}) => {
  return (
    <>
      <View style={styles.upperMainView}>
        <View style={styles.personImageView}>
          <Image source={{uri: image}} style={styles.imageStyle} />
        </View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.designationText}>{designation}</Text>
        <Text>{location}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  upperMainView: {
    aspectRatio: 1 / 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
    paddingHorizontal: '5%',
  },
  personImageView: {
    width: '40%',
    overflow: 'hidden',
    borderRadius: 500,
  },
  imageStyle: {
    aspectRatio: 1 / 1,
  },
  name: {
    fontFamily: FontFamily.medium,
    fontSize: 24,
    color: Colors.BLACK,
    marginTop: '5%',
  },
  designationText: {
    fontSize: 16,
    color: Colors.BLACK,
    marginVertical: '2%',
  },
});

export default DetailUpperView;
