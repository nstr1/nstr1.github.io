import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import appointments, * as fromAppointments from "./appointments";
import filters, * as fromFilters from "./filters";

export const getAppointments = state => fromAppointments.getAppointments(state.appointments);
export const getFilter = state => fromFilters.getFilter(state.filters);


export default history =>
  combineReducers({
    router: connectRouter(history),
    appointments,
    filters,
  });
