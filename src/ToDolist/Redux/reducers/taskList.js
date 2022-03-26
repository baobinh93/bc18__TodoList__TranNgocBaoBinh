import { ADD_TASK, DELL_TASK, EDIT_TASK } from "../contants";

let dataFromLocalStorage = JSON.parse(localStorage.getItem("dataTodoList"));
const initialState = () => {
  if (dataFromLocalStorage) {
    return dataFromLocalStorage;
  } else {
    return [];
  }
};
const putDataToLocalStorage = (_data) => {
  localStorage.setItem("dataTodoList", JSON.stringify(_data));
};
export const taskList = (state = initialState(), action) => {
  const generateID = new Date().getTime();
  switch (action.type) {
    case ADD_TASK: {
      putDataToLocalStorage([...state, { id: generateID, task: action.task }]);
      return [...state, { id: generateID, task: action.task }];
    }
    case DELL_TASK: {
      let cloneState = [...state];
      let indexTask = cloneState.findIndex(
        (task) => task.id === action.id && task.task === action.task
      );
      cloneState.splice(indexTask, 1);
      putDataToLocalStorage([...cloneState]);
      return [...cloneState];
    }
    case EDIT_TASK: {
      let cloneState = [...state];
      let indexTask = cloneState.findIndex(
        (task) => task.id === action.id && task.task === action.task
      );
      cloneState[indexTask].task = action.newTask;
      putDataToLocalStorage(cloneState);
      return cloneState;
    }
    default: {
      putDataToLocalStorage([...state]);
      return [...state];
    }
  }
};
