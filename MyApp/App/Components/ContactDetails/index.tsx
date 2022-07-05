import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PeopleData} from '../Messages/SegmentControl';

import Icon from 'react-native-vector-icons/MaterialIcons';
import FontFamily from '../../Theme/FontNames';
import Colors from '../../Theme/Colors/Colors';

interface ContactProps {
  personData: PeopleData | undefined;
}

const ContactDetails: FC<ContactProps> = ({personData}) => {
  return (
    <View>
      <Text style={styles.infoTitle}>Contact info</Text>
      <View style={styles.headers}>
        <Icon name="email" size={25} color={Colors.BLUE_GRAY} />
        <Text style={styles.headersText}>Email</Text>
      </View>
      <Text style={styles.valueText}>{personData?.email}</Text>

      <View style={styles.headers}>
        <Icon name="phone" size={25} color={Colors.BLUE_GRAY} />
        <Text style={styles.headersText}>Phone</Text>
      </View>
      <Text style={styles.valueText}>{personData?.mobile}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  valueText: {
    color: Colors.NAVY_BLUE_COLOR,
    fontSize: 14,
    marginTop: '2%',
  },
  infoTitle: {
    color: Colors.BLACK,
    fontFamily: FontFamily.medium,
    fontSize: 17,
  },
  headers: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '5%',
  },
  headersText: {
    color: Colors.BLACK,
    fontSize: 16,
    marginLeft: '4%',
  },
});

export default ContactDetails;
