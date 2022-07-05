import {GroupData, PeopleData} from '../../Components/Messages/SegmentControl';

export const peopleData: PeopleData[] = [
  {
    id: 1,
    name: 'Alex Dell',
    imageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    lastMessage: 'Hi',
    unreadCount: 1,
    lastMessageTime: '2:35 PM',
    email: 'alexd@google.com',
    mobile: '9123456780',
    designation: 'Asst Manager at Walt Disney Company',
    location: 'New york, US',
  },
  {
    id: 2,
    name: 'Andrea Picaro',
    imageUrl:
      'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    lastMessage: 'Where are you?',
    lastMessageTime: '5:22 AM',
    email: 'andreapicaro@google.com',
    mobile: '9123456780',
    designation: 'Manager at Paramount Pictures',
    location: 'Florida, US',
  },
  {
    id: 3,
    name: 'Simon Roberto',
    imageUrl:
      'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    lastMessage: 'Hi, you there?',
    unreadCount: 2,
    lastMessageTime: '11:50 PM',
    email: 'simonrto@google.com',
    mobile: '9123456780',
    designation: 'Team Lead at Lexus',
    location: 'California, US',
  },
  {
    id: 4,
    name: 'Leslie Alexander',
    imageUrl: 'https://picsum.photos/200',
    lastMessage: 'Hello, you there?',
    unreadCount: 1,
    lastMessageTime: '11:50 PM',
    email: 'lesliea@google.com',
    mobile: '9123456780',
    designation: 'Team Lead at Lexus',
    location: 'California, US',
  },
  {
    id: 5,
    name: 'Jane Cooper',
    imageUrl: 'https://picsum.photos/200',
    lastMessage: 'Okay done',
    lastMessageTime: '02:50 PM',
    email: 'jcooper@google.com',
    mobile: '9123456780',
    designation: 'Team Lead at Lexus',
    location: 'California, US',
  },
];

export const groupData: GroupData[] = [
  {
    name: 'Group 1',
    imageUrl: 'https://picsum.photos/200',
    lastMessage: 'Hey All, Whats up?',
    lastMessageTime: '11:50 PM',
    groupMembers: [
      {
        id: 2,
        name: 'Andrea Picaro',
        imageUrl:
          'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        lastMessage: 'Where are you?',
        lastMessageTime: '5:22 AM',
        email: 'andreapicaro@google.com',
        mobile: '9123456780',
        designation: 'Manager at Paramount Pictures',
        location: 'Florida, US',
      },
      {
        id: 3,
        name: 'Simon Roberto',
        imageUrl:
          'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        lastMessage: 'Hi, you there?',
        unreadCount: 2,
        lastMessageTime: '11:50 PM',
        email: 'simonrto@google.com',
        mobile: '9123456780',
        designation: 'Team Lead at Lexus',
        location: 'California, US',
      },
    ],
  },
  {
    name: 'Group 2',
    imageUrl:
      'https://www.seekpng.com/png/full/967-9676420_group-icon-org2x-group-icon-orange.png',
    lastMessage: 'Okay I will be there',
    unreadCount: 11,
    lastMessageTime: '03:44 PM',
    groupMembers: [
      {
        id: 1,
        name: 'Alex Dell',
        imageUrl:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        lastMessage: 'Hi',
        unreadCount: 1,
        lastMessageTime: '2:35 PM',
        email: 'alexd@google.com',
        mobile: '9123456780',
        designation: 'Asst Manager at Walt Disney Company',
        location: 'New york, US',
      },
      {
        id: 2,
        name: 'Andrea Picaro',
        imageUrl:
          'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        lastMessage: 'Where are you?',
        lastMessageTime: '5:22 AM',
        email: 'andreapicaro@google.com',
        mobile: '9123456780',
        designation: 'Manager at Paramount Pictures',
        location: 'Florida, US',
      },
    ],
  },
];
