import React, {FC} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import Colors from '../../Theme/Colors/Colors';

const Calendar: FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        backgroundColor={Colors.BACKGROUND_WHITE}
        barStyle="dark-content"
      />
      <View style={styles.container}>
        <Text>Calendar</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  safeArea: {
    flex: 1,
  },
});

export default Calendar;
