import React, { useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutContext } from "../components/hooks/useWorkoutContext";
import { useAuthContext } from "../components/hooks/useAuthContext";

function Home() {
  // const [workouts, setWorkouts] = useState(null);

  const { workout, dispatch } = useWorkoutContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        // setWorkouts(json);
        dispatch({ type: "SET_WORKOUT", payload: json });
      }
    };

    if (user) {
      fetchWorkouts();
    }
  }, [dispatch, user]);

  return (
    <div className="home">
      <div className="workouts">
        {workout &&
          workout.map((work) => (
            <WorkoutDetails key={work._id} workout={work} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
}

export default Home;
