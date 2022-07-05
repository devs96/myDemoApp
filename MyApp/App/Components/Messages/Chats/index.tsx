import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import ChatItem from '../ChatItem';

// import ChatItem from '../ChatItem';
import {PeopleData} from '../SegmentControl';

interface ChatProps {
  data: PeopleData;
  onPersonPress: (val: PeopleData) => void;
}

const Chats: FC<ChatProps> = ({data, onPersonPress}) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          onPersonPress(data);
        }}>
        <ChatItem data={data} />
      </TouchableOpacity>
    </>
  );
};

export default Chats;
