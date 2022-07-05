import {GroupData} from '../../Components/Messages/SegmentControl';
import {groupData} from '../../Screens/Message/mockData';
import {typeActions} from '../Actions';

interface stateType {
  data: GroupData[];
}

const initialState: stateType = {
  data: groupData,
};

export const groups = (
  state: stateType = initialState,
  action: {type: string; payload: GroupData[]},
) => {
  switch (action.type) {
    case typeActions.GROUP_DATA:
      const newState: stateType = {...state, data: [...action.payload]};
      return newState;
    default:
      return state;
  }
};
