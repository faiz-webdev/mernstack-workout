import { createContext, useReducer } from "react";

export const WorkoutContext = createContext();

export const workoutReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUT":
      return {
        workout: action.payload,
      };
    case "CREATE_WORKOUT":
      return {
        workout: [action.payload, ...state.workout],
      };
    case "DELETE_WORKOUT":
      return {
        workout: state.workout.filter((w) => w._id !== action.payload._id),
      };
    case "UPDATE_WORKOUT":
        console.log(action.payload);
      return state
    default:
      return state;
  }
};

export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutReducer, {
    workout: null,
  });

  return (
    <WorkoutContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutContext.Provider>
  );
};
