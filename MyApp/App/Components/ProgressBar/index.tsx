import React, {FC} from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import Colors from '../../Theme/Colors/Colors';

interface Props {
  progress: string;
}

const ProgressBar: FC<Props> = ({progress}) => {
  const viewWidth: StyleProp<ViewStyle> | undefined = {
    width: Number(progress) + '%' ?? 0,
    backgroundColor:
      Number(progress) <= 30
        ? Colors.PURPLE
        : Number(progress) <= 60
        ? Colors.SKY_BLUE
        : Colors.CYAN_GREEN,
  };
  return (
    <View>
      <View style={styles.mainView}>
        <View style={styles.progressOuterView}>
          <View style={styles.greyBar} />
          <View style={[styles.coloredBar, viewWidth]} />
        </View>
        <View style={styles.percentView}>
          <Text style={styles.percentText}>{progress.toString()} %</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    marginVertical: '2%',
  },
  progressOuterView: {
    flex: 0.9,
    justifyContent: 'center',
  },
  greyBar: {
    backgroundColor: Colors.LIGHT_GRAY,
    width: '100%',
    height: 8,
    borderRadius: 5,
  },
  coloredBar: {
    backgroundColor: Colors.NAVY_BLUE_COLOR,
    height: 8,
    position: 'absolute',
    borderRadius: 5,
  },
  percentView: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentText: {
    fontSize: 10,
    color: Colors.BLACK,
  },
});

export default ProgressBar;
