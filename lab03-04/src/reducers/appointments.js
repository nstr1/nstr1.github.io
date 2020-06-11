import { cond } from "ramda";

// import {
//     FETCH_TASKS,
//     POST_TASK,
//     DELETE_TASK,
//     UPDATE_TASK
//   } from "../helpers/actionTypes";

  
  export const appointments = (state = [], action) => {
    switch (action.type) {
      case "FETCH_APPOINTMNENTS":
        return action.data
      case "DELETE_APPOINTMNENT":
        return state.filter(el => el.id!=action.id)
      default:
        return state;
    }
  };
  
  export const getAppointments = state => state;
  export const addAppointments = state => state;

  export default appointments;