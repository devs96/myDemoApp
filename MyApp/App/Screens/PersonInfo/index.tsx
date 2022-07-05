import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CommonGroup from '../../Components/CommonGroup';
import ContactDetails from '../../Components/ContactDetails';
import DetailUpperView from '../../Components/DetailUpperView';
import HeaderBar from '../../Components/HeaderBar';
import {MainStackParamList} from '../../Navigations/MainStack';

import Colors from '../../Theme/Colors/Colors';

type GroupInfoProps = NativeStackScreenProps<MainStackParamList, 'PersonInfo'>;

const PersonInfo: FC<GroupInfoProps> = ({route, navigation}) => {
  const {personData} = {...route.params};

  const RenderRightComponent = () => {
    return (
      <TouchableOpacity>
        <Icon name={'more-vert'} size={25} color={Colors.BLACK} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.navView}>
        <HeaderBar
          leftIconName="arrow-back"
          leftIconClick={navigation.goBack}
          RenderRightComponent={RenderRightComponent}
        />
      </View>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <DetailUpperView
          image={personData?.imageUrl}
          name={personData?.name}
          designation={personData?.designation}
          location={personData?.location}
        />
        <View style={styles.lowerMainView}>
          <ContactDetails personData={personData} />
        </View>
        <CommonGroup />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.LIGHT_PURPLE_BACKGROUND,
  },
  scroll: {
    flex: 1,
  },
  navView: {
    backgroundColor: Colors.WHITE,
    paddingHorizontal: '5%',
  },
  lowerMainView: {
    marginVertical: '5%',
    paddingHorizontal: '5%',
  },
});

export default PersonInfo;
