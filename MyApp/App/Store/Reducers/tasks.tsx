import {Data} from '../../Components/ManageTasks/TasksLists';
import {typeActions} from '../Actions';

const initialState: {data: Data[]} = {
  data: [],
};

export const getValue = (
  state = initialState,
  action: {type: string; payload: Data[]},
) => {
  switch (action.type) {
    case typeActions.GET_VALUE:
      return Object.assign({}, state, {data: action.payload});
    default:
      return state;
  }
};
