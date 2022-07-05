import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// import Icon from 'react-native-vector-icons/MaterialIcons';
import MembersData from '../../Components/CreateGroup/MembersData';
import FAButton from '../../Components/FAB';
import HeaderBar from '../../Components/HeaderBar';
import {PeopleData} from '../../Components/Messages/SegmentControl';
import SearchBar from '../../Components/SearchBar';
import {MainStackParamList} from '../../Navigations/MainStack';
import Colors from '../../Theme/Colors/Colors';
import FontFamily from '../../Theme/FontNames';
import {Icon} from '../../Theme/Icons';

type CreateGroupProps = NativeStackScreenProps<
  MainStackParamList,
  'CreateGroup'
>;

const CreateGroup: FC<CreateGroupProps> = ({navigation}) => {
  const [selectedPeople, setSelectedPeople] = useState<PeopleData[]>([]);
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const RenderRightComponent = () => {
    return (
      <>
        <TouchableOpacity
          onPress={() => {
            setShowSearch(!showSearch);
          }}>
          <Icon name={'search'} size={25} color={Colors.BLACK} />
        </TouchableOpacity>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <HeaderBar
        leftIconName="arrow-back"
        leftIconClick={navigation.goBack}
        RenderRightComponent={RenderRightComponent}
      />
      {selectedPeople.length >= 2 && (
        <FAButton
          iconName="arrow-forward"
          onPress={() => {
            navigation.navigate('CreateGroupDetails', {
              selectedPeople: selectedPeople,
            });
          }}
        />
      )}
      <Text style={styles.headerText}>Create Group</Text>
      {showSearch && <SearchBar />}
      <Text style={styles.subtitle}>Add Member</Text>
      <MembersData
        selectedPeople={selectedPeople}
        setSelectedPeople={setSelectedPeople}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND_WHITE,
    paddingHorizontal: '5%',
  },
  headerText: {
    fontFamily: FontFamily.semiBold,
    fontSize: 28,
    color: Colors.BLACK,
  },
  subtitle: {
    color: Colors.BLACK,
    fontSize: 14,
    marginTop: '2%',
  },
});

export default CreateGroup;
