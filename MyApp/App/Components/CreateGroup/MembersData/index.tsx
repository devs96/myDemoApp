import React, {FC} from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';

import {peopleData} from '../../../Screens/Message/mockData';
import Colors from '../../../Theme/Colors/Colors';
import {PeopleData} from '../../Messages/SegmentControl';
import HorizontalPeopleList from '../HorizontalPeopleList';
import PeopleList from '../PeopleList';

interface MembersDataProps {
  selectedPeople: PeopleData[];
  setSelectedPeople: (value: PeopleData[]) => void;
}

const MembersData: FC<MembersDataProps> = ({
  selectedPeople,
  setSelectedPeople,
}) => {
  const RenderSelectedPeople = () => {
    return (
      <>
        {selectedPeople.map((item, index) => {
          return (
            <View key={index.toString()}>
              <HorizontalPeopleList
                data={item}
                selectedPeople={selectedPeople}
                setSelectedPeople={setSelectedPeople}
                isEditable={true}
              />
            </View>
          );
        })}
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.selectedMainView}>
        <ScrollView horizontal>
          <RenderSelectedPeople />
        </ScrollView>
      </View>
      <View style={styles.breakLine} />
      <FlatList
        data={peopleData}
        renderItem={({item}) => {
          return (
            <PeopleList
              data={item}
              selectedList={selectedPeople}
              setSelected={setSelectedPeople}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  breakLine: {
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.MEDIUM_GRAY,
    alignSelf: 'center',
    marginVertical: '2%',
  },
  selectedMainView: {
    flexDirection: 'row',
  },
});

export default MembersData;
