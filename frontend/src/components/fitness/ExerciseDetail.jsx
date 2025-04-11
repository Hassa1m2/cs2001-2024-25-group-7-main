import React from "react";

function ExerciseDetail({ exercise }) {

    function formatLogType(logType) {
        if (!logType) return "";

        const formattedTypes = {
            setsAndReps: "Sets and Reps",
            time: "Time",
            distance: "Distance",
        };

        return formattedTypes[logType] || logType.charAt(0).toUpperCase() + logType.slice(1);
    }

    const {
        name,
        description,
        primaryMuscles = [],
        secondaryMuscles = [],
        equipment = [],
        instructions = [],
        commonMistakes = [],
        recommended = {},
        exerciseImages = [],
        logType,
    } = exercise;
    const BASE_URL = "http://localhost:5001/static/images/"
    const mainImage = BASE_URL + exerciseImages[0] || "/path/to/fallback-image.png";

    return (
        <div className="container mx-auto p-4 mt-10" >

            {/* Main layout: image on left, details on right */}
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2 lg:w-2/5 relative h-96 overflow-hidden rounded shadow">
                    <img
                        src={mainImage}
                        alt={name}
                        className="w-[150%] h-full object-cover object-center"
                    />
                </div>

                {/* Right side: exercise details */}
                <div className="md:w-1/2 flex flex-col">

                    {/* Title */}
                    <div className="flex items-center justify-between mb-2">
                        <h1 className="text-2xl font-bold">{name}</h1>
                    </div>

                    {/* Muscle Images */}
                    <div className=" flex mt-4 mb-4">

                        {/* Primary Muscles */}
                        {primaryMuscles.length > 0 && (
                            <div className="mb-4 mr-16 text-left">
                                <h3 className="mb-2 text-sm font-semibold text-gray-800 uppercase">
                                    Primary
                                </h3>
                                <div className="flex flex-wrap gap-4">
                                    {primaryMuscles.map((muscle) => (
                                        <div key={muscle._id} className="flex flex-col items-center">
                                            <img
                                                src={BASE_URL + muscle.imageURL}
                                                alt={muscle.name}
                                                className="w-16 h-16 object-cover rounded border border-black"
                                            />
                                            <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded mt-1">
                                                {muscle.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Secondary Muscles */}
                        {secondaryMuscles.length > 0 && (
                            <div className="text-left">
                                <h3 className="mb-2 text-sm font-semibold text-gray-800 uppercase">
                                    Secondary
                                </h3>
                                <div className="flex flex-wrap gap-4">
                                    {secondaryMuscles.map((muscle) => (
                                        <div key={muscle._id} className="flex flex-col items-center">
                                            <img
                                                src={BASE_URL + muscle.imageURL}
                                                alt={muscle.name}
                                                className="w-16 h-16 object-cover rounded border border-black"
                                            />
                                            <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded mt-1">
                                                {muscle.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-4 text-left">{description}</p>

                    {/* 3-Column Section for Equipment / Log Type / Recommendation */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center my-4">

                        {/* 1) Equipment */}
                        <div className="text-left">
                            <h3 className="text-xs uppercase mb-2 font-semibold">
                                Equipment
                            </h3>
                            {equipment.length > 0 ? (
                                <ul className="list-none text-sm text-gray-700">
                                    {equipment.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-xs text-gray-400">None</p>
                            )}
                        </div>

                        {/* 2) Log Type */}
                        <div className="text-left">
                            <h3 className="text-xs uppercase mb-2 font-semibold">
                                Log Type
                            </h3>
                            <p className="text-sm text-gray-700">{formatLogType(logType)}</p>
                        </div>

                        {/* 3) Recommendation */}
                        <div className="text-left">
                            <h3 className="text-xs uppercase mb-2 font-semibold">
                                Recommendation
                            </h3>
                            <div className="text-sm text-gray-700">
                                {/* If using sets & reps */}
                                {recommended.minRecommendedSets && (
                                    <p>
                                        <span className="font-medium">Sets:</span>{" "}
                                        {recommended.minRecommendedSets} - {recommended.maxRecommendedSets}
                                    </p>
                                )}
                                {recommended.minRecommendedReps && (
                                    <p>
                                        <span className="font-medium">Reps:</span>{" "}
                                        {recommended.minRecommendedReps} - {recommended.maxRecommendedReps}
                                    </p>
                                )}
                                {/* If using time */}
                                {recommended.timeInMinutes && (
                                    <p>
                                        <span className="font-medium">Time:</span>{" "}
                                        {recommended.timeInMinutes} min
                                    </p>
                                )}
                                {/* If using distance */}
                                {recommended.distanceInKm && (
                                    <p>
                                        <span className="font-medium">Distance:</span>{" "}
                                        {recommended.distanceInKm} km
                                    </p>
                                )}
                                {/* If no recommended data at all */}
                                {!recommended.minRecommendedSets &&
                                    !recommended.minRecommendedReps &&
                                    !recommended.timeInMinutes &&
                                    !recommended.distanceInKm && (
                                        <p className="text-xs text-gray-400">No recommendation</p>
                                    )}
                            </div>
                        </div>
                    </div>

                    {/* Instructions */}
                    {instructions.length > 0 && (
                        <div className="mb-6 text-left">
                            <h3 className="text-sm font-semibold text-gray-800 uppercase mb-2">
                                Instructions
                            </h3>
                            <ol className="list-decimal ml-6 text-sm text-gray-700 space-y-1">
                                {instructions.map((step, idx) => (
                                    <li key={idx}>{step}</li>
                                ))}
                            </ol>
                        </div>
                    )}

                    {/* Common Mistakes (Bullet List) */}
                    {commonMistakes.length > 0 && (
                        <div className="mb-4 text-left">
                            <h3 className="text-sm font-semibold text-gray-800 uppercase mb-2">
                                Common Mistakes
                            </h3>
                            <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
                                {commonMistakes.map((mistake, idx) => (
                                    <li key={idx}>{mistake}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                </div>
            </div>

        </div>
    );
};

export default ExerciseDetail;
