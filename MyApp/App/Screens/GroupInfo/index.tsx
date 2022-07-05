import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import DetailsPopup from '../../Components/DetailsPopup';
import DetailUpperView from '../../Components/DetailUpperView';
import HeaderBar from '../../Components/HeaderBar';
import {PeopleData} from '../../Components/Messages/SegmentControl';
import Popup from '../../Components/Popup';
import {MainStackParamList} from '../../Navigations/MainStack';
import {typeActions} from '../../Store/Actions';
import {RootState} from '../../Store/Store';

import Colors from '../../Theme/Colors/Colors';
import FontFamily from '../../Theme/FontNames';

type GroupInfoProps = NativeStackScreenProps<MainStackParamList, 'GroupInfo'>;

const GroupInfo: FC<GroupInfoProps> = ({route, navigation}) => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [showConfirmPopup, setShowConfirmPopup] = useState<boolean>(false);
  const [selectedData, setSelectedData] = useState<PeopleData>();

  const {groupData} = {...route.params};

  const completeGroups = useSelector((state: RootState) => state.groups.data);
  const dispatch = useDispatch();

  const viewPerson = () => {
    navigation.navigate('PersonInfo', {personData: selectedData});
    setShowPopup(false);
  };

  const removePerson = () => {
    const temp = [...completeGroups];
    let objIndex = completeGroups.findIndex(obj => obj.name === groupData.name);
    const updatedMembers = groupData.groupMembers.filter((item: PeopleData) => {
      return item.id !== selectedData?.id;
    });
    temp[objIndex].groupMembers = updatedMembers;
    dispatch({type: typeActions.SET_GROUP_DATA, payload: temp});
    setShowConfirmPopup(false);
  };

  const RenderGroupMembers = () => {
    return (
      <>
        {groupData.groupMembers.map((item, index) => {
          return (
            <View key={index.toString()}>
              <TouchableOpacity
                onPress={() => {
                  setShowPopup(true);
                  setSelectedData(item);
                }}>
                <View style={styles.memberMainView}>
                  <Image
                    source={{uri: item.imageUrl}}
                    style={styles.memberImage}
                  />
                  <Text style={styles.addMemberText}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </>
    );
  };

  const RenderRightComponent = () => {
    return (
      <TouchableOpacity>
        <Icon name={'more-vert'} size={25} color={Colors.BLACK} />
      </TouchableOpacity>
    );
  };

  return (
    <>
      {showPopup && (
        <DetailsPopup
          setShowPopup={setShowPopup}
          data={selectedData}
          onViewClick={viewPerson}
          onRemoveClick={() => {
            setShowPopup(false);
            setShowConfirmPopup(true);
          }}
        />
      )}
      {showConfirmPopup && (
        <Popup
          showPopup={setShowConfirmPopup}
          onOkayPress={removePerson}
          text={'Are you sure you want to remove ' + selectedData?.name}
        />
      )}
      <View style={styles.container}>
        <View style={styles.nav}>
          <HeaderBar
            leftIconName="arrow-back"
            leftIconClick={navigation.goBack}
            RenderRightComponent={RenderRightComponent}
          />
        </View>

        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          <DetailUpperView image={groupData.imageUrl} name={groupData.name} />

          <View style={styles.lowerView}>
            <Text style={styles.membersText}>
              {groupData.groupMembers.length} Members
            </Text>

            <View style={styles.addMemView}>
              <View style={styles.addGroupIcon}>
                <Icon name="person-add-alt-1" size={25} color={Colors.WHITE} />
              </View>
              <Text style={styles.addMemberText}>Add Member</Text>
            </View>

            <RenderGroupMembers />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.LIGHT_PURPLE_BACKGROUND,
  },
  nav: {
    backgroundColor: Colors.WHITE,
    paddingHorizontal: '5%',
  },
  scroll: {
    flex: 1,
  },
  membersText: {
    fontSize: 14,
    color: Colors.BLACK,
  },
  addGroupIcon: {
    backgroundColor: Colors.PURPLE,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  memberImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  addMemView: {
    flexDirection: 'row',
    marginBottom: '2%',
    marginTop: '3%',
  },
  addMemberText: {
    alignSelf: 'center',
    marginLeft: 15,
    fontFamily: FontFamily.medium,
    fontSize: 18,
    color: Colors.BLACK,
  },
  memberMainView: {
    flexDirection: 'row',
    marginVertical: '2%',
    alignItems: 'center',
  },
  lowerView: {
    paddingHorizontal: '5%',
    marginTop: '5%',
  },
});

export default GroupInfo;
