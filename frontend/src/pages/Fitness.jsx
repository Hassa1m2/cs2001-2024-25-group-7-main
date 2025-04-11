import React, {useState, useEffect} from "react";
import ExerciseCard from "../components/fitness/ExerciseCard";

const Fitness = () => {
  const [exercises, setExercises] = useState([]);
  const BASE_URL = "http://localhost:5001/static/images/still/"

  useEffect(() => {
    // Fetch exercises from the backend
    fetch("http://localhost:5001/api/v1/exercises")
      .then((res) => res.json())
      .then((data) => {
        setExercises(data);
      })
      .catch((err) => console.error("Error fetching exercises:", err));
    }, []);

    return (
      <div className="container mx-auto px-4 text-left" >
        <h1 className="text-2xl font-bold mt-8">Exercises</h1>
        <h3 className="text-sm font-normal mb-4" >Search to find the perfect exercises for your workout.</h3>

        {/* Grid of 3 columns on medium screens and above, 1 column on small */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {exercises.map((exercise) => (
            <ExerciseCard
              key={exercise._id}
              _id={exercise._id}
              imageUrl={
                BASE_URL+exercise.exerciseImages[0].replace(".gif", ".png")
              }
              title={exercise.name}
              description={exercise.description}
              muscles={[...(exercise.primaryMuscles || []), ...(exercise.secondaryMuscles || [])]}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default Fitness;