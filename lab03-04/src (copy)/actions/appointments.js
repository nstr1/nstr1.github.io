import * as fromApi from "../api/appointments";
// import {
//   FETCH_TASKS,
// } from "../helpers/actionTypes";

export const fetchAppointmentsAction = (appointments) => ({
  type: "FETCH_APPOINTMNENTS",
  data: appointments
});


export const fetchAppointments = () => async dispatch => {
  let appointments = await fromApi.fetchAppointments();
  dispatch(fetchAppointmentsAction(appointments));
};

export const deleteAppointmentAction = (id) => ({
  type: "DELETE_APPOINTMNENT",
  id
});

export const deleteAppointment = (id) => async dispatch => {
  let appointment = await fromApi.deleteAppointment(id);
  dispatch(deleteAppointmentAction(id));
};
