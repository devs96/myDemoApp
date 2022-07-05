import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps, DrawerActions} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC, useEffect, useState} from 'react';
import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';
import HeaderBar from '../../Components/HeaderBar';
import SegmentControl, {
  GroupData,
  PeopleData,
} from '../../Components/Messages/SegmentControl';
import SearchBar from '../../Components/SearchBar';
import {MainStackParamList} from '../../Navigations/MainStack';
import {TabBarParamsList} from '../../Navigations/TabBarNavigation';
import {RootState} from '../../Store/Store';
import Colors from '../../Theme/Colors/Colors';
import FontFamily from '../../Theme/FontNames';
import {peopleData} from './mockData';

export type MessageProps = CompositeScreenProps<
  BottomTabScreenProps<TabBarParamsList, 'Message'>,
  NativeStackScreenProps<MainStackParamList, 'BottomBar'>
>;

const Inbox: FC<MessageProps> = (props: MessageProps) => {
  const groupData = useSelector((state: RootState) => state.groups.data);

  const [filteredGroupData, setFilteredGroupData] =
    useState<GroupData[]>(groupData);
  const [filteredPeopleData, setFilteredPeopleData] =
    useState<PeopleData[]>(peopleData);

  const [showSearch, setShowSearch] = useState<boolean>(false);

  const search = (val: string) => {
    if (val.trim().length !== 0) {
      const tempPeopleData = peopleData.filter(item => {
        return item.name.toLowerCase().includes(val.toLowerCase());
      });
      setFilteredPeopleData(tempPeopleData);
      const tempGroupData = groupData.filter(item => {
        return item.name.toLowerCase().includes(val.toLowerCase());
      });
      setFilteredGroupData(tempGroupData);
    } else if (val.length === 0) {
      setFilteredGroupData(groupData);
      setFilteredPeopleData(peopleData);
    }
  };

  const RenderRightComponent = () => {
    return (
      <>
        <TouchableOpacity
          onPress={() => {
            setShowSearch(!showSearch);
          }}>
          <Icon name={'search'} size={25} color={Colors.BLACK} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.groupAddIcon}
          onPress={() => {
            props.navigation.navigate('CreateGroup');
          }}>
          <Icon name={'group-add'} size={25} color={Colors.BLACK} />
        </TouchableOpacity>
      </>
    );
  };

  useEffect(() => {
    setFilteredGroupData(groupData);
  }, [groupData]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <HeaderBar
            RenderRightComponent={RenderRightComponent}
            leftIconClick={() => {
              props.navigation.dispatch(DrawerActions.openDrawer());
            }}
          />
          <Text style={styles.headerText}>Messages</Text>
          {showSearch && <SearchBar setSearchText={search} />}
          <SegmentControl
            peopleData={filteredPeopleData}
            groupData={filteredGroupData}
            props={props}
          />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND_WHITE,
    paddingHorizontal: '5%',
  },
  safeArea: {
    flex: 1,
  },
  headerText: {
    fontFamily: FontFamily.semiBold,
    fontSize: 28,
    color: Colors.BLACK,
  },
  groupAddIcon: {
    paddingLeft: 8,
  },
});

export default Inbox;
