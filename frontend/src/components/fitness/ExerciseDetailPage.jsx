import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ExerciseDetail from "./ExerciseDetail";

function ExerciseDetailPage() {
  const { exerciseId } = useParams();      // get the :exerciseId from the URL
  const [exercise, setExercise] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the exercise by ID
    fetch(`http://localhost:5001/api/v1/exercises/${exerciseId}`)
      .then((res) => res.json())
      .then((data) => {
        setExercise(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching exercise detail:", err);
        setLoading(false);
      });
  }, [exerciseId]);

  if (loading) {
    return <div className="p-4">Loading exercise...</div>;
  }

  if (!exercise) {
    return <div className="p-4">Exercise not found.</div>;
  }

  // Pass the fetched data to your ExerciseDetail component
  return <ExerciseDetail exercise={exercise} />;
}

export default ExerciseDetailPage;
