import React, {FC} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../Theme/Colors/Colors';

interface FABProps {
  setSearchText?: (val: string) => void;
}

const SearchBar: FC<FABProps> = ({setSearchText}) => {
  return (
    <View style={styles.searchBarView}>
      <View style={styles.searchIcon}>
        <Icon name="search" size={25} color={Colors.BLACK} />
      </View>
      <View style={styles.searchField}>
        <TextInput placeholder="Search" onChangeText={setSearchText} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarView: {
    backgroundColor: Colors.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '2%',
    borderRadius: 5,
    marginTop: '2%',
  },
  searchIcon: {
    flex: 0.1,
  },
  searchField: {
    flex: 0.9,
  },
});

export default SearchBar;
