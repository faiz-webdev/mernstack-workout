import React, { useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutContext } from "../components/hooks/useWorkoutContext";

function Home() {
  // const [workouts, setWorkouts] = useState(null);

  const { workout, dispatch } = useWorkoutContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        // setWorkouts(json);
        dispatch({ type: "SET_WORKOUT", payload: json });
      }
    };

    fetchWorkouts();
  }, [dispatch]);

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
