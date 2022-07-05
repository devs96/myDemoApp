import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';

import ChatItem from '../ChatItem';
import {GroupData} from '../SegmentControl';

interface GroupProps {
  data: GroupData;
  onGroupPress: (val: GroupData) => void;
}

const Groups: FC<GroupProps> = ({data, onGroupPress}) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          onGroupPress(data);
        }}>
        <ChatItem data={data} />
      </TouchableOpacity>
    </>
  );
};

export default Groups;
