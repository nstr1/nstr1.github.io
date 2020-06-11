  export const filters = (state = {groomer:true, vet:true}, action) => {
    switch (action.type) {
      case "SET_FILTERS":
        return {
          ...state,
          ...action.filter
        }
      default:
        return state
    }
  };

   export const getFilter = state => state;

  export default filters;
