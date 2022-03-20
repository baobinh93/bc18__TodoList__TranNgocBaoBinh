import { ADD_TASK_COMPLETED, DELL_TASK_COMPLETED } from "../contants";

let dataFromLocalStorage = JSON.parse(
  localStorage.getItem("dataCompletedList")
);
const initialState = () => {
  if (dataFromLocalStorage) {
    return dataFromLocalStorage;
  } else {
    return [];
  }
};
const putDataToLocalStorage = (_data) => {
  localStorage.setItem("dataCompletedList", JSON.stringify(_data));
};
export const taskCompleted = (state = initialState(), action) => {
  const generateID = new Date().getTime();
  switch (action.type) {
    case ADD_TASK_COMPLETED: {
      putDataToLocalStorage([
        ...state,
        { ...action.taskCompleted, completedId: generateID },
      ]);
      return [...state, { ...action.taskCompleted, completedId: generateID }];
    }
    case DELL_TASK_COMPLETED: {
      let cloneState = [...state];
      let indexTask = cloneState.findIndex(
        (task) => task.id === action.id && task.task === action.task
      );
      cloneState.splice(indexTask, 1);
      putDataToLocalStorage([...cloneState]);
      return [...cloneState];
    }
    default: {
      putDataToLocalStorage([...state]);
      return [...state];
    }
  }
};
