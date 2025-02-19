import { useAuthContext } from "./UseAuthContext";
import { useWorkoutsContext } from "./UseWorkoutContext";

export const useLogout = () => {

    const {dispatch} = useAuthContext();
    const {dispatch:workoutsDispatch} = useWorkoutsContext();
    const logout = () => {
         //remove the token from local strength
        localStorage.removeItem('user');

        //dipatch logout action
        dispatch({ type : 'LOGOUT'});
        workoutsDispatch({ type: "SET_WORKOUTS", payload: [] });
    }
    return {logout}
}