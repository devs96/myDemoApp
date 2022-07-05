import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC, useState} from 'react';
import {
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import HorizontalPeopleList from '../../Components/CreateGroup/HorizontalPeopleList';
import HeaderBar from '../../Components/HeaderBar';
import ImagePickerPopup from '../../Components/ImagePickerPopup';

import {MainStackParamList} from '../../Navigations/MainStack';
import {typeActions} from '../../Store/Actions';
import {RootState} from '../../Store/Store';
import Colors from '../../Theme/Colors/Colors';
import FontFamily from '../../Theme/FontNames';

type CreateGroupDetailsProps = NativeStackScreenProps<
  MainStackParamList,
  'CreateGroupDetails'
>;

const CreateGroupDetails: FC<CreateGroupDetailsProps> = ({
  route,
  navigation,
}) => {
  const {selectedPeople} = {...route.params};
  const [groupName, setGroupName] = useState<string>('');
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [groupImage, setGroupImage] = useState<string>('');

  const groupData = useSelector((state: RootState) => state.groups.data);
  const dispatch = useDispatch();

  const RenderSelectedPeople = () => {
    return (
      <>
        {selectedPeople.map((item, index) => {
          return (
            <View key={index.toString()}>
              <HorizontalPeopleList
                data={item}
                selectedPeople={selectedPeople}
              />
            </View>
          );
        })}
      </>
    );
  };
  const createGroup = () => {
    let tempGroup = [...groupData];
    tempGroup.push({
      name: groupName,
      imageUrl: groupImage === '' ? 'https://picsum.photos/200' : groupImage,
      lastMessage: 'Group Created',
      groupMembers: selectedPeople,
    });
    dispatch({type: typeActions.SET_GROUP_DATA, payload: tempGroup});
    navigation.pop(2);
  };

  const RenderMainComponent = () => {
    return <Text style={styles.title}>Create Group</Text>;
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        {showPopup && (
          <ImagePickerPopup
            setShowPopup={setShowPopup}
            setGroupImage={setGroupImage}
          />
        )}

        <View style={styles.mainView}>
          <HeaderBar
            leftIconName="arrow-back"
            leftIconClick={navigation.goBack}
            RenderMainComponent={RenderMainComponent}
          />
          <View style={styles.completeTopView}>
            <View style={styles.photoOuterView}>
              <TouchableOpacity
                onPress={() => {
                  setShowPopup(true);
                  Keyboard.dismiss();
                }}>
                {groupImage === '' ? (
                  <Icon
                    name="add-a-photo"
                    size={25}
                    color={Colors.NAVY_BLUE_COLOR}
                    style={styles.cameraIcon}
                  />
                ) : (
                  <Image
                    style={styles.selectedImage}
                    source={{uri: groupImage}}
                  />
                )}
              </TouchableOpacity>
            </View>

            <View style={styles.inputView}>
              <TextInput
                placeholder="Type group subject"
                style={styles.textInput}
                onChangeText={setGroupName}
              />
            </View>
          </View>
          <View style={styles.completeBottomView}>
            <Text>Provide a group subject and group icon</Text>
            <View style={styles.peopleListView}>
              <Text>Members {selectedPeople.length}</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <RenderSelectedPeople />
            </ScrollView>
          </View>
          {groupName.trim().length !== 0 && (
            <View style={styles.nextArrow}>
              <TouchableOpacity onPress={createGroup}>
                <Icon name="arrow-forward" size={25} color={Colors.WHITE} />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND_WHITE,
  },
  mainView: {
    paddingHorizontal: '5%',
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.NAVY_BLUE_COLOR,
    paddingHorizontal: 10,
    paddingBottom: 2,
  },
  inputView: {
    flex: 1,
    marginLeft: '5%',
  },
  photoOuterView: {
    backgroundColor: Colors.WHITE,
    borderRadius: 30,
  },
  completeTopView: {
    flexDirection: 'row',
    marginTop: '5%',
  },
  completeBottomView: {
    marginTop: '5%',
  },
  peopleListView: {
    marginTop: '5%',
  },
  nextArrow: {
    backgroundColor: Colors.NAVY_BLUE_COLOR,
    alignSelf: 'flex-end',
    padding: 10,
    borderRadius: 30,
  },
  cameraIcon: {
    padding: '3%',
  },
  selectedImage: {
    width: 50,
    height: 50,
    borderRadius: 40,
  },
  title: {
    fontFamily: FontFamily.medium,
    fontSize: 16,
    color: Colors.BLACK,
    alignSelf: 'center',
  },
});

export default CreateGroupDetails;
